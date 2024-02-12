import React, {useRef} from 'react';
import BgProfile from '../assets/BgProfile.svg';
import Profile from '../assets/PRO.jpg';
import { motion } from "framer-motion"
import Section from "./Section.jsx";
import { Link } from 'react-router-dom';

const Hero = () => {
    const constraintsRef = useRef(null);
    return (
        <div className="div w-full min-h-[100vh] bg-[#161513]">
            <motion.div className='mx-auto max-w-7xl w-full min-h-[100vh] lg:px-24 px-2'>

<motion.div  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                      duration: 0.6,
                      ease: [0, 0.71, 0.2, 1.01],
                      scale: {
                          type: "spring",
                          damping: 5,
                          stiffness: 100,
                          restDelta: 0.001
                      }
                  }} className='w-56 h-56 rounded-full bg-gradient-to-r from-orange-400 to-purple-600 mx-auto mt-40 mb-10' >

    <img className='w-full h-full rounded-full' src={Profile} alt="" />

</motion.div>

<Section>
    <div>
        <h1 className=' text-3xl font-extrabold tracking-wider lg:text-[55px] lg:font-[1000] text-center text-white lg:leading-[60px]  '>
            I do code and <br/>
            make content <span
            className='bg-gradient-to-r from-orange-400 to-purple-600 bg-clip-text text-transparent'>about it!</span>
        </h1>

        <p className='lg:text-gray-200 text-center lg:mt-10 mt-6 text-sm lg:text-lg'>
            I am a seasoned full-stack software engineer with over <br/>
            8 years of professional experience, specializing in backend development. <br/>
            My expertise lies in crafting robust and scalable SaaS-based <br/>
            architectures on the Amazon AWS platform.
        </p>
    </div>
</Section>

<Section>
    <div className='flex justify-center gap-5 mt-14'>
<Link to={'https://github.com/Ebadzmn'}>
<button
            className='btn bg-white text-black rounded-full hover:bg-gradient-to-r from-orange-400 to-purple-600 hover:text-white hover:scale-110 '>Get
            Github Profile
        </button>
</Link>
        <Link to={"https://drive.google.com/file/d/10D8-laz8KjpRgrmms0nDpAI8Z2m_H0Ax/view?usp=sharing"} >
            <button
            className='btn border border-white text-white rounded-full hover:bg-gradient-to-r from-orange-400 to-purple-600 hover:text-white hover:scale-110'>Download
            CV
            </button>
            </Link>
            </div>
            </Section>
            </motion.div>
            </div>
            );
        };

export default Hero;