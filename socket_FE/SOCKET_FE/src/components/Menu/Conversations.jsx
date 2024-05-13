import React, { useEffect, useState } from "react";
import Conversation from "./Conversation";
import useReceivers from "../../hooks/useReceivers";

const Conversations = () => {
  const { loading, receiversList } = useReceivers();

  console.log(receiversList);

  return (
    <div className="mt-4 ">
      <ul className="menu  bg-base-200 w-full">
        {receiversList.map((receiver) => (
          <li key={receiver.id}>
            <Conversation fullName={receiver.fullName} avatar={receiver.avatar} id= {receiver._id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Conversations;
