import { ReactNode } from "react";
import { HistoryProvider } from "./history";
import { ScreenOrientationProvider } from "./screenOrientation";
import { AuthContextProvider } from "./authContext";
import { RoomContextProvider } from "./room";
import { ConfigContextProvider } from "./configContext";

const ContextProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ConfigContextProvider>
      <RoomContextProvider>
        <ScreenOrientationProvider>
          <AuthContextProvider>
            <HistoryProvider>{children}</HistoryProvider>
          </AuthContextProvider>
        </ScreenOrientationProvider>
      </RoomContextProvider>
    </ConfigContextProvider>
  );
};

export default ContextProvider;
