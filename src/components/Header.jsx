import React from "react";

const Header = () => {
  return (
    <div className="flex justify-center items-center bg-[#292421] gap-2">
      <img
        className="w-10"
        src={`https://i.ibb.co.com/tMnMNz6N/logo1.png`}
        alt="logo"
      />
      <h3 className="text-xl font-bold text-center text-white">
        Espresso Emporium
      </h3>
    </div>
  );
};

export default Header;
