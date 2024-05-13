import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import api_url_env from "../config/api";
import { setSocket } from "../redux/action/socketAction";
import { io } from "socket.io-client";

const useSocket = () => {
  const [loading, setLoading] = useState(false);

  const user = useSelector((state) => state.user.user);

  const dispatch = useDispatch();
  const socket = useSelector((state) => state.socket.socket);
  
  useEffect(() => {
    setLoading(true);

    if (user) {
      const newSocket = io(api_url_env, {
        query: {
          userId: user.id,
        }
      });
      dispatch(setSocket(newSocket));
      
      return () => {
        newSocket.close();
        setLoading(false);
      };
    } else {
      socket.close();
      dispatch(setSocket(null));
      setLoading(false);
    }
    
  }, [user]);
  return {loading};
};

export default useSocket;
