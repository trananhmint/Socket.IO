import React from "react";
import MessageHeader from "./MessageHeader";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import EmptyMessage from "./EmptyMessage";

const MessageContainer = () => {
  const selectReceiver = useSelector((state) => state.receiver.selectReceiver);

  

  return (
    <div className="w-full h-screen flex-col">
      {!selectReceiver ? (
        <div>
          <EmptyMessage />
        </div>
      ) : (
        <>
          <div className="w-full">
            <MessageHeader />
          </div>
          <div className="w-full h-4/5">
            <Messages />
          </div>
          <div className="w-full bottom-0">
            <MessageInput />
          </div>
        </>
      )}
    </div>
  );
};

export default MessageContainer;
