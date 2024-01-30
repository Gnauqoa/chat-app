import axiosForChatApp from "../config/axios";

const healthCheckAPI = async () => {
  return axiosForChatApp.get("/health");
};


export default healthCheckAPI