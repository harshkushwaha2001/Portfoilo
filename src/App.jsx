
import './App.css'
import DetailBox from './Components/DetailBox';
import ImageBox from './Components/ImageBox';
import Navigation from './Components/Navigation';
import AnimatedBackground from './Components/AnimatedBackground';

function App() {
  return (
    <>
    <div id='largescreen'>
      <DetailBox id='det'/>
      <Navigation/>
      <ImageBox/>
    </div>

    <div id='smallscreen'>
       <ImageBox/>
      
          <DetailBox id='det'/>
       
       <div id='stick'>
        <Navigation/>
       </div>
    </div>
     <AnimatedBackground />
    </>
    //  <div className="relative min-h-screen">
    //   {/* Layout changes based on screen size */}
    //   <div className="flex flex-col md:flex-row">
        
    //     {/* Small screen: Image first, then Detail */}
    //     <div className="flex flex-col flex-1 order-1 md:order-none">
    //       <div className="block md:hidden">
    //         <ImageBox />
    //         <DetailBox />
    //       </div>

    //       {/* Medium+ screen: normal DetailBox then ImageBox */}
    //       <div className="hidden md:flex flex-row flex-1">
    //         <DetailBox />
    //         <div className="md:sticky md:top-0 md:h-screen fixed top-4 right-4">
    //              <Navigation />
    //         </div>
         
    //         <ImageBox />
    //       </div>
    //     </div>

    //     {/* Navigation:
    //         - On md+ screens → acts like sidebar
    //         - On small screens → fixed top-right */}
    //     {/* <div className="md:sticky md:top-0 md:h-screen fixed top-4 right-4">
    //       <Navigation />
    //     </div> */}
    //   </div>

    //   <AnimatedBackground />
    // </div>
  )
}

export default App
