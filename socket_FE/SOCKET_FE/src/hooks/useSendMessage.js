import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import messageService from "../services/message.service";
import { toast } from "react-toastify";
import useMessages from "./useMessages";
import { addMessage } from "../redux/action/messageAction";

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const receiver = useSelector((state) => state.receiver.selectReceiver);
  const dispatch = useDispatch();

  const sendMessage = async (message) => {
    setLoading(true);
    const response = await messageService.sendMessage(message, receiver.id);
    setLoading(false);
    dispatch(addMessage(response));
  };

  return {
    loading,
    sendMessage,
  };
};

export default useSendMessage;
