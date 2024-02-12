import React from 'react';
import Logo from '../assets/LOGO3.png';

const Navbar = () => {
    return (
        <div>

            <div className=' w-full h-20 bg-[#222]'>

               <div className='mx-auto max-w-7xl flex justify-between items-center w-full h-full'>

                <div className='mx-auto'>
                <img src={Logo} alt="logo" className='w-72' />
                </div>

                <div className='md: hidden'>
                    <ul className='flex items-center gap-24 text-white font-medium'>
                        <li className='duration-300 hover:cursor-pointer hover:bg-white px-2 py-1 rounded hover:text-black hover:scale-105'>
                            <a href='#'>Home</a>
                        </li>
                        <li  className='duration-300 hover:cursor-pointer hover:bg-white px-2 py-1 rounded hover:text-black hover:scale-105' >
                            <a href='#'>Projects</a>
                        </li>
                        <li  className='duration-300 hover:cursor-pointer hover:bg-white px-2 py-1 rounded hover:text-black hover:scale-105'>
                            <a href='#'>Experience</a>
                        </li>
                        <li  className='duration-300 hover:cursor-pointer hover:bg-white px-2 py-1 rounded hover:text-black hover:scale-105'>
                            <a href='#'>Contact</a>
                        </li>
                    </ul>
                </div>
                       
               </div>

            </div>
            
        </div>
    );
};

export default Navbar;