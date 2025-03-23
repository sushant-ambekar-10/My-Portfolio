import React from 'react';
import img from "../img/img.jpg";
import { Link } from 'react-router-dom';



function clicked()
{
  alert("Clicked");
}

export default function Header() {
  return (
    <div className=' justify-items-center fixed w-full z-50 mt-5 fade-2 '>

{/* bg-white rounded-2xl flex gap-10 justify-items-end underline-offset-1 font-extralight bg-opacity-80 text-center h-auto p-5 pb-1 */}
      <div className='shadow-xl bg-white rounded-2xl flex gap-1 md:gap-10 justify-end underline-offset-1 font-extralight bg-opacity-80 text-center h-auto p-5 pb-1 top-10 left-10 text-sm' >
        <Link className='font-bold cursor-pointer ' to={'/home'}>Home</Link>
        <Link className='cursor-pointer font-semibold'  to='/projects'>Projects</Link>
        <Link to={'/metadata'}><div className='justify-items-center cursor-pointer' ><img src={img} className='h-10'></img><h1 className=' text-sm md:mb-2 md:ml-3 text-center md:pb-2 font-bold cursor-pointer'>Sushant Ambekar</h1></div></Link>
        <Link className='cursor-pointer font-semibold' to={'/social'}>Social</Link>
        <Link className='font-bold cursor-pointer' to={'/metadata'}>Me-taData</Link>
    </div>
    </div>
  )
}
