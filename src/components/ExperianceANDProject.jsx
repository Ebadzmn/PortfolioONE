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

import Html from '../assets/HTMLcard.jpeg';
import Css from '../assets/cardCSS (1).jpeg';

const ExperienceAndProject = () => {
    return (
        <div className='w-full h-screen bg-[#161513]'>

            <div className='flex justify-center items-center text-white pt-16 '>
                <h1 className='text-[#C5C5C5] text-[18px] tracking-wider'> EXPERIENCE WITH</h1>
            </div>

            <div className=' w-1/2 mx-auto mt-10 h-20 grid grid-cols-8'>

                <FaReact className='mx-auto mt-5 text-5xl'/>
                <SiJavascript className='mx-auto mt-5 text-5xl'/>
                <SiTailwindcss className='mx-auto mt-5 text-5xl'/>
                <FaNode className='mx-auto mt-5 text-5xl'/>
                <DiMongodb className='mx-auto mt-5 text-5xl'/>
                <FaCss3 className='mx-auto mt-5 text-5xl'/>
                <SiNextdotjs className='mx-auto mt-5 text-5xl'/>
                <SiExpress className='mx-auto mt-5 text-5xl'/>
            </div>


            <div className='text-center mt-20 text-3xl font-extrabold tracking-wider text-orange-500 ' style={{ fontWeight: 'bolder' }}>
                <h1>
                    PROJECTS
                </h1>
            </div>

            <div className='mx-auto mt-9 w-1/2 h-96 grid grid-cols-2 gap-5'>

                <div className=' w-full h-80 mt-8 hover:scale-105 duration-300 '>

                    <div>
                        <img className='w-full h-full rounded-t-2xl' src={Html} alt="" />
                    </div>

                    <div className='flex justify-between w-full h-[68px] bg-[#2A2A2A] rounded-b-2xl'>

                     <div>
                         <h1 className='text-gray-300 text-start font-bold pt-2 pl-5 text-[13px] '>Click Here To Visit</h1>
                         <h1 className='text-white text-start font-bold pt-0.5 pl-5 text-[22px] '> HTML Project </h1>
                     </div>

                        <div>

                            <MdArrowOutward className='mt-5 text-3xl text-white mr-5'/>
                        </div>

                    </div>

                </div>

                <div className=' w-full h-80 mt-8  hover:scale-105 duration-300 '>

                    <div>
                        <img className='w-full h-full rounded-t-2xl' src={Css} alt="" />
                    </div>

                    <div className='flex justify-between w-full h-[68px] bg-[#2A2A2A] rounded-b-2xl'>

                        <div>
                            <h1 className='text-gray-300 text-start font-bold pt-2 pl-5 text-[13px] '>Click Here To Visit</h1>
                            <h1 className='text-white text-start font-bold pt-0.5 pl-5 text-[22px] '> CSS Project </h1>
                        </div>

                        <div>

                            <MdArrowOutward className='mt-5 text-3xl text-white mr-5'/>
                        </div>

                    </div>

                </div>

            </div>


            <div className='text-center mt-20 text-3xl font-extrabold tracking-wider text-blue-500 ' style={{ fontWeight: 'bolder' }}>
                <h1>
                    EXPERIENCE
                </h1>
            </div>

            <div className='w-full h-screen bg-[#161513]'>

                <div className='mx-auto mt-10 w-1/2 '>

                    <div className='' >

                        <div className='flex w-full justify-between p-6 '>
                           <div className='flex items-center'>
                               <svg xmlns="http://www.w3.org/2000/svg" width="35" height="32" viewBox="0 0 35 32" fill="none">
                                   <path d="M30.9537 13.3886H29.8103V13.3333H17.0345V18.6666H25.057C23.8866 21.7713 20.7416 24 17.0345 24C12.3308 24 8.51725 20.418 8.51725 16C8.51725 11.582 12.3308 7.99996 17.0345 7.99996C19.2056 7.99996 21.1809 8.76929 22.6849 10.026L26.7001 6.25463C24.1648 4.03529 20.7735 2.66663 17.0345 2.66663C9.19508 2.66663 2.83911 8.63663 2.83911 16C2.83911 23.3633 9.19508 29.3333 17.0345 29.3333C24.8738 29.3333 31.2298 23.3633 31.2298 16C31.2298 15.106 31.1319 14.2333 30.9537 13.3886Z" fill="#FFC107"/>
                                   <path d="M4.47583 9.79396L9.13971 13.0066C10.4017 10.072 13.4579 7.99996 17.0345 7.99996C19.2056 7.99996 21.1809 8.76929 22.6849 10.026L26.7001 6.25463C24.1648 4.03529 20.7735 2.66663 17.0345 2.66663C11.582 2.66663 6.85355 5.55796 4.47583 9.79396Z" fill="#FF3D00"/>
                                   <path d="M17.0344 29.3333C20.701 29.3333 24.0327 28.0153 26.5517 25.872L22.1582 22.38C20.6851 23.4322 18.8851 24.0013 17.0344 24C13.3422 24 10.2071 21.7886 9.02608 18.7026L4.39697 22.0526C6.7463 26.3706 11.5174 29.3333 17.0344 29.3333Z" fill="#4CAF50"/>
                                   <path d="M30.9537 13.3887H29.8102V13.3334H17.0344V18.6667H25.0569C24.4971 20.1443 23.4886 21.4355 22.1561 22.3807L22.1582 22.3794L26.5517 25.8714C26.2408 26.1367 31.2298 22.6667 31.2298 16C31.2298 15.106 31.1318 14.2334 30.9537 13.3887Z" fill="#1976D2"/>
                               </svg>

                               <h1 className='text-white ml-3 text-lg font-semibold tracking-wide'>Lead Software Engineer at Google</h1>
                           </div>

                          <div className='flex items-center'>
                              <p className='text-gray-400'>Nov 2019 - Present</p>
                          </div>
                        </div>

                        <div className=' text-sm tracking-wide mx-6 text-gray-300'>
                            <p>As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.</p>
                        </div>



                        <div className='py-8'>

                            <div className='flex w-full justify-between p-6 '>
                                <div className='flex items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="31" viewBox="0 0 28 31" fill="none">
                                        <path d="M22.7954 29.6221C21.0441 31.2506 19.132 30.9934 17.2913 30.222C15.3435 29.4335 13.5564 29.3992 11.5013 30.222C8.92796 31.2849 7.56981 30.9763 6.03295 29.6221C-2.68783 20.9994 -1.40116 7.86836 8.49907 7.38837C10.9116 7.50837 12.5914 8.65691 14.0032 8.75976C16.1119 8.34834 18.1312 7.16552 20.3829 7.3198C23.0814 7.52551 25.1186 8.55405 26.4589 10.4054C20.8833 13.6111 22.2057 20.6566 27.3167 22.628C26.298 25.1993 24.9756 27.7535 22.7776 29.6392L22.7954 29.6221ZM13.8245 7.28552C13.5564 3.46276 16.791 0.308563 20.508 0C21.0263 4.42274 16.3263 7.71408 13.8245 7.28552Z" fill="white"/>
                                    </svg>

                                    <h1 className='text-white ml-3 text-lg font-semibold tracking-wide'>Junior Software Engineer at Apple</h1>
                                </div>

                                <div className='flex items-center'>
                                    <p className='text-gray-400'>Nov 2019 - Present</p>
                                </div>
                            </div>

                            <div className=' text-sm tracking-wide mx-6 text-gray-300'>
                                <p>During my tenure at Apple, I held the role of Software Architect, where I played a key role in shaping the architecture of mission-critical software projects. Responsible for designing scalable and efficient systems, I provided technical leadership to a cross-functional team.</p>
                            </div>

                        </div>



                        <div>

                            <div className='flex w-full justify-between p-6 '>
                                <div className='flex items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="22" viewBox="0 0 33 22" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.92038 0.0140862C7.32632 -0.157526 5.26084 1.28714 3.81662 3.10154C2.36427 4.92687 1.34129 7.34504 0.775311 9.76009C0.212587 12.1736 0.0710926 14.7353 0.52485 16.8804C0.967222 18.9647 2.09267 21.1083 4.46066 21.787C6.71969 22.4344 8.74615 21.514 10.2944 20.2643C11.846 19.0131 13.1894 17.2283 14.2725 15.5044C15.1215 14.1518 15.8469 12.7742 16.4161 11.5979C16.9853 12.7727 17.7107 14.1518 18.558 15.5044C19.6412 17.2283 20.9846 19.0131 22.5361 20.2643C24.0844 21.514 26.1109 22.4344 28.3699 21.787C30.7379 21.1083 31.8634 18.9647 32.3057 16.8804C32.7611 14.7353 32.618 12.1736 32.0553 9.76009C31.4893 7.34504 30.4663 4.92531 29.014 3.10154C27.5714 1.28714 25.5059 -0.159086 22.9118 0.0140862C20.0917 0.201299 18.0815 2.30589 16.9154 3.89564C16.7424 4.13322 16.5759 4.37512 16.4161 4.62109C16.2559 4.37501 16.0889 4.1331 15.9152 3.89564C14.7491 2.30433 12.7405 0.20286 9.92038 0.0140862ZM14.5555 7.85364C14.0953 8.96912 12.978 11.5168 11.485 13.8959C10.475 15.506 9.34953 16.9506 8.19969 17.8773C7.04984 18.8056 6.14721 19.0131 5.3942 18.7978C4.75016 18.6137 4.06546 17.9241 3.71253 16.2595C3.37425 14.6573 3.45719 12.5542 3.94998 10.4434C4.4444 8.33259 5.31288 6.36529 6.40255 4.99396C7.50035 3.61326 8.62905 3.0563 9.69432 3.12807C10.9401 3.21075 12.1827 4.22794 13.2528 5.68977C13.8513 6.5057 14.2986 7.331 14.5539 7.85208L14.5555 7.85364ZM18.2767 7.85364C18.7353 8.96912 19.8542 11.5168 21.3456 13.8959C22.3572 15.506 23.4827 16.9506 24.6309 17.8773C25.7824 18.8056 26.6834 19.0131 27.438 18.7978C28.0804 18.6137 28.7651 17.9241 29.118 16.2595C29.458 14.6573 29.375 12.5542 28.8806 10.4434C28.3862 8.33259 27.5193 6.36529 26.428 4.99396C25.3302 3.61326 24.2032 3.0563 23.1363 3.12807C21.8905 3.21075 20.6479 4.22794 19.5778 5.68977C19.082 6.37451 18.6468 7.0978 18.2767 7.85208V7.85364Z" fill="#5BADFF"/>
                                    </svg>

                                    <h1 className='text-white ml-3 text-lg font-semibold tracking-wide'>Software Engineer at Meta</h1>
                                </div>

                                <div className='flex items-center'>
                                    <p className='text-gray-400'>Nov 2019 - Present</p>
                                </div>
                            </div>

                            <div className=' text-sm tracking-wide mx-6 text-gray-300'>
                                <p>As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.</p>
                            </div>

                        </div>

                    </div>

                </div>

                <Footer />

            </div>

        </div>
    );
};

export default ExperienceAndProject;