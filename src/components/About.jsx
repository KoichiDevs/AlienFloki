import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { SlArrowDown } from "react-icons/sl";
import Nav from '../utils/Nav';
import Next from '../utils/Next';
import Previous from '../utils/Previous';
import MiddleNum from '../utils/MiddleNum';


const About = ({ prev, next, home }) => {

    const body = document.querySelector('#root');

    body.scrollIntoView({
        behavior: 'smooth'
    }, 500)

    return (
        <motion.section initial={{ skew: "-15deg, -15deg" }} animate={{ skew: "0deg, 0deg" }} exit={{ opacity: 0, skew: "-15deg, -15deg" }} transition={{ duration: 0.5 }} className='w-full h-auto min-h-screen bg-[#020102] text-white flex flex-col items-start md:justify-between py-10 overflow-hidden pb-10'>

            <Nav click={home} />
            <img alt="Alien" src="/about.webp" className='absolute z-[9] right-0 bottom-0 md:w-[85vh] h-[45vh] md:h-auto '></img>

            <motion.h1 initial={{ opacity: "0%" }} animate={{ x: [-200, 0], opacity: "10%" }} transition={{ duration: 1, delay: 0.1 }} className='md:px-11 px-6 md:mt-32 mt-20 md:text-8xl text-6xl font-orbit font-bold text-white pb-10 md:pb-0 z-10'>ABOUT</motion.h1>

            <div className='relative h-auto w-fit md:px-10 pb-20 px-5 z-10'>
                <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.05 }} className='font-orbit md:text-5xl font-bold text text-3xl ml-[5px]' data-text="MY ORIGIN">MY ORIGIN</motion.h1>
                <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className='font-orbit ml-3 text-heroblue font-semibold'>ABOUT FLOKI INVASION</motion.h1>

                <motion.p initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }} className='font-gruppo max-w-[40rem] md:text-xl text-md mt-3 leading-6 text-mygrey ml-3'>The Floki invasion is here. We have been watching your planet for many millennia. We have seen you evolve. We've followed our prime directive of not interfering with your planet but we no longer can. After recent events on earth, we can no longer stand aside and watch you destroy yourselves.  We are the <span className="text-heroblue font-bold">FLOKI INVASION</span> and we must save you.</motion.p>

                <motion.p initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className='font-orbit ml-3 mt-20 md:text-sm text-xs'>CONTACT US AT <span className="text-heroblue">FLOKINVASION@GMAIL.COM</span></motion.p>
            </div>

            <Next text="Tokenomics" next={next} />
            <MiddleNum num="02" />
            <Previous text="Home" prev={prev} />

        </motion.section>
    )
}

export default About