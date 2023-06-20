import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Header, Navbar, Footer, Loader } from '../../Components'
import { motion } from 'framer-motion'
import { routingAnimations } from '../../constants'
import axios from 'axios'
import { Carousel } from 'react-responsive-carousel'

const SingleResearch = () => {
    const [research, setResearch] = useState(null)
    const { id } = useParams()

    const fetchResearch = async () => {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/Research_Development/Research_Development_Single_Display/${id}`)
        const data = res.data.Data
        setResearch(data)
    }

    useEffect(() => {
        fetchResearch()
    }, [])


    return (
        <>
            <Header />
            <Navbar />
            <motion.main
                initial="initial"
                animate="animate"
                exit="exit"
                transition="transition"
                variants={routingAnimations}
            >
                <div className="gradient-bg"></div>
                {!research && <Loader />}
                {research && <div className='theme-width'>
                    <div className='flex justify-center'>
                        <h1 className='blue_gradient my-bold my-text-4'>{research?.category}</h1>
                    </div>
                    <div>
                        <h1 className='my-text-2 orange_gradient my-bold'>{research?.heading}</h1>
                        <img src={`${import.meta.env.VITE_API_URL}/Research&Development/Research&Development_Image_Display/${id}`} alt="" />
                        <p className='text-gray-700 text-2xl max-md:text-lg text-justify'>
                            {research?.Detail}
                        </p>
                        <div className='flex justify-center items-center'>
                            <div className='flex justify-center items-center'>
                                <Carousel
                                    showThumbs={research?.images?.length > 0 ? true : false}
                                >
                                    {research?.images?.map((image, index) => (
                                        <div key={image._id} className='flex justify-center items-center h-full'>
                                            <div className='max-w-[1000px] aspect-video relative'>
                                                <img src={`${import.meta.env.VITE_API_URL}/Research&Development/Research&Development_Images_Display/${research._id}/${image._id}`} alt="" className='w-full h-full object-fill' />
                                            </div>
                                        </div>
                                    ))}
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>}
            </motion.main>
            <Footer />
        </>
    )
}

export default SingleResearch