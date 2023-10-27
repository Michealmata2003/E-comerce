import React, { useState } from 'react';
import Arrival from './arrivals/Arrival';
import Rating from './ratings/Rating';
import Seller from './seller/Seller';
import Text from './Text';
import { Container } from '../../../Style';
import { SellerButton } from './SellerButton';


const SellerComp = () => {
  //   const [isButtonClicked, setIsButtonClicked] = useState(false);
  //   const [currentColor, setCurrentColor] = useState('white');
  const [showArrival, setshowArrival] = useState(true)
  const [showRating, setshowRating] = useState(false)
  const [showSeller, setshowSeller] = useState(false)


  const ShowArrival = () => {
    // setIsButtonClicked(true);
    // setCurrentColor('red');
    setshowArrival(true)
    setshowRating(false)
    setshowSeller(false)


  }
  const ShowRating = () => {
    // setIsButtonClicked(true);
    // setCurrentColor('red');
    setshowArrival(false)
    setshowRating(true)
    setshowSeller(false)
  }
  const ShowSeller = () => {
    // setIsButtonClicked(true);
    // setCurrentColor('red');
    setshowArrival(false)
    setshowRating(false)
    setshowSeller(true)
  }
  // const handleButtonClick = () => {
  //   setIsButtonClicked(true);
  //   setCurrentColor('red');
  // }
  // const renderComponent = () => {
  //   if (isButtonClicked) {
  //     setIsButtonClicked(true);
  //     setCurrentColor('red');

  //   } else {
  //     return null
  //   }
  // }

  return (
    <div style={Container}>



      <div className='w-full m-auto text-center py-9'>
        <Text />
        <div className='w-1/2 grid grid-cols-3 py-6 gap-x-7 align-center justify-center m-auto'>
          <SellerButton onClick={ShowArrival}  >NEW ARRIVALS</SellerButton>
          <SellerButton onClick={ShowSeller} >BEST SELLERS</SellerButton>
          <SellerButton onClick={ShowRating}  >TOP RATES</SellerButton>
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