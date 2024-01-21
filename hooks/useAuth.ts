import { useContext } from "react";
import { AuthContext, AuthContextType } from "../context/authContext";

const useAuth = () => {
  return useContext(AuthContext) as AuthContextType;
};

export default useAuth;
