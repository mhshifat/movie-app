import React from "react";
import { Link } from "react-router-dom";
import HeaderSearch from "./HeaderSearch";

const HeaderProfile = () => {
  return (
    <div className="flex flex-col md:flex-row items-center">
      <HeaderSearch />

      <div className="md:ml-4 mt-3 md:mt-0">
        <Link to="/">
          <img
            src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-512.png"
            alt="avatar"
            className="rounded-full w-8 h-8"
          />
        </Link>
      </div>
    </div>
  );
};

export default HeaderProfile;
