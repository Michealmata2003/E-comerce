import React from 'react';
import './Sellers.css';
export const SellerButton = ({ children, onClick, style, className }) => {
    return (
        // <button className='text-[15px]  sm:text-lg lg:text-l py-3 px-3.5 border-2  font-medium text-red' style={style} onClick={onClick} >{children}</button>
        <button className={className} style={style} onClick={onClick} >{children}</button>

    )
}

