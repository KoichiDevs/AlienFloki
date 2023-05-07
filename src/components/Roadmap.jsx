import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { SlArrowDown } from "react-icons/sl"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MiddleNum from '../utils/MiddleNum';
import Nav from '../utils/Nav';
import Slider from 'react-slick';
import Phase from '../utils/Phase';
import { SiTwitter } from 'react-icons/si'
import { FaTelegramPlane } from 'react-icons/fa'

const Roadmap = ({ prev, home }) => {

    const [onHover, setHover] = useState(false)

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <motion.section initial={{ skew: "-15deg, -15deg" }} animate={{ skew: "0deg, 0deg" }} exit={{ opacity: 0, skew: "-15deg, -15deg" }} transition={{ duration: 0.5 }} className='w-full h-screen bg-footer bg-cover flex items-start flex-col md:justify-center lg:px-10 px-7 text-white sm:bg-left bg-[center_left_27%] overflow-hidden'>

            <Nav click={home} />
            <div className='select-none absolute z-10 right-7 top-9'>
                <div className='flex items-center gap-x-4 cursor-pointer z-10 relative' onClick={prev}>
                    <motion.p initial={{ opacity: 0, x: -150 }} animate={{ x: 0, opacity: 100 }} transition={{ duration: 1.5, delay: 0.4, ease: [.21, 1.03, .27, 1] }} className='font-orbit md:text-md text-xs'>Tokenomics</motion.p>
                    <motion.div initial={{ opacity: 0, y: 150 }} animate={{ y: 0, opacity: 100 }} transition={{ duration: 1.5, delay: 0.4, ease: [.21, 1.03, .27, 1] }} className='flex h-auto w-fit md:p-5 p-3 rounded-full border-[1px] border-white' onMouseEnter={() => { setHover(true) }} onMouseLeave={() => { setHover(false) }}>
                        <SlArrowDown className='md:text-sm text-xs rotate-180' />
                    </motion.div>
                </div>
            </div>
            <MiddleNum num='04' />

            <motion.img initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }} exit={{ scale: 0 }} alt="inner" src="/roadinner.webp" className='sm:block hidden z-[9] absolute top-0 right-0 md:w-[45vh] w-[40vh]  transition-all ease-in-out duration-300 select-none' style={onHover ? { width: "47vh" } : {}}></motion.img>
            <motion.img initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5, delay: 0.050 }} exit={{ scale: 0 }} alt="inner" src="/roadouter.webp" className='md:block hidden z-[9] absolute top-0 right-0 md:w-[75vh] transition-all ease-in-out duration-300 select-none' style={onHover ? { width: "85vh" } : {}}></motion.img>

            <motion.h1 initial={{ opacity: "0%" }} animate={{ x: [-200, 0], opacity: "10%" }} transition={{ duration: 1, delay: 0.1 }} className='md:mt-32 mt-28 md:text-8xl text-6xl font-orbit font-bold text-white z-10 md:pb-20 pb-7'>ROADMAP</motion.h1>

            <div className='relative h-auto w-fit md:pb-20 z-10'>
                <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.05 }} className='font-orbit md:text-5xl font-bold text text-2xl' data-text="OUR STEPS">OUR STEPS</motion.h1>

                <div className='ml-2 md:mt-9 lg:max-w-[30rem] max-w-[18rem] md:max-w-[20rem] 2xl:max-w-[35rem]'>
                    <Slider {...settings} className="w-full">
                        <Phase phase="Phase 1" desc={<>
                            -Floki Invasion<br />
                            -Receive from Floki Deployer Mothership<br />
                            -Branding Created - Website & Whitepaper Live<br />
                            -Stealth Launch<br />
                            -Social Channels Live<br />
                            -Community Growth And Competitions<br />
                            -Vaporize Bot Active
                        </>} />

                        <Phase phase="Phase 2" desc={<>-Social Media Marketing<br />
                            -Influencer Partnerships & AMAs<br />
                            -Token Listing Websites</>} />

                        <Phase phase="Phase 3" desc={<>-Tier 2 CEX Listings and Tracking<br />
                            -Portfolio Tacker Live<br />
                            -Paid Media Campaigns<br />
                            -Roadmap Update</>} />

                    </Slider>
                </div>
            </div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.4 }} className='absolute bottom-5 right-5'>
                <h2 className='font-orbit text-sm md:text-md'>Contact us through:</h2>
                <div className='flex w-full justify-end gap-x-4 text-xl mt-3'>
                    <a href="https://twitter.com/FlokiInvasion" target="_blank" rel='noreferrer'>
                        <SiTwitter className='cursor-pointer transition-transform ease-in-out duration-300 hover:scale-[1.1]' />

                    </a>

                    <a href="https://t.me/flokiinvasionportal" target="_blank" rel='noreferrer'>
                        <FaTelegramPlane className='cursor-pointer transition-transform ease-in-out duration-300 hover:scale-[1.1]' />
                    </a>
                </div>

            </motion.div>



        </motion.section>
    )
}

export default Roadmap