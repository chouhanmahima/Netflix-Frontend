import React from 'react'
import { IoMdPlay } from "react-icons/io";
import { CiCircleInfo } from "react-icons/ci";

const VideoTitle = () => {
  return (
    <div className='w-screen aspect-video absolute text-white pt-[18%] p-12'>
        <h1 className='text-3xl font-bold'>Netflix New Movie Title</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, voluptatum!</p>
        <div className='flex mt-8 gap-2'>
            <button className='flex gap-2 items-center px-6 py-2 bg-white text-black font-bold rounded-md hover:bg-opacity-80'>
                <IoMdPlay size={30} />
                <span>Play</span>
            </button>
            <button className='flex gap-2 items-center px-6 py-2 bg-slate-800 opacity-70 text-white font-bold rounded-md hover:bg-opacity-80'>
                <CiCircleInfo size={30} color='white'/>
                <span>Watch More</span>
            </button>
        </div>
    </div>
  )
}

export default VideoTitle