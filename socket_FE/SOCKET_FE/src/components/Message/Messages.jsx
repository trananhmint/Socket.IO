import React from "react";
import Message from "./Message";
import useMessages from "../../hooks/useMessages";
import { useSelector } from "react-redux";
import useListenMessage from "../../hooks/useListenMessage";

const Messages = () => {
  const { loading } = useMessages();
   const messages = useSelector((state) => state.messages.messages);
   useListenMessage();


  return (
    <>
      <div className="mt-4 px-4 h-4/5 flex flex-col overflow-auto">
        {messages.map((message) => {
          return (
            <>
              <div className="w-full"><Message message={message} /></div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Messages;
