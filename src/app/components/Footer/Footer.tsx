import React from 'react'
import { FaBurger, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='pt-[5rem] pb-[3rem] bg-gray-900 '>
      <div className='w-[80%] pb-[2rem] border-b-[2px] border-b-gray-300 border-opacity-50 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-start gap-[3rem]'>
        {/* 1st part */}
        <div>
          <div className='flex items-center text-white space-x-2'>

            
            <h1 className='text-[20px] sm:text-[30px] font-semibold'>Project</h1>
          </div>
          <p className='text-white text-opacity-60 mt-[0.4rem] '>
            Lorem ipsum dolor sit <br /> amet consectetur adipisicing <br /> elit. Architecto, iure  
          </p>
          <p className='mt-[1rem] text-white'>Support@example.com</p>
          <p className='text-red-300 text-[19px] font-bold'>+(123) 3456 67897</p>
        </div>
        {/* 2nd part  */}
        <div>
          <h1 className='text-[23px] font-semibold mb-[2rem] text-white'>Application</h1>
          <p className='text-white mt-[0.7rem] text-opacity-60 transition-all duration-200 hover:text-yellow-300 cursor-pointer w-fit'>Chicken Burger</p>
          <p className='text-white mt-[0.7rem] text-opacity-60 transition-all duration-200 hover:text-yellow-300 cursor-pointer w-fit'>Beef Burger</p>
          <p className='text-white mt-[0.7rem] text-opacity-60 transition-all duration-200 hover:text-yellow-300 cursor-pointer w-fit'>Crispy Burger</p>
          <p className='text-white mt-[0.7rem] text-opacity-60 transition-all duration-200 hover:text-yellow-300 cursor-pointer w-fit'>Delight Burger</p>
          <p className='text-white mt-[0.7rem] text-opacity-60 transition-all duration-200 hover:text-yellow-300 cursor-pointer w-fit'>Classic Burger</p>
        </div>
        {/* 3rd part */}
        <div>
          <h1 className='text-[23px] font-semibold mb-[2rem] text-white'>Useful Links</h1>
          <p className='text-white mt-[0.7rem] text-opacity-60 transition-all duration-200 hover:text-yellow-300 cursor-pointer w-fit'>Home</p>
          <p className='text-white mt-[0.7rem] text-opacity-60 transition-all duration-200 hover:text-yellow-300 cursor-pointer w-fit'>About</p>
          <p className='text-white mt-[0.7rem] text-opacity-60 transition-all duration-200 hover:text-yellow-300 cursor-pointer w-fit'>Menu</p>
          <p className='text-white mt-[0.7rem] text-opacity-60 transition-all duration-200 hover:text-yellow-300 cursor-pointer w-fit'>Products</p>
          <p className='text-white mt-[0.7rem] text-opacity-60 transition-all duration-200 hover:text-yellow-300 cursor-pointer w-fit'>Newsletter</p>
        </div>
        {/* 4th part */}
        <div>
        <h1 className='text-[23px] font-semibold mb-[2rem] text-white uppercase'>Opening Hours</h1>
        <p className='text-white text-[18px]'>
          Monday-Friday : <span className='text-yellow-300'>8am-4pm</span>
        </p>
        <p className='text-white mt-[0.5rem] text-[18px]'>
          Saturday : <span className='text-yellow-300'>8am-12pm</span>
        </p>
        {/* social icons */}
        <div className='mt-[2rem] flex items-center space-x-6'>
          <FaFacebook className='w-[1.5rem] h-[1.5rem] text-blue-400'/>
          <FaInstagram className='w-[1.5rem] h-[1.5rem] text-red-400'/>
          <FaTwitter className='w-[1.5rem] h-[1.5rem] text-blue-300'/>
        </div>
        </div>

        
        
      </div>
      <p className='text-center text-white text-opacity-50 mt-[1.5rem] '>
      Copyright © 2024 <span className='text-yellow-300'>Maheen Naeem</span>. All rights reserved
      </p>
    </div>
  )
}

export default Footer