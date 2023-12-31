import React from 'react'
import ProductCard from './ProductCard'
import { HiShoppingCart } from "react-icons/hi";
import { FaHeart } from "react-icons/fa";
import Filter from './Filter';
import FilterComponent from './FilterComponent';



const ProductPage = () => {
  return (
    <div className='lg:p-2 sm:p-4  flex as:flex-col sm:flex-row justify-center items-center'>
      <div className='sm:w-[30%] lg:px-8 as:w-[90%] mx-3 mt-8 h-auto rounded-lg shadow-lg justify-center shadow-indigo-500/40'>
        {hotProduct.map((hotProduct , index) => (
          <Filter key={index} hotProduct={hotProduct}/>
        ))}
      </div>

      <div className=' sm:m-4 as:m-3 grid sm:grid-cols-2 lg:grid-cols-3'>
        {product.map((product , index) => (
          <div className=''>
            <ProductCard key={index} product={product} />   
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductPage


const product = [
  {
    productImg : "https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/pd6.png",
    productTitle : "Garlic Burger",
    ProductDes : "It is a long established fact that a reader BBQ food Chicken.",
    productPrice : "$15.00",
},
{
    productImg : "https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/pd2.png",
    productTitle : "Garlic Burger",
    ProductDes : "It is a long established fact that a reader BBQ food Chicken.",
    productPrice : "$15.00",
},
{
  productImg : "https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/pd3.png",
  productTitle : "Garlic Burger",
  ProductDes : "It is a long established fact that a reader BBQ food Chicken.",
  productPrice : "$15.00",
},
{
  productImg : "https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/pd4.png",
  productTitle : "Garlic Burger",
  ProductDes : "It is a long established fact that a reader BBQ food Chicken.",
  productPrice : "$15.00",
},{
  productImg : "https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/pd5.png",
  productTitle : "Garlic Burger",
  ProductDes : "It is a long established fact that a reader BBQ food Chicken.",
  productPrice : "$15.00",
},{
  productImg : "https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/pd6.png",
  productTitle : "Garlic Burger",
  ProductDes : "It is a long established fact that a reader BBQ food Chicken.",
  productPrice : "$15.00",
},{
  productImg : "https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/pd7.png",
  productTitle : "Garlic Burger",
  ProductDes : "It is a long established fact that a reader BBQ food Chicken.",
  productPrice : "$15.00",
},
]

const hotProduct = [
  {
    img : "https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/pd8.png",
    title : "Garlic Burger",
    price : "$15.00",
  },
  {
    img : "https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/pd3.png",
    title : "Garlic Burger",
    price : "$15.00",
  },{
    img : "https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/pd4.png",
    title : "Garlic Burger",
    price : "$15.00",
  },{
    img : "https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/pd5.png",
    title : "Garlic Burger",
    price : "$15.00",
  },
  {
    img : "https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/pd6.png",
    title : "Garlic Burger",
    price : "$15.00",
  },{
    img : "https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/pd7.png",
    title : "Garlic Burger",
    price : "$15.00",
  },
  {
    img : "https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/pd7.png",
    title : "Garlic Burger",
    price : "$15.00",
  },
  {
    img : "https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/pd7.png",
    title : "Garlic Burger",
    price : "$15.00",
  },
]