import React from 'react'
import { SlArrowDown } from "react-icons/sl"
import { motion } from 'framer-motion'


const Previous = ({ prev,  text }) => {
    return (
        <div className='select-none absolute z-10 right-8 top-9 noblue'>
            <div className='flex items-center gap-x-4 cursor-pointer z-10 relative' onClick={prev}>
                <motion.p initial={{ opacity: 0, x: -150 }} animate={{ x: 0, opacity: 100 }} transition={{ duration: 1.5, delay: 0.4, ease: [.21, 1.03, .27, 1] }} className='font-orbit md:text-md text-xs'>{text}</motion.p>
                <motion.div initial={{ opacity: 0, y: 150 }} animate={{ y: 0, opacity: 100 }} transition={{ duration: 1.5, delay: 0.4, ease: [.21, 1.03, .27, 1] }} className='flex h-auto w-fit md:p-5 p-3 rounded-full border-[1px] border-white'>
                    <SlArrowDown className='md:text-sm text-xs rotate-180' />
                </motion.div>
            </div>
        </div>
    )
}

export default Previous