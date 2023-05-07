import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { HiClipboard } from 'react-icons/hi'
import Previous from '../utils/Previous'
import MiddleNum from '../utils/MiddleNum'
import Next from '../utils/Next'
import Nav from '../utils/Nav'

const Tokenomics = ({ next, prev, home }) => {
    const [contactAddress, setContact] = useState('0x0000000000000000')
    const [clicked, setClicked] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText(contactAddress)
        setClicked(true)

        setTimeout(() => {
            setClicked(false)

        }, 1000);

    }

    return (
        <motion.section initial={{ skew: "-15deg, -15deg" }} animate={{ skew: "0deg, 0deg" }} exit={{ opacity: 0, skew: "-15deg, -15deg" }} transition={{ duration: 0.5 }} className='w-full h-screen bg-token bg-cover flex items-center lg:px-10 px-7 text-white sm:bg-left bg-[center_left_27%]'>
            <Nav click={home} />


            <MiddleNum num="03" />
            <Previous text="About us" prev={prev} />
            <Next text="Roadmap" next={next} />


            <div className='relative h-auto w-fit px-0 z-10'>
                <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.05 }} className='font-orbit md:text-5xl font-bold text text-3xl ml-[5px]' data-text="TOKENOMICS">TOKENOMICS</motion.h1>
                <div className='ml-3'>
                    <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className='font-orbit text-heroblue font-semibold'>TRANSACTION TAX</motion.h1>

                    <div className="flex items-center mt-10 gap-x-6">
                        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}>
                            <h1 className='font-orbit md:text-2xl font-semibold sm:text-xl ml-[5px]'>FOR BUYING</h1>
                            <h1 className='font-orbit text-4xl font-bold ml-[5px] text-heroblue'>5%</h1>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
                            <h1 className='font-orbit md:text-2xl font-semibold sm:text-xl ml-[5px]'>FOR SELLING</h1>
                            <h1 className='font-orbit text-4xl font-bold ml-[5px] text-heroblue'>5%</h1>
                        </motion.div>
                    </div>

                    <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }} className='mt-7'>
                        <h1 className='font-orbit md:text-2xl font-semibold sm:text-xl ml-[5px]'>Reserved for vaporization</h1>
                        <h1 className='font-orbit text-4xl font-bold ml-[5px] text-heroblue'>15% - 20%</h1>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }} className='mt-7'>
                        <h1 className='font-orbit md:text-2xl font-semibold sm:text-xl ml-[5px]'>Current Supply:</h1>
                        <h1 className='font-orbit sm:text-xl text-sm font-bold ml-[5px] text-heroblue mt-2'>1,000,000,000,000</h1>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }} className='mt-7'>
                        <div className='flex items-center gap-x-2'>
                            <HiClipboard className='sm:text-2xl cursor-pointer text-xl' onClick={handleCopy} />
                            <h1 className='font-orbit md:text-2xl font-semibold sm:text-xl ml-[5px]'>{clicked ? "Copied to clipboard!" : "Contact Address:"}</h1>

                        </div>
                        <h1 className='font-orbit sm:text-xl text-sm font-bold ml-[5px] text-heroblue'>{contactAddress}</h1>
                    </motion.div>

                </div>



            </div>


        </motion.section>
    )
}

export default Tokenomics