import { ReactNode } from "react";
import { HistoryProvider } from "./history";
import { ScreenOrientationProvider } from "./screenOrientation";
import { AuthContextProvider } from "./authContext";

const ContextProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ScreenOrientationProvider>
      <AuthContextProvider>
        <HistoryProvider>{children}</HistoryProvider>
      </AuthContextProvider>
    </ScreenOrientationProvider>
  );
};

export default ContextProvider;
