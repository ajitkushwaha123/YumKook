import React from 'react';
import { RxCross1 } from "react-icons/rx";

const Cart = () => {

    const finalCart = [
        {
            finalPrice : "$50",
            discount : "10$",
            deliveryCharges : "Free",
            totalAmount : "40$",
            taglinePrice : "$20",
        }
    ]

    const productCart = [
        {
            productImg : "https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/c2.png",
            productTitle : "Best Pizza Dough",
            productPrice : "$50",
            value : "1",
        },
        {
            productImg : "https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/c3.png",
            productTitle : "Best Pizza Dough",
            productPrice : "$50",
            value : "1",
        },
        {
            productImg : "https://html.softtechitltd.com/khadyo/khadyo/assets/images/menu-item/c2.png",
            productTitle : "Best Pizza Dough",
            productPrice : "$50",
            value : "1",
        },
    ]

  return (
    <div >
      <div className='sm:px-10 lg:px-20 w-[100%] flex as:flex-col sm:flex-row'>

        {/* First Half */}
        <div className='as:w-[100%] sm:w-[65%] as:p-4 sm:p-10'>
            <div className='shadow-lg as:px-5 sm:px-12 py-6 rounded-lg'>
                <ul className='flex justify-between items-center'>
                    <li className='border border-primary sm:px-5 sm:py-3 as:px-2 as:py-2 rounded-lg font-semibold text-[15px] text-primary hover:text-white uppercase hover:bg-primary'>Clear All</li>
                    <li className='border border-primary sm:px-5 sm:py-3 as:px-2 as:py-2 rounded-lg font-semibold text-[15px] text-primary hover:text-white uppercase hover:bg-primary'>Update Cart</li>
                </ul>
            </div>

            <div className='shadow-lg rounded-lg shadow-indigo-500/40'>
                {productCart.map((cart , index) => ( 
                    <div className='mt-8 flex justify-between items-center px-12 py-6'>
                        <div className='flex justify-center items-center'>
                           <img src={cart.productImg} alt="" />
                           <p className='ml-5 font-bold text-[20px]'>{cart.productTitle}</p>
                        </div>
                        <h3 className='border-l border-r px-5 font-bold text-[22px]'>{cart.productPrice}</h3>
                        <input type="text" className='border-2 border-primary rounded-lg py-1 p-4 font-semibold text-[18px]
                         w-[7%]' value={cart.value}/>
                        <p className='border-2 p-2 rounded-lg text-primary border-primary hover:text-white hover:bg-primary font-black text-[16px]'><RxCross1 /></p>
                    </div>
                ))}
            </div>    
        </div>

        {/* Second Half */}
        <div className='sm:w-[35%] as:px-2 sm:py-10 as:p-4'>
         <div className='shadow-lg rounded-lg shadow-indigo-500/40 px-10 py-5'>
               <div className='border-b-2 border-gray-200 py-3'>
                  <h3 className='uppercase gray-300'>Price Details</h3>
               </div>

            {finalCart.map((final , index) => (
            <div>
                <div className='pt-5'>
                   <ul className='text-[18px] border-b-2 border-dotted border-gray-200 pb-8'>
                      <li className='flex justify-between pt-3'>Price : <span>{final.finalPrice}</span></li>
                      <li className='flex justify-between pt-3'>Discount : <span>{final.discount}</span></li>
                      <li className='flex justify-between pt-3'>Delivery Charges : <span>{final.deliveryCharges}</span></li>
                   </ul>

                   <p className='flex justify-between pt-3 font-bold text-[20px] border-b-2 border-dotted border-gray-200 pb-3'>Total Amount : <span>{final.totalAmount}</span></p>
               </div>

               <div className='text-primary font-bold pt-4'>
                   You will save {final.taglinePrice} on this order
               </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart