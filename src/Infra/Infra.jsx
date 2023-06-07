import { useState, useEffect } from 'react'
import { Header, Navbar, Footer } from '../Components'
import { motion } from 'framer-motion'
import { routingAnimations } from "../constants"
import { useParams } from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel'

const Infra = () => {
    const { id } = useParams()
    const [infra, setInfra] = useState({})

    const fetchInfra = async () => {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/Infrastructure/Infrastructure_Single_Display/${id}`)
        const data = await res.json()
        setInfra(data)
        console.log(data);
    }

    useEffect(() => {
        fetchInfra()
    }, [])

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
                    <h1 className='my-bold blue_gradient my-text-4'>INFRASTRUCTURE</h1>
                </div>
                <div className='w-[min(1500px,100%)] mx-auto my-10'>
                    <h1 className='orange_gradient my-bold my-text-4'>{infra.Data?.InfraName}</h1>
                    <div className='w-1/2'>
                        <Carousel

                            showThumbs={false}
                            showStatus={false}
                            showIndicators={false}
                            autoPlay={true}
                            infiniteLoop={true}
                            interval={5000}
                            transitionTime={500}
                            stopOnHover={false}
                        >
                            {infra.Data?.Images?.map((image, index) => (
                                <div key={index} className='h-full flex items-center'>
                                    <img src={`${import.meta.env.VITE_API_URL}/Infrastructure/Infrastructure_Image_Display/${id}/${image._id}`} alt={image} className='rounded-lg' />
                                </div>))}
                        </Carousel>
                    </div>
                    <p className='text-gray-700 text-2xl'> {infra.Data?.Detail}</p>
                </div>
            </motion.section>
            <Footer />
        </>
    )
}

export default Infra