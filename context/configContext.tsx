import React, { ReactNode, createContext, useEffect, useState } from "react";
import useToggle from "../hooks/useToggle";
import { getIpData, storeIpData } from "../utils/ip";
import axiosForChatApp from "../config/axios";
import healthCheckAPI from "../api/config";

export type ConfigContextType = {
  loading: boolean;
  setIpData: (ip: string, port: string) => void;
  ip: string;
  port: string;
  error: string;
  configStatus: boolean;
};

export const ConfigContext = createContext<ConfigContextType>({
  ip: "",
  error: "",
  port: "",
  configStatus: false,
  setIpData: (ip: string, port: string) => {},
  loading: false,
});

export const ConfigContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const {
    toggle: configStatus,
    onOpen: onConfigSuccess,
    onClose: onConfigFailed,
  } = useToggle(false);
  const [ip, setIp] = useState<string>("");
  const [port, setPort] = useState<string>("3000");
  const { toggle: loading, onClose, onOpen } = useToggle();
  const [error, setError] = useState<string>("");
  const setIpData = async (ip: string, port: string) => {
    setIp(ip);
    setPort(port);
    await storeIpData(ip, port);
    axiosForChatApp.defaults.timeout = 5000;
    axiosForChatApp.defaults.baseURL = `http://${ip}:${port}/api/v1`;
    onConfigSuccess();
    checkIpData();
  };
  const checkIpData = async () => {
    onOpen();
    healthCheckAPI()
      .then((res) => {
        onConfigSuccess();
        console.log("config success", `http://${ip}:${port}/api/v1`);
      })
      .catch((err) => {
        setError("Invalid IP address");
        console.log("config error", `http://${ip}:${port}/api/v1`);
        onConfigFailed();
        onClose();
      })
      .finally(() => {
        onClose();
      });
  };
  const configIp = async () => {
    onOpen();
    const { ip, port } = await getIpData();
    if (ip && port) {
      axiosForChatApp.defaults.timeout = 5000;
      axiosForChatApp.defaults.baseURL = `http://${ip}:${port}/api/v1`;
      setIp(ip);
      setPort(port);
      checkIpData();
    } else {
      onConfigFailed();
    }
  };
  useEffect(() => {
    configIp();
  }, []);
  return (
    <ConfigContext.Provider
      value={{
        setIpData,
        loading,
        ip,
        port,
        error,
        configStatus,
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
};
