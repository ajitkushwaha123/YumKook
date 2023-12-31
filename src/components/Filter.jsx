import React from 'react'
import { HiShoppingCart } from "react-icons/hi";

const Filter = ({hotProduct}) => {
  return (
    <div>
      <div className='p-2 m-6'>
        <div className='flex items-center justify-center sm:px-6 border-dotted pb-2 py-1 border-b-2 border-gray-200'>
          <img className=' mr-3 w-[100px]' src={hotProduct.img} alt="" />
          <div>
            <h2 className='text-[18px] font-bold text-blackY'>{hotProduct.title}</h2>
            <div className='flex items-center pt-2'>
              <p className='text-[16px] font-bold text-primary mr-4'>{hotProduct.price}</p>
              <p className='p-2 border-2 rounded-full border-primary text-primary '><HiShoppingCart /></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Filter
