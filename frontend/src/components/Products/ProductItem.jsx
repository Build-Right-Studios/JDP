import React from 'react'
import { Link } from 'react-router-dom';

const ProductItem = ({id, image, name}) => {


  return (
    <Link to = {`/product/${id}`} className='text-gray-700 cursor-pointer'>
        <div className="overflow-hidden w-full h-[300px] aspect-square"> 
          <img src={image} className="w-full h-full object-cover" alt="" />
        </div>

        <p className='pt-3 pb-1 text-lg text-center font-extrabold'>{name}</p>
        <div className='flex items-center justify-center'>
            <button className='h-[50px] bg-[#5c8a40] px-2 rounded-xl text-white text-lg'>Explore More</button>
        </div>
        
    </Link>
  )
}

export default ProductItem