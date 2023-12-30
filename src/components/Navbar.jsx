import React from 'react';
import { FaHeart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link , NavLink } from 'react-router-dom';

// import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {

    const navIcons = [
        {
            id: "wishlist",
            link:"/whislist",
            icons : <FaHeart />,
        },
        {
            id: "login",
            link:"/login",
            icons : <FaUser />,
        },
        {
            id: "cart",
            link:"/cart",
            icons : <FaShoppingCart />,
        },
    ]

    const navItems = [
        {
            id: "home",
            link : "/",
            title : "Home",
          },
          {
            id: "about",
            title: "About us",
            link : "/login",
          },
          {
            id: "menut",
            title: "Menu",
            link : "/register",
          },
          {
            id: "blog",
            title: "Blog",
            link : "/cart",
          },
          {
            id: "pages",
            title: "Pages",
            link : "/pages",
          },
          {
            id: "contact",
            title: "Contact Us",
            link : "/contact",
          },
    ];

  return (
    <div className='w-full as:h-[60px] ss:h-[80px] bg-black flex justify-between items-center align-middle px-7 md:px-12 lg:px-16'>
      <div className='xs:w-[100px] as:w-[90px] md:w-[120px] as:h-[60px] xs:h-[80px] py-3'>
        <img className='flex justify-center align-middle' src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/logo/logo.png" alt="" />
      </div>

      <nav className='hidden md:block h-[80px] md:flex justify-center items-center align-middle'>
        <ul className='flex text-[15px] font-regular uppercase text-white'>
          {navItems.map((nav , index) => (
            <li key={nav.id} className={`font-poppins  hover:text-primary cursor-pointer text-[14px] ${index === navItems.length - 1 ? 'pr-0' : 'pr-10'}`}>
               <NavLink to={nav.link}>
                  {nav.title}
               </NavLink>
               {/* {(index === 0 || index === 3 || index === 4) && <IoIosArrowDown />} */}
            </li>
          ))}
        </ul>
      </nav>

      <div className=''>
        <ul className='flex text-white as:text-[15px] xs:text-[18px] justify-center '>
            {navIcons.map((icons , index) => (
                <li key = {icons.id} className='xs:mr-4 as:mr-2 as:w-[28px] as:h-[28px] xs:w-[40px] xs:h-[40px] border flex justify-center items-center rounded-full hover:text-primary hover:bg-black hover:border hover:border-primary'>
                    <NavLink to={icons.link}>
                      {icons.icons}
                    </NavLink>
                </li>
            ))}

           <NavLink to={"/login"} >
            <button className='xs:px-9 as:px-4 xs:py-2 md:ml-10 ss:ml-2 bg-primary hover:bg-black hover:text-primary hover:border-primary hover:border rounded-lg text-[] font-semibold'>
              Login
            </button>
           </NavLink>
        </ul>

        <div>
          
        </div>
      </div>
    </div>
  )
}

export default Navbar
