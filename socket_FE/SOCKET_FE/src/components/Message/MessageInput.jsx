import React from "react";
import { useState } from "react";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
  const [input, setInput] = useState("");
  const { loading, sendMessage } = useSendMessage();

  const handleMessage = (e) => {
    e.preventDefault();
    sendMessage(input);
    setInput("");
  };

  return (
    <div className="w-full">
      <form onSubmit={handleMessage} className="w-full flex flex-row px-5 items-center">
        <input
          placeholder="Chat here"
          className="w-full flex textarea textarea-bordered h-3 "
          value={input}
          onChange={(e) => {
            e.preventDefault();
            setInput(e.target.value);
          }}
        />
        <button type="submit" className="btn ml-4 ">
          <i className=" bi bi-send-fill items-center "></i>
        </button>
      </form>
    </div>
  );
};

export default MessageInput;
