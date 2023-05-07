import React from 'react'
import { motion } from 'framer-motion'

const Nav = ({ click }) => {
    return (
        <nav className='w-full h-auto flex justify-between items-center z-10 absolute top-0 left-0 lg:p-10 p-7 noblue'>
            <motion.div initial={{ opacity: 0, x: -150 }} animate={{ x: 0, opacity: 100 }} transition={{ duration: 1.5, delay: 0.4, ease: [.21, 1.03, .27, 1] }} className='flex items-center gap-x-4 cursor-pointer' onClick={click}>
                <img src="/logo.webp" alt="Logo" className='w-[3rem]'></img>
                <h3 className='font-orbit text-sm lg:text-lg'>Floki Invasion</h3>
            </motion.div>
        </nav>

    )
}

export default Nav