import React from 'react'
import { IoMdPlay } from "react-icons/io";
import { CiCircleInfo } from "react-icons/ci";

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-[vw] absolute text-white pt-[18%] p-12'>
        <h1 className='text-3xl font-bold'>{title}</h1>
        <p className='w-1/3 mt-4'>{overview}</p>
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