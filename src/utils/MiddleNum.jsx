import React from 'react'
import { motion } from 'framer-motion'

const MiddleNum = ({ num }) => {
    return (
        <div className='select-none absolute right-11 my-auto md:top-[-4rem] top-0 bottom-0 z-10 h-fit items-center gap-x-2 sm:flex hidden'>
            <motion.h1 initial={{ opacity: 0, x: 150 }} animate={{ x: 0, opacity: 100 }} transition={{ duration: 1.5, delay: 0.4, ease: [.21, 1.03, .27, 1] }} className='font-gruppo text-lg'>{num}</motion.h1>
            <motion.div initial={{ opacity: 0, x: 150 }} animate={{ x: 0, opacity: 100 }} transition={{ duration: 1.5, delay: 0.5, ease: [.21, 1.03, .27, 1] }} className='w-14 h-[1px] bg-white'></motion.div>
        </div>
    )
}

export default MiddleNum