import React, { useState } from 'react'
import { Header, Navbar, Footer } from '../../Components'
import { motion } from 'framer-motion'
import { routingAnimations } from "../../constants"


const Summer = () => {
    const [toggle, setToggle] = useState(0)
    return (
        <>
            <Header />
            <Navbar />
            <motion.section
                viewport="viewport"
                initial="initial"
                animate="animate"
                exit="exit"
                transition="transition"
                variants={routingAnimations}
            >
                <div className='gradient-bg' />
                <div className='flex justify-center'>
                    <h1 className='my-bold blue_gradient my-text-4'>SUMMER INTERNSHIP</h1>
                </div>
                <div className='w-[min(1800px,100%)] mx-auto my-10 grid px-10'>
                    {[...Array(5)].map((_, index) => (
                        <div className=''>

                        </div>
                    ))}
                </div>
            </motion.section>
        </>
    )
}

export default Summer