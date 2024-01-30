import { useContext } from "react";
import { ConfigContext, ConfigContextType } from "../context/configContext";

const useConfigIp = () => {
  return useContext(ConfigContext) as ConfigContextType;
};

export default useConfigIp;
