import React from 'react';
import BgProfile from '../assets/BgProfile.svg';
import Profile from '../assets/Profile.png';

const Hero = () => {
    return (
        <div className='mx-auto max-w-7xl px-24'>

            <div className='w-56 h-56 rounded-full bg-gradient-to-r from-orange-400 to-purple-600 mx-auto mt-40 mb-10  '>

                <img className='w-full h-full' src={Profile} alt="" />

            </div>

            <div>
                <h1 className='text-[55px] font-[1000] text-center text-white leading-[60px]  '>
                    I do code and <br />
                    make content <span className='bg-gradient-to-r from-orange-400 to-purple-600 bg-clip-text text-transparent'>about it!</span>
                </h1>

                <p className='text-gray-400 text-center mt-10'>
                    I am a seasoned full-stack software engineer with over <br/>
                    8 years of professional experience, specializing in backend development. <br/>
                    My expertise lies in crafting robust and scalable SaaS-based <br/>
                    architectures on the Amazon AWS platform.
                </p>
            </div>

            <div className='flex justify-center gap-5 mt-14'>
                <button className='btn bg-white text-black rounded-full hover:bg-gradient-to-r from-orange-400 to-purple-600 hover:text-white hover:scale-110 '>Get In Touch</button>
                <button className='btn border border-white text-white rounded-full hover:bg-gradient-to-r from-orange-400 to-purple-600 hover:text-white hover:scale-110'>Download CV</button>
            </div>
        </div>
    );
};

export default Hero;