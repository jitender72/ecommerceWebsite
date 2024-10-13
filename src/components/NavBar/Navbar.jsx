import React, { useState } from "react";
import { assets } from "../../assets/frontend_assets/assets";

import { NavLink, Link } from "react-router-dom";
function Navbar() {
  const [visible, setVisible] = useState(false);

  return (
    <nav className="flex justify-between items-center h-14">
      <img src={assets.logo} alt="" className="w-36" />
      <ul className="hidden sm:flex gap-5 text-sm  text-gray-700 ">
        <NavLink to="/" className={``}>
          <p>Home</p>
          <hr className="border-none w-2/4 h-[1.5px] bg-gray-700 m-auto hidden" />
        </NavLink>
        <NavLink to="/collections">
          <p>Collections</p>
          <hr className="border-none w-2/4 h-[1.5px] bg-gray-700 m-auto  hidden" />
        </NavLink>
        <NavLink to="/About">
          <p>About</p>
          <hr className="border-none w-2/4 h-[1.5px] bg-gray-700 m-auto hidden" />
        </NavLink>
        <NavLink to="/contacts">
          <p>Contact us</p>
          <hr className="border-none w-2/4 h-[1.5px] bg-gray-700 m-auto hidden" />
        </NavLink>
      </ul>

      {/* search icon and cart */}

      <div className="flex items-center gap-6">
        <img src={assets.search_icon} alt="" className="w-5 cursor-pointer" />
        <div className="group relative">
          <img
            src={assets.profile_icon}
            alt=""
            className="w-5 cursor-pointer"
          />
          <div className="group-hover:block hidden absolute dropdown-menu right-0  pt-4">
            <div className="flex flex-col gap-2 w-36  py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Log Out</p>
            </div>
          </div>
        </div>

        <Link to="/cart" style={{ position: "relative" }}>
          <img src={assets.cart_icon} alt="" className="w-5 min-w-5" />
          <p className="absolute bottom-[-5px] right-[-5px] w-4 text-center leading-4  bg-black text-white aspect-square rounded-full text-[8px]">
            10
          </p>
          {/* <p
            style={{
              width: "0.8rem",
              height: "0.8rem",
              borderRadius: "50%",
              backgroundColor: "black",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "0.6rem",
              position: "absolute",
              bottom: "-0.2rem",
              right: "-0.1rem",
            }}
          >
            10
          </p> */}
        </Link>
        <img
          src={assets.menu_icon}
          alt=""
          className="w-5 sm:hidden cursor-pointer"
          onClick={() => setVisible(true)}
        />
      </div>

      {/* sideBar for small screen */}

      <div
        className={`${
          visible ? "w-full" : "w-0"
        } absolute top-0 right-0 h-full transition-all bg-white`}
      >
        {/* <div
          className={`transition-all w-0 cursor-pointer pl-4 pt-4 text-white font-bold  bg-black`}
        > */}
        <div
          onClick={() => setVisible(false)}
          className="p-2 text-black cursor-pointer flex gap-2 pt-4"
        >
          <img src={assets.dropdown_icon} alt="" className="h-4 rotate-180" />
          <p className="text-black h-4 flex flex-col justify-center sm:hidden">
            Back
          </p>
        </div>

        <div
          className={`menu  ${
            visible === true ? "block" : "hidden"
          } flex flex-col items-center mt-24  gap-2 transition-all h-full`}
        >
          <NavLink to="/" onClick={() => setVisible(false)}>
            <p>HOME</p>
            <hr className="hidden" />
          </NavLink>

          <NavLink to="/collections" onClick={() => setVisible(false)}>
            <p>COLLECTIONS</p>
            <hr className="hidden" />
          </NavLink>

          <NavLink to="/about" onClick={() => setVisible(false)}>
            <p>ABOUT </p>
            <hr className="hidden" />
          </NavLink>

          <NavLink to="/contacts" onClick={() => setVisible(false)}>
            <p className="capitalize">CONTACTS</p>
            <hr className="hidden" />
          </NavLink>
        </div>
      </div>
      {/* </div> */}
    </nav>
  );
}

export default Navbar;
