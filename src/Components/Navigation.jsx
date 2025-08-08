import React from 'react'
import { NavLink } from 'react-router-dom';
export default function Navigation() {
  
  const ls = [
    {name:"HOME", path:"/"},
    {name:"ABOUT", path:"/about"},
    {name:"SKILLS", path:"/skills"},
    {name:"PROJECTS", path:"/projects"},
    {name:"CONTACT", path:"/contact"},
   
  ]
  const btnstyle="transition-discrete transition-all bg-white-400/50 backdrop-blur-sm border-3 focus:outline-hidden border-blue-500 border-double outline-1 h-[30px] w-[100px] justify-center flex rounded-xl justify-center items-center flex";
const handleClick=()=>{
    const el = document.getElementById('page');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
}
  return (
    <div  className='flex  sticky top-1 flex-row lg:flex-col gap-8 lg:absolute justify-center items-center lg:top-68 lg:right-90 z-50'>
       { ls.map((obj)=>(<NavLink onClick={handleClick}className={({isActive})=>isActive?`${btnstyle} bg-white text-black`:`${btnstyle} text-white`} key = {obj.name} to={obj.path}>{obj.name}</NavLink>))}
    </div>
  )
}
