import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Personal from './pages/Personal';
import { AnimatePresence, motion } from "framer-motion";

export default function DetailBox() {
  return (
    <div className='transition-discrete transition-all  flex w-full h-[100vh] justify-center items-center p-5  max-[950px]:pr-[38px]'>
        <AnimatePresence mode="wait">
         <Routes>
          <Route path="/" element={ <PageWrapper><Home></Home></PageWrapper>}></Route>
          <Route path="/skills" element={<PageWrapper><Skills/></PageWrapper>}></Route>
          <Route path="/projects" element={<PageWrapper><Projects/></PageWrapper>}></Route>
          <Route path="/about" element={<PageWrapper><About/></PageWrapper>}></Route>
          <Route path="/personal" element={<PageWrapper><Personal/></PageWrapper>}></Route>
          <Route path="/contact" element={<PageWrapper><Contact/></PageWrapper>}></Route>
         </Routes>
         </AnimatePresence>
    </div>
  )
}
function PageWrapper({ children }) {
  return (
    <motion.div
      className="w-full h-full"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}
