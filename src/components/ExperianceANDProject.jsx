import React from 'react';
import { FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { FaCss3 } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { MdArrowOutward } from "react-icons/md";
import Footer from './Footer';
import Section from "./Section.jsx";

import Html from '../assets/HTMLcard.jpeg';
import web1 from '../assets/web1.png';
import web2 from '../assets/WEB2.png';
import web3 from '../assets/WEB3.png';
import web4 from '../assets/web4.png';

import { Link } from 'react-router-dom';

const ExperienceAndProject = ( ) => {
    return (

            <div className='w-full min-h-[100vh] bg-[#161513]'>

                <div className='flex justify-center items-center text-white mt-[-4vw]'>
                    <h1 className='text-[#C5C5C5] text-[18px] tracking-wider'> EXPERIENCE WITH</h1>
                </div>

                <div className=' w-1/2 mx-auto mt-8 h-20 grid md:grid-cols-8 grid-cols-2'>

                    <FaReact className='mx-auto mt-5 text-5xl'/>
                    <SiJavascript className='mx-auto mt-5 text-5xl'/>
                    <SiTailwindcss className='mx-auto mt-5 text-5xl'/>
                    <FaNode className='mx-auto mt-5 text-5xl'/>
                    <DiMongodb className='mx-auto mt-5 text-5xl'/>
                    <FaCss3 className='mx-auto mt-5 text-5xl'/>
                    <SiNextdotjs className='mx-auto mt-5 text-5xl'/>
                    <SiExpress className='mx-auto mt-5 text-5xl'/>
                </div>


                <Section>
                    <div className='text-center md:mt-20 mt-96 text-3xl font-extrabold tracking-wider text-orange-500 '
                         style={{fontWeight: 'bolder'}}>
                        <h1>
                            PROJECTS
                        </h1>
                    </div>
                </Section>


                    <div className='mx-auto mt-9 w-full md:w-1/2 h-[100vh] grid grid-cols-2 md:gap-5 gap-2 p-6'>

                        <Section className='w-0 h-0'>
<Link to={'https://edujar-lms.netlify.app/'}>
<div className=' w-full h-2 mt-8  hover:scale-105 duration-300'>

<div>
    <img className='w-full h-full rounded-t-2xl' src={web1} alt=""/>
</div>

<div className='flex justify-between w-full md:h-[75px] h-[200px] bg-[#2A2A2A] rounded-b-2xl'>

    <div>
        <h1 className='text-gray-300 text-start font-bold md:pt-2 pt-10 pl-5 md:text-[13px] text-[5vw]'>Click
            Here
            To
            Visit</h1>
        <h1 className='text-white text-start font-medium pt-0.5 pl-5 md:text-[20px] text-[5vw] '> HTML Project </h1>
    </div>

    <div>

        <MdArrowOutward className='md:mt-5 mt-10 text-3xl text-white mr-5'/>
    </div>

</div>

</div>

</Link>
                        </Section>

                        <Section className='w-0 h-0'>
<Link to={'https://youtu.be/JL15uLyHDlU?si=EyDeXea3h2ENWbyz'}>
<div className=' w-full h-2 mt-8  hover:scale-105 duration-300'>

<div>
    <img className='w-full h-full rounded-t-2xl' src={web2} alt=""/>
</div>

<div className='flex justify-between w-full md:h-[75px] h-[200px] bg-[#2A2A2A] rounded-b-2xl'>

    <div>
        <h1 className='text-gray-300 text-start font-bold md:pt-2 pt-10 pl-5 md:text-[13px] text-[5vw]'>Click
            Here
            To
            Visit</h1>
        <h1 className='text-white text-start font-medium pt-0.5 pl-5 md:text-[20px] text-[5vw] '> HTML Project </h1>
    </div>

    <div>

        <MdArrowOutward className='md:mt-5 mt-10 text-3xl text-white mr-5'/>
    </div>

</div>

</div>

</Link>
                        </Section>

                        <Section className='w-0 h-0'>
<Link to={'https://youtu.be/Nwj04qvgSNg?si=hrI9zxIJB7Es0s9r'}>
<div className=' w-full h-2 mt-8  hover:scale-105 duration-300'>

<div>
    <img className='w-full h-full rounded-t-2xl' src={web3} alt=""/>
</div>

<div className='flex justify-between w-full md:h-[75px] h-[200px] bg-[#2A2A2A] rounded-b-2xl'>

    <div>
        <h1 className='text-gray-300 text-start font-bold md:pt-2 pt-10 pl-5 md:text-[13px] text-[5vw]'>Click
            Here
            To
            Visit</h1>
        <h1 className='text-white text-start font-medium pt-0.5 pl-5 md:text-[20px] text-[5vw] '> HTML Project </h1>
    </div>

    <div>

        <MdArrowOutward className='md:mt-5 mt-10 text-3xl text-white mr-5'/>
    </div>

</div>

</div>

</Link>
                        </Section>

                        <Section className='w-0 h-0'>
<Link to={'https://cdnmov.netlify.app/'}>
<div className=' w-full h-2 mt-8  hover:scale-105 duration-300'>

<div>
    <img className='w-full h-full rounded-t-2xl' src={web4} alt=""/>
</div>

<div className='flex justify-between w-full md:h-[75px] h-[200px] bg-[#2A2A2A] rounded-b-2xl'>

    <div>
        <h1 className='text-gray-300 text-start font-bold md:pt-2 pt-10 pl-5 md:text-[13px] text-[5vw]'>Click
            Here
            To
            Visit</h1>
        <h1 className='text-white text-start font-medium pt-0.5 pl-5 md:text-[20px] text-[5vw] '> HTML Project </h1>
    </div>

    <div>

        <MdArrowOutward className='md:mt-5 mt-10 text-3xl text-white mr-5'/>
    </div>

</div>

</div>

</Link>
                        </Section>

                    </div>


              

                   

                    <Footer/>

              

            </div>
    );
};

export default ExperienceAndProject;