import React, { useState } from "react";
import { Link, Nav, NavLink } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";


const Header = () => {
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  const handleCartHover = () => {
    setIsCartModalOpen(true);
  };

  const handleCartLeave = () => {
    setIsCartModalOpen(false);
  };
  return (
    <div className="flex justify-between shadow-xl p-5 font-semibold text-gray-500">
      
    <Link to='/'>
    <div>
        <img
          className="w-30 h-10 ml-20"
          src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-emblem.png"
        />
      </div>
      </Link>
      <div>
        <ul className="flex flex-row justify-end space-x-10 mr-20 ">
          <li className="mr-2  hover:text-orange-500">
            <NavLink className={({ isActive }) =>
            isActive ? "text-orange-500 font-bold" : ""
          } to="/">Home</NavLink>
          </li>
          <li className="mr-2 hover:text-orange-500">
            <NavLink className={({ isActive }) =>
            isActive ? "text-orange-500 font-bold" : ""
          } to="/search">Search</NavLink>
          </li>
          <li className="mr-2 hover:text-orange-500">
            <NavLink className={({ isActive }) =>
            isActive ? "text-orange-500 font-bold" : ""
          } to="/help">Help</NavLink>
          </li>
          <li className="mr-2 hover:text-orange-500">
            <NavLink className={({ isActive }) =>
            isActive ? "text-orange-500 font-bold" : ""
          } to="/menu">Menu</NavLink>
          </li>
          <li className="mr-2 hover:text-orange-500"  onMouseEnter={handleCartHover}
          onMouseLeave={handleCartLeave}>
            <NavLink className={({ isActive }) =>
            isActive ? "text-orange-500 font-bold" : ""
          } to="/cart">Cart</NavLink>
          {isCartModalOpen && (
            <div className="absolute bg-white p-20- shadow-md rounded-xl">
              <h1 className="text-3xl text-gray-500 font-bold">Cart Empty</h1>
              <h2>Good food is always cooking! Go ahead, order some yummy items from the menu.</h2>
            </div>
          )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
