import React, { useState } from 'react'
import { Header, Navbar, Footer } from '../../Components'
import { motion } from 'framer-motion'
import { routingAnimations } from "../../constants"
import wipro from '../../images/wipro.png'
import { AiOutlineArrowDown } from 'react-icons/ai'
import img from '../../images/place-img.png'


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
                <div className='w-[min(1800px,100%)] mx-auto my-10 grid px-10 gap-10'>
                    {[...Array(5)].map((item, index) => (
                        <div className='rounded-md shadow-md bg-white py-5 px-10'>
                            <div className='flex gap-5' onClick={() => {
                                if (toggle === index) {
                                    setToggle(-1)
                                } else {
                                    setToggle(index)
                                }
                            }}>
                                <img src={wipro} alt="" className='rounded-full aspect-square w-72 ' />
                                <div className='grid place-content-center gap-5'>
                                    <div className='text-2xl'><span className='my-bold orange_gradient'>Internship Offered: </span> Web Development </div>
                                    <div className='text-2xl'><span className='my-bold orange_gradient'>No. of Students Selected: </span> 15 </div>
                                    <div className='text-2xl'><span className='my-bold orange_gradient'>Internship Offered:</span> XYZ Pvt. Ltd. </div>
                                </div>
                                <div className='text-2xl ml-auto'>
                                    <span className='my-bold orange_gradient'>Date: </span> 05-07-2022
                                </div>
                                <div className='flex flex-col min-h-full justify-center px-3 cursor-pointer'>
                                    <AiOutlineArrowDown size='3rem' className='text-blue-500' />
                                </div>
                            </div>
                            <div className={`grid transition-all px-10 ${toggle === index ? 'grid-show' : 'grid-hide'}`}>
                                <div className='overflow-hidden'>
                                    <div className='grid grid-cols-2 gap-5'>
                                        <p className='text-gray-700 text-2xl text-justify'>
                                            Wipro is an Indian multinational corporation that provides information technology, consultant and business process services. It is one of the leading Big Tech companies. Wipro's capabilities range across cloud computing, computer security, digital transformation, artificial intelligence, robotics, data analytics, and other technology consulting services to customers in 167 countries.
                                        </p>
                                        <img src={img} alt="cant load" className='w-full' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.section>
        </>
    )
}

export default Summer