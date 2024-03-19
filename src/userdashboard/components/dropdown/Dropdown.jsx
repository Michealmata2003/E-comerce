import React, { useState } from 'react'

const Dropdown = () => {



    return (
        <div>
            <div className='absolute text-black  mt-2 py-5 px-3 rounded-md bg-white '>

                <a href="#" className=" my-1 text-gray-700 rounded block px-4 py-2 text-sm bg-design4 hover:bg-logo" role="menuitem" tabindex="-1" id="menu-item-0">Order</a>
                <a href="#" className=" my-1text-gray-700 rounded block px-4 py-2 text-sm bg-design4 hover:bg-logo" role="menuitem" tabindex="-1" id="menu-item-1">Settings</a>
                <a href="#" className="my-1 text-gray-700 rounded block px-4 py-2 text-sm bg-design4 hover:bg-logo" role="menuitem" tabindex="-1" id="menu-item-2">Log Out</a>
            </div>
        </div>
    )
}

export default Dropdown
