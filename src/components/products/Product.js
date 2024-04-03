import React, { useState,useEffect } from 'react';
import Text from './text';
import axios from 'axios';


const Product = () => {
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   const getProducts = async () => {
  //     try {
  //       const response = await  axios.get('https://prakem-api.onrender.com/api/product/all/');
        
  //       setData(response); 
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   getProducts();
  // }, []); 
  
  return (
    <div className=''>
      <Text />
      <div>
        <div className='py-7 w-full'>
          <div className='grid grid-cols-2  w-1/2 m-auto gap-6 text-center md:grid-cols-4'>
            <h6 className='text-xl font-semibold hover:text-logo cursor-pointer'>New Arrival</h6>
            <h6 className='text-xl font-semibold hover:text-logo cursor-pointer'>Featured</h6>
            <h6 className='text-xl font-semibold hover:text-logo cursor-pointer'>On Sale</h6>
            <h6 className='text-xl font-semibold hover:text-logo cursor-pointer'>Trending</h6>
          </div>
          {/* {data.map((res,index) =>(
            <div key={index}>
              <img  src={res.products.images} alt='img'/>
            </div>
          ))} */}

        </div>
        <div>
        </div>
      </div>
    </div>
  )
}

export default Product