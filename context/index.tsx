import { ReactNode } from "react";
import { HistoryProvider } from "./history";
import { ScreenOrientationProvider } from "./screenOrientation";
import { AuthContextProvider } from "./authContext";
import { RoomContextProvider } from "./room";

const ContextProvider = ({ children }: { children: ReactNode }) => {
  return (
    <RoomContextProvider>
      <ScreenOrientationProvider>
        <AuthContextProvider>
          <HistoryProvider>{children}</HistoryProvider>
        </AuthContextProvider>
      </ScreenOrientationProvider>
    </RoomContextProvider>
  );
};

export default ContextProvider;
