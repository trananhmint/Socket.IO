import React, { useEffect, useState } from "react";
import messageService from "../services/message.service";
import { useDispatch, useSelector } from "react-redux";
import { storeMessages } from "../redux/action/messageAction";

const useMessages = () => {
  const [loading, setLoading] = useState(false);
  const [messagesList, setMessagesList] = useState([]);

  const dispatch = useDispatch();
  

  const receiver = useSelector((state) => state.receiver.selectReceiver);
  const getMessages = async () => {
    setLoading(true);
    const messages = await messageService.getMessages(receiver.id);
    setMessagesList(messages);
    dispatch(storeMessages(messages));
    setLoading(false);
  };
  useEffect(() => {
    getMessages();
  }, [receiver]);

  return {
    loading,
    messagesList,
  };
};

export default useMessages;
