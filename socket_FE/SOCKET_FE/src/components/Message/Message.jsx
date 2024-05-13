import React from "react";
import { useSelector } from "react-redux";

const Message = ({ message }) => {
  const receiver = useSelector((state) => state.receiver.selectReceiver);

  const type = receiver.id === message.receiverId ?  "chat-end" : "chat-start";

  return (
    <div className={`chat ${type}`}>
      <div className="chat-bubble">{message.message}</div>
    </div>
  );
};

export default Message;
