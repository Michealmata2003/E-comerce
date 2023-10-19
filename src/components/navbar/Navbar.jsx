import React from "react";
import { NavLink } from "react-router-dom";
import { MdChair } from "react-icons/md";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { Container } from "../../Style";

const Navbar = () => {
  return (
    <div className="bg-design2">
      <div style={Container}>
        <nav className="flex py-4 justify-between text-design4">
          <ul className="flex gap-3.5 text-center items-center text-lg font-medium ">
            <div className="logo">
              <NavLink
                className="flex text-design1 gap-0.5 items-center text-2xl"
                to="/"
              >
                <MdChair className="text-logo text-4xl" />
                PreKem
              </NavLink>
            </div>
          </ul>

          <ul className="flex gap-3.5 text-center items-center text-sm font-semibold">
            
            <li className=" bg-logo py-2 px-4 rounded">
              <NavLink to="/signup">SignUp</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
