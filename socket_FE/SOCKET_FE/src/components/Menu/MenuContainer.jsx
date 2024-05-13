import React from "react";
import "./MenuContainer.css";
import MenuHeader from "./MenuHeader";
import Search from "./Search";
import Conversations from "./Conversations";

const MenuContainer = () => {
  return (
    <>
      <div className="w-full">
        <div className="w-full"><MenuHeader /></div>
        <div className="w-full"><Search /></div>
        <div className="w-full"><Conversations /></div>
      </div>
    </>
  );
};

export default MenuContainer;
