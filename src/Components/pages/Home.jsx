import React from 'react'
import {Typed} from "react-typed";
import { Typewriter } from 'react-simple-typewriter'
import { FaJava} from "react-icons/fa";
export default function Home() {
  
  return (
    <div className='text-white backdrop-blur-sm bg-blue-400/10 p-5 items-start rounded-md w-full h-full flex flex-col justify-center delay-50 overflow-y-auto hide-scrollbar'>
        <h1 className='text-[5rem]'>Hi, I'm <br></br>Harsh Kushwaha 😎</h1>

         <div className='text-2xl text-bold justify-items-start mt-2'>
   <Typewriter
  words={['Java Full-Stack Developer...','MERN Stack Developer...' ,'Problem Solver...', 'Tech Enthusiast...']}
  loop={true}
  cursor
  cursorStyle="|"
  typeSpeed={60}
  deleteSpeed={40}
  delaySpeed={1500}
/>

      </div>
    </div>
  )
}
