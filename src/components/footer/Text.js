import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoLogoTwitter, IoLogoLinkedin, IoLogoPinterest } from 'react-icons/io';
import { GrFacebookOption } from 'react-icons/gr';
import { FaTelegramPlane } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { CustomInput } from '../input/CustomInput';
import { CustomButton } from '../buttons/Button';

const Text = ({}) => {
    return (
        <div className='w-full flex justify-between p-8'>
            <div className='w-1/3 text-white'>
                <h4>ABOUT US</h4>
                <p className='py-4 text-base'>Lorem ipsum dolor sit amet cons adipisicing elit sed do eiusm tempor incididunt ut labor et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
                </p>
                <div className='flex gap-3 text-lg '>
                    <GrFacebookOption />
                    <IoLogoTwitter />
                    <IoLogoLinkedin />
                    <FaYoutube />
                    <IoLogoPinterest />
                </div>

            </div>
            <div className=''>
                <h4 className='text-white '>INFORMATION</h4>
                <ul className='flex flex-col text-white py-2'>
                    <NavLink>About Us</NavLink>
                    <NavLink>Manufactures</NavLink>
                    <NavLink>Tracking Order</NavLink>
                    <NavLink>Privacy & Policy</NavLink>
                    <NavLink>Terms & Conditions</NavLink>
                </ul>
            </div>
            <div>
                <h4 className='text-white'>MY ACCOUNT</h4>
                <ul className='flex flex-col text-white py-2'>
                    <NavLink>Login</NavLink>
                    <NavLink>My Cart</NavLink>
                    <NavLink>Wishlist</NavLink>
                    <NavLink>Compare</NavLink>
                    <NavLink>My Account</NavLink>
                </ul>
            </div>
            <div>
                <h4 className='text-white'>NEWSLETTER</h4>
                <CustomInput
                    name={"newsletter"}
                    placeholder={"Enter Email Address"}
                    type={'text'}
                />
                <CustomButton><FaTelegramPlane />Subscribe</CustomButton>
            </div>
        </div>
    )
}

export default Text