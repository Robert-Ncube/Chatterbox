import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";

const SocketContext = createContext();

export const useSocketContext = () => {
  return useContext(SocketContext);
};

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const { authUser } = useAuthContext();
  const [onlineUsers, setOnlineUsers] = useState([]);

  useEffect(() => {
    let newSocket;
    if (authUser) {
      const devURL = "http://localhost:8000";
      const prodURL = "https://chatterbox-8ksu.onrender.com/";

      newSocket = io(prodURL, {
        query: { userId: authUser._id },
      });
      newSocket.on("connect", () => {
        console.log("Connected with socket id:", newSocket.id);
      });
      setSocket(newSocket);

      newSocket.on("getOnlineUsers", (users) => {
        setOnlineUsers(users);
      });

      return () => {
        newSocket.close();
        console.log("Socket disconnected:", newSocket.id);
      };
    } else {
      if (socket) {
        socket.disconnect();
        setSocket(null);
      }
    }
  }, [authUser]);

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};
