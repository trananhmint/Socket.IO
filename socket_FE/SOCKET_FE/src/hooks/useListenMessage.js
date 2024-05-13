import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../redux/action/messageAction';

const useListenMessage = () => {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const message = useSelector((state) => state.messages.messages);
    const socket = useSelector((state) => state.socket.socket);

    useEffect(() => {
      setLoading(true);
      socket?.on("newMessage", (newMessage) => {
        dispatch(addMessage(newMessage))
        console.log(newMessage);
      })
      setLoading(false);
    }, [socket])



  return {loading}
}

export default useListenMessage