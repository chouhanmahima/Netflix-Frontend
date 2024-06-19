import React from 'react'
import { IoMdArrowDropdown } from "react-icons/io";

const Header = () => {
  return (
    <div className='absolute z-10 flex w-[100%] items-center justify-between px-6 bg-gradient-to-t from-black'>
      <img className='w-52' src='../images/Logonetflix.png' alt='Netflix-Logo' />
      <div className='flex items-center'>
        <h1 className='text-lg font-medium text-white'>Mahima</h1>
        <IoMdArrowDropdown size="24" color='white' />
        <div className='ml-4'>
          <button className='bg-red-800 text-white px-4 py-2'>Logout</button>
          <button className='bg-red-800 text-white px-4 py-2 ml-2'>Search Movie</button>
        </div>
      </div>
    </div>
  )
}

export default Header;