
import './App.css'
import NavLinks from './Components/Navigation';
import DetailBox from './Components/DetailBox';
import ImageBox from './Components/ImageBox';
import About from './Components/pages/About'
import Home from './Components/pages/Home'
import Skills from './Components/pages/Skills'
import Projects from './Components/pages/Projects'
import Contact from './Components/pages/Contact'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Components/Navigation';

function App() {
  return (
<div className='flex flex-col lg:flex-row-reverse justify-center items-center'>
<Navigation></Navigation>
<ImageBox></ImageBox>
<DetailBox></DetailBox>
</div>

  )
}

export default App
