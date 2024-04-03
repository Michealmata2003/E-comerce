import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdChair } from "react-icons/md";
// import { HiOutlineShoppingBag } from "react-icons/hi";
import { Container } from '../../../Style';
import { MdAccountCircle } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { IoMdCart} from "react-icons/io";
import Dropdown from "../dropdown/Dropdown";



const Nav = ({handleShowSettings}) => {
  const [droppingOptions, setDroppingOptions] = useState(false);



  const handleDropdown = () => {
    setDroppingOptions(!droppingOptions)
  }
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
            {/* <li>
              <NavLink className='flex flex text-center items-center font-semibold'>
              <IoMdCart />
              Cart

              </NavLink>
            </li>
          <li>
              <NavLink className="flex flex text-center items-center font-semibold">
                <CiSearch />
                Search
              </NavLink>
            </li> */}
            <li className=" gap-2">
              <NavLink onClick={handleDropdown} className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-gray-300 hover:bg-gray-50 flex text-center items-center font-semibold" >
                <MdAccountCircle />
                Account
              </NavLink>
              {droppingOptions && <Dropdown  handleShowSettings={handleShowSettings}/>  }

            </li>
            
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
