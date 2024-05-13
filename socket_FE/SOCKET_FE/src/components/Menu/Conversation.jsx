import React from "react";
import { useDispatch } from "react-redux";
import { selectReceiver } from "../../redux/action/conversationAction";

const Conversation = (props) => {

  const dispatch = useDispatch();
  
  const handleSelectReceiver = (e) => {
    e.preventDefault();
    dispatch(selectReceiver(props));
  }


  return (
    <div className="flex flex-row w-full mt-2" onClick={handleSelectReceiver}>
      <div className="avatar online">
        <div className="w-10 h-10 rounded-full">
          <img
            src= {props.avatar}
            alt=""
          />
        </div>
      </div>
      <div className="w-full">
        <p className="font-bold text-white">{props.fullName}</p>
        <p>You: How are you today?</p>
      </div>
    </div>
  );
};

export default Conversation;
