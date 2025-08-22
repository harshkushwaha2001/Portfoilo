import React from 'react'
import { NavLink } from 'react-router-dom';
export default function Navigation() {
  
  const ls = [
    {name:"HOME", path:"/"},
    {name:"ABOUT", path:"/about"},
    {name:"SKILLS", path:"/skills"},
    {name:"PROJECTS", path:"/projects"},
    {name:"PERSONAL", path:"/personal"},
    {name:"CONTACT", path:"/contact"},
   
  ]
  const btnstyle=" rotate-90 mt-10 w-20 h-10 backdrop-blur-sm bg-blue-400/10 flex justify-center items-center rounded-xl -ml-8 -mr-3"; 

const handleClick=()=>{
    const el = document.getElementById('det');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
}
  return (
    <div  className='flex flex-col transform gap-5 z-5 overflow-visible max-[950px]:-mr-4'>
       { ls.map((obj)=>(<NavLink onClick={handleClick}className={({isActive})=>isActive?`${btnstyle} border-1 text-black bg-white`:`${btnstyle} text-white  border-1 `} key = {obj.name} to={obj.path}>{obj.name}</NavLink>))}
    </div>
  )
}
// {mt-2  -translate-x-5}