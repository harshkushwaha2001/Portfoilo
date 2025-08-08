import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
export default function DetailBox() {
  return (
    <div id="page"className='transition-discrete transition-all flex w-full h-screen justify-center items-center p-6'>
        
         <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/skills" element={<Skills/>}></Route>
          <Route path="/projects" element={<Projects/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
         </Routes>
    </div>
  )
}
