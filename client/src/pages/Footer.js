import React from 'react'
import insta from '../img/insta.png';
import facebook from '../img/facebook.png';
import linkedin from '../img/linkedin.png';
import email from '../img/email.png';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className='fade-2 font-hammersmith lg:flex bg-black opacity-95 text-white rounded-xl  items-center justify-center justify-items-center'>
       
        <div className='lg:w-1/4 lg:container p-10 '>
          <h1 className="text-2xl opa">Sushant Ambekar</h1><br/>
          <Link to="/social"  className='hover:scale-110 m-5 opar bg-white rounded-md bg-opacity-70 text-black p-3 text-lg '>Connect me</Link>
        </div>
        
        <div className='lg:w-1/5 w-1/2 container p-10 bg-gray-500 bg-opacity-50 items-center justify-center rounded-lg m-5'>
          <ul className=' mt-2 mb-2 cursor-pointer'>
            <Link to="/home"><li className=' mb-4 hover:opacity-50 hover:text-black'>Home</li></Link>
            <Link to="/projects"><li className=' mb-4 hover:opacity-50 hover:text-black'>Projects</li></Link>
            <Link to="/metadata"><li className=' mb-4 hover:opacity-50 hover:text-black'>Me-taData</li></Link>
            <Link to="resume"><li className=' mt-4 text- hover:opacity-50 hover:text-black'>Resume</li></Link>
          </ul>
        </div>

        <div className='lg:w-1/5 lg:container p-10'>
          <table>
          <Link to="https://www.linkedin.com/in/sushant-ambekar-066b06316/" target='_blank'><tr className='flex m-2 hover:text-black hover:bg-white hover:rounded-md hover:p-2'>
                <img src={linkedin} className='w-7 h-7 opacity-70 rounded-lg cursor-pointer' alt=''/>
                <h3 className='mx-2 items-center font-sans cursor-pointer '>LinkedIn</h3>
            </tr></Link>
            <a href="mailto:sushantsambekar@gmail.com"><tr className='flex m-2 hover:text-black hover:bg-white hover:rounded-md hover:p-2'>
                <img src={email} className='w-7 h-7 opacity-70 rounded-lg cursor-pointer 'alt=''/>
                <h3 className='mx-2 items-center font-sans cursor-pointer'>Email</h3>
            </tr></a>
            <Link to="https://www.instagram.com/sushant_ambekar_10/"><tr className='flex m-2 cursor-pointer hover:text-black hover:bg-white hover:rounded-md hover:p-2'>
                <img src={insta} className='w-7 h-7 opacity-70 rounded-lg' alt=''/>
                <h3 className='mx-2 items-center font-sans'>Instagram</h3>     
            </tr></Link>
            <Link to="https://www.facebook.com/mangal.ambekar.5" target="_blank"><tr className='flex m-2 cursor-pointer hover:text-black hover:bg-white hover:rounded-md hover:p-2'>
                <img src={facebook} className='w-7 h-7 opacity-70 rounded-lg ' alt=''/>
                <h3 className='mx-2 items-center font-sans'>Facebook</h3>
            </tr></Link>
          </table>
        </div>

    </div>
  )
}
