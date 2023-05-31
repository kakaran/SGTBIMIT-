import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Footer, Header, Navbar } from '../../Components';
import { motion } from 'framer-motion'
import { routingAnimations } from '../../constants'
import styles from './singleEvent.module.css'
import { Carousel } from 'react-responsive-carousel';

const SingleEvent = () => {
    const { id, event_id } = useParams()
    const [event, setEvent] = useState({})

    const getData = async () => {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/Event/Single_Event_Display/${event_id}`)
        const data = await response.json()
        setEvent(data)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <Header />
            <Navbar />
            <motion.section
                viewport='viewport'
                initial="initial"
                animate="animate"
                exit="exit"
                transition="transition"
                variants={routingAnimations}
            >
                <div className='gradient-bg'></div>
                <div className='flex flex-col p-5 mx-auto rounded-lg shadow-lg my-10 bg-white bg-opacity-30 items-center'>
                    <h1 className='my-text-4 text-center my-bold bg-clip-text text-transparent w-max max-w-full' style={{ backgroundImage: "linear-gradient(to right, #f59e0b, #ea580c, #eab308)" }}>{event.name}</h1>
                    <img src={`${import.meta.env.VITE_API_URL}/Event/Event_MainImage_Display/${event_id}`} alt="" className='w-1/2 rounded-2xl shadow-2xl mx-auto' />
                    <p className='text-gray-700 text-2xl text-justify px-11 max-md:px-2 max-lg:text-lg'>{event.detail}</p>
                </div>
                {/* <div className='flex flex-col w-[min(1500px,100%)] mx-auto p-5 bg-white bg-opacity-30'>
                    <h1 className='text-5xl primary-blue my-bold mb-1'>Images</h1>
                    <div className='h-2 w-full primary-blue-bg-clr rounded-full'></div>
                    <div className={`${styles.images} grid grid-cols-2 gap-5 shadow-lg rounded-lg p-5 h-[1200px] overflow-y-scroll place-items-center max-lg:grid-cols-1 bg-white bg-opacity-30`}>
                        {event.Images?.map((image, index) => (
                            <img src={`${import.meta.env.VITE_API_URL}/Event/Event_Image_Display/${event_id}/${image._id}`} alt="" className='w-5/6 rounded-2xl shadow-2xl mx-auto my-5' key={index} />
                        ))}
                    </div>
                </div> */}
                <div className=' flex items-center justify-center'>
                    <div className='w-1/2 p-5 max-md:w-full max-lg:w-3/4'>
                        <Carousel
                            showStatus={false}
                        >
                            {event.Images?.map((image, index) => (
                                <img src={`${import.meta.env.VITE_API_URL}/Event/Event_Image_Display/${event_id}/${image._id}`} alt="" className='rounded-2xl shadow-2xl mx-auto my-5' key={index} />
                            ))}
                        </Carousel>
                    </div>
                </div>
            </motion.section>
            <Footer />
        </>
    )
}

export default SingleEvent