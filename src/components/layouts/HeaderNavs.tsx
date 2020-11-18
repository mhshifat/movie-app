import React from "react";
import { Link } from "react-router-dom";
import HeaderLogo from "./HeaderLogo";

const HeaderNavs = () => {
  return (
    <ul className="flex flex-col md:flex-row items-center">
      <li>
        <HeaderLogo />
      </li>
      <li className="md:ml-6 mt-3 md:mt-0">
        <Link to="/shows" className="hover:text-gray-300">
          TV Shows
        </Link>
      </li>
      <li className="md:ml-6 mt-3 md:mt-0">
        <Link to="/actors" className="hover:text-gray-300">
          Actors
        </Link>
      </li>
    </ul>
  );
};

export default HeaderNavs;
