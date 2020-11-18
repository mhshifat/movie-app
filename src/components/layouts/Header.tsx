import React from "react";
import HeaderNavs from "./HeaderNavs";
import HeaderProfile from "./HeaderProfile";

const Header = () => {
  return (
    <div className="border-b border-gray-800">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-6">
        <HeaderNavs />

        <HeaderProfile />
      </div>
    </div>
  );
};

export default Header;
