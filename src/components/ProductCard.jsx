import React from 'react';
import { HiShoppingCart } from "react-icons/hi";
import { FaHeart } from "react-icons/fa";


const product = [
  {
    productImg : "https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/pd6.png",
    productTitle : "Garlic Burger",
    ProductDes : "It is a long established fact that a reader BBQ food Chicken.",
    productPrice : "$15.00",
},
{
    productImg : "https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/pd6.png",
    productTitle : "Garlic Burger",
    ProductDes : "It is a long established fact that a reader BBQ food Chicken.",
    productPrice : "$15.00",
},
]

const ProductCard = ({product}) => {
  return (
    <div>
   
        <div className='shadow-lg group p-4 as:m-6 flex justify-center flex-col items-center rounded-lg relative shadow-indigo-500/40 hover:shadow-primary/20'>
        <div><img src={product.productImg} alt="" /></div>
        <h2 className='text-[20px] font-bold pt-3'>{product.productTitle}</h2>
        <p className='text-[15px] text-gray-500 pt-4 items-center text-center'>{product.ProductDes}</p>
        <h2 className='text-[20px] font-bold text-primary pt-4'>Price : {product.productPrice}</h2>

        <div className='absolute right-5 top-7 hidden group-hover:block'>
          <div className='h-4'>
            <ul className='text-[15px]'>
              <li className='p-2 bg-white rounded-full border-2 text-[18px] text-primary border-primary'>< HiShoppingCart /></li>
              <li className='p-2 bg-white rounded-full mt-4 border-2 text-[18px] text-primary border-primary'><FaHeart /></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
