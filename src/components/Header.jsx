import React from "react";
import MenuItem from "./MenuItem";
import { IoHomeOutline } from "react-icons/io5";
import { IoMdInformationCircleOutline } from "react-icons/io";

const Header = () => {
  return (
    <div className="flex justify-around items-center py-3 shadow-lg">
      <div className="flex gap-8">
        <MenuItem title="Home" address="/" Icon={IoHomeOutline} />
        <MenuItem
          title="About"
          address="/about"
          Icon={IoMdInformationCircleOutline}
        />
      </div>
      <div className="flex gap-1 items-center">
        <span className="text-2xl text-white font-bold bg-gradient-to-r from-pink-500 to-purple-700 py-1 px-2 rounded-xl">
          Binge
        </span>
        <span className="text-xl font-semibold">Worthy</span>
      </div>
    </div>
  );
};

export default Header;
