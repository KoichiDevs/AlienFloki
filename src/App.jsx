import React, { useState } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import { AnimatePresence } from 'framer-motion'
import Tokenomics from './components/Tokenomics'
import Roadmap from './components/Roadmap'

const App = () => {

    const [page, setPage] = useState(1)

    const handleNext = () => {
        setPage(curr => curr + 1)
    }

    const handlePrev = () => {
        setPage(curr => curr - 1)
    }

    const home = () => {
        setPage(1)
    }

    const pageList = [
        {
            num: 1,
            comp: <Hero next={handleNext} key="HERO" />
        },
        {
            num: 2,
            comp: <About key="ABOUT" prev={handlePrev} next={handleNext} home={home} />
        },
        {
            num: 3,
            comp: <Tokenomics key="TOKEN" prev={handlePrev} next={handleNext} home={home} />
        },
        {
            num: 4,
            comp: <Roadmap key="Roadmap" prev={handlePrev} next={handleNext} home={home} />
        }
    ]

    return (
        <section className='w-full h-screen overflow-x-hidden overflow-y-scroll noscroll'>
            <div className='w-full h-full'>

                <AnimatePresence mode="wait">
                    {pageList.map((items, i) => {
                        return (
                            items.num === page ? items.comp : null
                        )
                    })}
                </AnimatePresence>


            </div>
        </section>
    )
}

export default App