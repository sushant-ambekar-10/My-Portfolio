// AnimatedHeader.js
import React, { useEffect, useState } from 'react';
import '../index.css'; // Import the CSS for animation
import img from '../img/img.jpg';
import vid from '../img/cover.mp4';
import Header from './Header';
import {TypeAnimation} from 'react-type-animation';

const AnimatedHeader = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  // Automatically shrink header after 1 second
  useEffect(() => {
    const timer = setTimeout(() => setIsExpanded(false), 1000);
    return () => clearTimeout(timer); // Clean up timer
  }, []);

  return (
    <header id="header" className={` header ${isExpanded ? 'expanded' : 'shrink'} shadow-xl ${isExpanded ? 'bg-yellow-400 flex justify-center items-center' : ''}  h-screen`} >
      {isExpanded?(
        <div className='justify-items-center gap-10 ' >
        <img src={img} className='h-80 mb-5 rounded-full shadow-2xl'/>
        <h1 className='text-2xl font-bold text-black '>
            Sushant Ambekar
        </h1>
      </div>):
      <div className='shadow-2xl mt-100 ' >
        <br/><br/><br/><br/>
        <br/><br/>
        <h1 className='text-start mx-20 mt-20 mb-5 pt-20 font-hammersmith text-2xl lg:text-4xl opacity-60 fade'>
        <span className='opacity-80'> 
          {/* being a  */}
          <TypeAnimation sequence={[
              'I am',
              2500,
              'being ',
              2500
            ]}
              speed={50}
              // className='text-gray-400'
              wrapper='span'
              repeat={Infinity}
            />
        </span>
         <br/> 
         <span className='lg:text-8xl text-4xl space-x-3 font-hammersmith'>
          {/* Mr.Pe<span className='tracking-wider'>rf</span>ect */}
          <TypeAnimation sequence={[
              'Sushant',
              2000,
              'Mr.Perfect',
              2000
            ]}
              speed={50}
              // className='text-gray-400'
              wrapper='span'
              repeat={Infinity}
            />
        </span> 
        
        </h1>

      </div>
      }
      
      
    </header>
  );
};

export default AnimatedHeader;
