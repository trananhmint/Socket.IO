import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';


const MenuHeader = () => {
  return (
    <>
      <div className="w-full mt-4 flex flex-row justify-between px-3">
          <div className="avatar">
            <div className="w-10 h-10 rounded-full">
              <img
                src="https://mlpnk72yciwc.i.optimole.com/cqhiHLc.IIZS~2ef73/w:376/h:270/q:75/https://bleedingcool.com/wp-content/uploads/2021/06/Pikachu-color-model-publicity-cel.jpg"
                alt=""
              />
            </div>
          </div>

        <h3 className="text-white font-bold text-xl items-center">Socket Chat</h3>
        <i className="bi bi-pencil-square text-xl text-white" ></i>
      </div>
    </>
  );
};

export default MenuHeader;
