import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between shadow-xl p-5 font-semibold text-gray-500">
      <div>
        <img
          className="w-30 h-10"
          src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-emblem.png"
        />
      </div>
      <div>
        <ul className="flex flex-row justify-end space-x-10 ">
          <li className="mr-2  hover:text-orange-500">
            <Link to="/">Home</Link>
          </li>
          <li className="mr-2 hover:text-orange-500">
            <Link to="/search">Search</Link>
          </li>
          <li className="mr-2 hover:text-orange-500">
            <Link to="/help">Help</Link>
          </li>
          <li className="mr-2 hover:text-orange-500">
            <Link to="/menu">Menu</Link>
          </li>
          <li className="mr-2 hover:text-orange-500">
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
