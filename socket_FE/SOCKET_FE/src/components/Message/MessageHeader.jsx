import React from "react";
import { useSelector } from "react-redux";

const MessageHeader = () => {

  const receiver = useSelector((state) => state.receiver.selectReceiver);


  return (
    <div className="w-full flex flex-row justify-between items-center px-6 mt-4">
      <div className=" flex flex-row items-center">
        <div className="flex">
          <div className="avatar online">
            <div className="w-10 h-10 roundead-full">
              <img
                src = {receiver.avatar}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="ml-4">
          <p className="items-center  font-bold text-lg text-gray-200">
            {receiver.fullName}
          </p>
          <p className="text-base">20m minutes ago</p>
        </div>
      </div>
      <div className="">
        <i className="bi bi-telephone-fill ml-5 text-xl"></i>
        <i className="bi bi-camera-video-fill ml-5 text-2xl"></i>
        <i className="bi bi-three-dots-vertical ml-5 text-2xl"></i>
      </div>
    </div>
  );
};

export default MessageHeader;
