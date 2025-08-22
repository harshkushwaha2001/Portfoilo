import React from 'react'
import { FaLinkedinIn, FaGithub, FaHouseUser, FaInstagramSquare, FaPhoneAlt, FaMastodon } from "react-icons/fa";

export default function ProfileDetails() {
  return (
  //  <div className='text-white backdrop-blur-sm bg-blue-400/10 gap-5 rounded-md w-full h-full flex flex-col items-center justify-center  mt-4.5'>
    
  //   <div className='flex items-start justify-between gap-8 w-[250px] hover:text-amber-200'><FaLinkedinIn className='size-5 w-5 h-5'/><a href='https://www.linkedin.com/in/harsh-kushwaha-98340b1ba/' className=''>harsh-kushwaha-98340b1ba</a></div>
  //   <div className='flex items-center justify-between gap-8 w-[250px] hover:text-amber-200'><FaGithub className='size-5 w-5 h-5'/><a href="https://github.com/harshkushwaha2001" className='self-start'>harshkushwaha2001</a></div>
  //   <div className='flex items-center justify-between gap-8 w-[250px] hover:text-amber-200'><FaInstagramSquare className='size-5 w-5 h-5'/><a href="https://www.instagram.com/harshkush2001?igsh=MW81MDYxaTV1cWtuaQ=="></a>harshkush2001</div>
  //   <div className='flex items-center justify-between gap-8 w-[250px] hover:text-amber-200'><FaHouseUser className='size-5 w-5 h-5'/>Varanasi, Uttar Pradesh, PIN 221002</div>
  //   <div className='flex items-center justify-between gap-8 w-[250px] hover:text-amber-200'><FaPhoneAlt className='size-5 w-5 h-5'/><a href=""> +91-8303119433</a></div>
  //   <div className='flex items-center justify-between gap-8 w-[250px] hover:text-amber-200'><FaMastodon className='size-5 w-5 h-5'/><a href="mailto:harshkushwaha32001@gmail.com">harshkushwaha32001@gmail.com</a></div>
  //   </div>
  <div className="text-white backdrop-blur-sm bg-blue-400/10 gap-5 rounded-md w-full h-full flex flex-col items-start justify-center mt-4 p-6">
  
  {/* LinkedIn */}
  <div className="flex items-center gap-3 hover:text-amber-200">
    <FaLinkedinIn className="w-5 h-5" />
    <a 
      href="https://www.linkedin.com/in/harsh-kushwaha-98340b1ba/" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      harsh-kushwaha-98340b1ba
    </a>
  </div>

  {/* GitHub */}
  <div className="flex items-center gap-3 hover:text-amber-200">
    <FaGithub className="w-5 h-5" />
    <a 
      href="https://github.com/harshkushwaha2001" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      harshkushwaha2001
    </a>
  </div>

  {/* Instagram */}
  <div className="flex items-center gap-3 hover:text-amber-200">
    <FaInstagramSquare className="w-5 h-5" />
    <a 
      href="https://www.instagram.com/harshkush2001?igsh=MW81MDYxaTV1cWtuaQ==" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      harshkush2001
    </a>
  </div>

  {/* Location */}
  <div className="flex items-center gap-3 hover:text-amber-200">
    <FaHouseUser className="w-5 h-5" />
    <span>Varanasi, Uttar Pradesh, PIN 221002</span>
  </div>

  {/* Phone */}
  <div className="flex items-center gap-3 hover:text-amber-200">
    <FaPhoneAlt className="w-5 h-5" />
    <a href="tel:+918303119433">+91-8303119433</a>
  </div>

  {/* Email */}
  <div className="flex items-center gap-3 hover:text-amber-200">
    <FaMastodon className="w-5 h-5" />
    <a href="mailto:harshkushwaha32001@gmail.com">harshkushwaha32001@gmail.com</a>
  </div>
  
</div>

  )
}
