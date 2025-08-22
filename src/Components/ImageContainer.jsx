import React from 'react'
import mypic from "../assets/image.png";
export default function ImageContainer() {
  return (
   <div className='text-white backdrop-blur-sm bg-blue-400/10 rounded-md w-full h-full flex justify-center items-center delay-50'>
    <div>
          <img 
            src={mypic} 
            alt="Profile" 
             className="w-60 h-60 rounded-full object-cover object-top
             shadow-lg hover:rotate-6 hover:scale-105 
             transition-transform duration-500"
          />
          <div className='w-full mt-2 text-lg font-bold text-center hidden max-[950px]:block'>Harsh Kushwaha</div>
        </div>
   </div>
  )
}
