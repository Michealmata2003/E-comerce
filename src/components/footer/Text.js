import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoLogoTwitter, IoLogoLinkedin, IoLogoPinterest } from 'react-icons/io';
import { GrFacebookOption } from 'react-icons/gr';
import { FaTelegramPlane } from 'react-icons/fa';
import { BiPhoneCall } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import { FaYoutube } from 'react-icons/fa';
import { CustomInput } from '../input/CustomInput';
import { CustomButton } from '../buttons/Button';
import { MdChair } from "react-icons/md";


const Text = ({ }) => {
    return (
        <div className='w-full flex justify-between p-8 footer'>
            <div className=' text-design2'>
                <div className="logo">
                    <NavLink
                        className="flex text-design1 gap-0.5 items-center text-2xl"
                        to="/"
                    >
                        <MdChair className="text-logo text-4xl" />
                        PreKem
                    </NavLink>
                </div>

                <div className=' gap-3 text-lg text-design2'>
                    <div className='flex gap-4 py-3 align-center w-2/3 text-sm'>
                        <CiLocationOn />
                        <p>8820 American Way Englanwood co 80112</p>

                    </div>
                    <div className='flex gap-4 py-3 align-center w-2/3 text-sm '>
                        <BiPhoneCall />
                        <p>UK:(303) 795-0928 <br /> International +44203 788 7842</p>
                    </div>
                    <div className='flex gap-4 py-3 align-center w-2/3 text-sm '>
                        <MdOutlineMail />
                        <p>prakemservice@gmail.com</p>
                    </div>

                </div>

            </div>
            <div className='text-design2'>
                <h4 className=''>ABOUT US</h4>
                <ul className='flex flex-col py-2 text-sm'>
                    <NavLink>Horman Corporate</NavLink>
                    <NavLink className='text-sm py-1'>Careers</NavLink>
                    <NavLink className='text-sm py-1'>Why Buy Direct</NavLink>
                    <NavLink className='text-sm py-1'>Tracking Order</NavLink>
                    <NavLink className='text-sm py-1'>Privacy & Policy</NavLink>
                    <NavLink className='text-sm py-1'>Terms & Conditions</NavLink>
                </ul>
            </div>
            <div className='text-design2'>
                <h4 className='text-design2'>CUSTOMER SERVICE</h4>
                <ul className='flex flex-col  py-2'>
                    <NavLink className='text-sm py-1'>Help Center</NavLink>
                    <NavLink className='text-sm py-1'>Store Location</NavLink>
                    <NavLink className='text-sm py-1'>We Deliver almost Everywhere</NavLink>
                    <NavLink className='text-sm py-1'>Registry</NavLink>
                    <NavLink className='text-sm py-1'>Privacy & Policy</NavLink>
                    <NavLink className='text-sm py-1'>Terms & Conditions</NavLink>
                    <NavLink className='text-sm py-1'>Careers</NavLink>
                    <NavLink className='text-sm py-1'>Site Map</NavLink>
                </ul>
            </div>
            <div className='text-design2'>
                <h4 className=''>SUBSCRIPTION</h4>

                <ul>
                    <CustomInput
                        name={"newsletter"}
                        placeholder={"Enter Email Address"}
                        type={'text'}
                    />
                    <p>follow us....</p>
                    <div className='flex gap-2 py-3'>
                        <GrFacebookOption className='w-full bg-design2 rounded text-white'/>
                        <IoLogoTwitter className='w-full bg-design2 rounded text-white'/>
                        <IoLogoLinkedin className='w-full bg-design2 rounded text-white'/>
                        <FaYoutube className='w-full bg-design2 rounded text-white'/>
                        <IoLogoPinterest className='w-full bg-design2 rounded text-white'/>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Text