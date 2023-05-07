import React, { useState } from 'react'
import videoBg from '../assets/herovideo.mp4'
import another from '../assets/another.mp4'
import { SlArrowDown } from "react-icons/sl";
import { motion } from 'framer-motion';
import MiddleNum from '../utils/MiddleNum';

const Hero = ({ next }) => {

    const [onHover, setHover] = useState(false)

    return (
        <motion.main initial={{ skew: "-15deg, -15deg" }} animate={{ skew: "0deg, 0deg" }} exit={{ opacity: 0, skew: "-15deg, -15deg" }} transition={{ duration: 0.5 }} className='min-w-full h-auto min-h-screen bg-black p-7 text-white flex overflow-hidden items-end pt-[7rem] md:pb-20 pb-32'>
            <nav className='w-full h-auto flex justify-between items-center z-10 absolute top-0 left-0 p-7'>
                <motion.div initial={{ opacity: 0, x: -150 }} animate={{ x: 0, opacity: 100 }} transition={{ duration: 1.5, delay: 0.4, ease: [.21, 1.03, .27, 1] }} className='flex items-center gap-x-4'>
                    <img src="/logo.webp" alt="Logo" className='w-[3rem]'></img>
                    <h3 className='font-orbit '>Floki Invasion</h3>
                </motion.div>
            </nav>
            
            <div className='absolute top-0 left-0 w-full h-full bg-[rgba(15,15,15,0.80)] z-[9]'></div>

            <video src={videoBg} autoPlay loop muted className='w-full object-cover h-full z-0 absolute top-0 left-0' ></video>

            <div className='relative z-10'>
                <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.05 }} className='font-orbit md:text-5xl font-bold text text-3xl ml-[5px]' data-text="INVASION IS UPON US">INVASION IS UPON US</motion.h1>
                <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.05 }} className='ml-3 w-[40vh] 2xl:w-[50vh] mt-2 relative'>

                    <video autoPlay loop controls controlsList="nofullscreen nodownload">
                        <source src={another} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>


                </motion.div>
                <motion.p initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className='font-gruppo max-w-[45rem] 2xl:max-w-[55rem] md:text-[16px] text-sm mt-3 leading-6 text-mygrey ml-3 2xl:text-lg'>A number of unidentified aerial phenomenas have been spotted over multiple countries recently.The official NORAD statement is as follows: Military aircraft are currently operating from Alaska and Canada is support of north American aerospace defence command 	&#40;NORAR&#41; activities. NORAD confirms that we have positively identified a high - altitude airborne object over northern Canada. While we cannot discuss specifics related to these activities at this time, please note that early reports indicate that this U.F.O is what is commonly referred to a FLOKI INU bringing wealth and prosperity to earth.</motion.p>

                <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }} className='mt-9 flex items-center gap-x-9 font-gruppo ml-3'>
                    <div className='border-[1px] border-white w-fit h-auto cursor-pointer px-8 py-2 hover:text-black hover:font-bold hover:bg-white transition-all ease-in-out duration-300 min-w-[8.8rem] max-h-[2.6em]'>
                        <p className='md:text-lg text-md mt-[-3px]'>Buy token</p>
                    </div>
                    <p className='cursor-pointer lg:text-md text-sm'>More Info</p>
                </motion.div>
            </div>

            <motion.img initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }} exit={{ scale: 0 }} alt="inner" src="/circinner.webp" className='sm:block hidden z-10 absolute bottom-0 right-0 md:w-[45vh] w-[40vh]  transition-all ease-in-out duration-300 select-none' style={onHover ? { width: "47vh" } : {}}></motion.img>
            <motion.img initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5, delay: 0.050 }} exit={{ scale: 0 }} alt="inner" src="/circouter.webp" className='sm:block hidden z-10 absolute bottom-0 right-0 md:w-[80vh] w-[70vh] transition-all ease-in-out duration-300 select-none' style={onHover ? { width: "90vh" } : {}}></motion.img>

            <div className='select-none fixed z-10 right-10 bottom-9 noblue'>
                <div className='flex items-center gap-x-6 cursor-pointer'>
                    <motion.p initial={{ opacity: 0, x: -150 }} animate={{ x: 0, opacity: 100 }} transition={{ duration: 1.5, delay: 0.4, ease: [.21, 1.03, .27, 1] }} className='font-orbit md:text-md text-sm'>About us</motion.p>
                    <motion.div initial={{ opacity: 0, y: 150 }} animate={{ y: 0, opacity: 100 }} transition={{ duration: 1.5, delay: 0.4, ease: [.21, 1.03, .27, 1] }} className='flex h-auto w-fit md:p-5 p-3 rounded-full border-[1px] border-white hover:scale-[1.1] ' onMouseEnter={() => { setHover(true) }} onMouseLeave={() => { setHover(false) }} onClick={next}>
                        <SlArrowDown className='md:text-sm text-xs' />
                    </motion.div>
                </div>
            </div>

            <MiddleNum num="01" />


        </motion.main>
    )
}

export default Hero

