import React, { useState } from 'react';
import Arrival from './arrivals/Arrival';
import Rating from './ratings/Rating';
import Seller from './seller/Seller';
import Text from './Text';
import { Container } from '../../../Style';
import { SellerButton } from './SellerButton';
import './Sellers.css'


const SellerComp = () => {
  //   const [isButtonClicked, setIsButtonClicked] = useState(false);
  //   const [currentColor, setCurrentColor] = useState('white');
  const [showArrival, setshowArrival] = useState(true)
  const [showRating, setshowRating] = useState(false)
  const [showSeller, setshowSeller] = useState(false)


  const ShowArrival = () => {
    setshowArrival(true)
    setshowRating(false)
    setshowSeller(false)


  }
  const ShowRating = () => {
    setshowArrival(false)
    setshowRating(true)
    setshowSeller(false)
  }
  const ShowSeller = () => {
    setshowArrival(false)
    setshowRating(false)
    setshowSeller(true)
  }

  return (
    <div style={Container}>



      <div className='w-full m-auto text-center py-9'>
        <Text />
        <div className='w-full grid grid-cols-3 py-6 gap-x-7 align-center justify-center m-auto md:w-1/2'>
          <SellerButton className={showArrival ? 'lactive' : 'notActive'} onClick={ShowArrival}  >NEW ARRIVALS</SellerButton>
          <SellerButton className={showSeller ? 'lactive' : 'notActive'} onClick={ShowSeller} >BEST SELLERS</SellerButton>
          <SellerButton className={showRating ? 'lactive' : 'notActive'} onClick={ShowRating}  >TOP RATES</SellerButton>
        </div>
      </div>
      {showArrival ? <Arrival /> : showSeller ? <Seller /> : showRating ? <Rating /> : null}


    </div>
  )
}

export default SellerComp;


{/* <button onClick={handleButtonClick} style={{backgroundColor:currentColor}} className=''>NEW ARRIVALS</button>
        <button className=''>BEST SELLERS</button>
        <button className=''>TOP RATES</button> */}