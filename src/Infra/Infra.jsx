import { useState, useEffect } from 'react'
import { Header, Navbar, Footer, Loader } from '../Components'
import { motion } from 'framer-motion'
import { routingAnimations } from "../constants"
import { Carousel } from 'react-responsive-carousel'
import { useParams } from 'react-router-dom'

const Infra = () => {
    const [infra, setInfra] = useState({})
    const { id } = useParams()


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
                    <h1 className='my-bold blue_gradient my-text-4 mb-0'>{infra?.Data?.InfraName}</h1>
                </div>

                <div className='w-[min(1500px,100%)] mx-auto my-10 grid'>
                    {/* {isPending && <Loader />}
                    {infraDrop &&
                        <select name="infradrop" onChange={(e) => { fetchInfra(e) }} className='mx-auto my-text-2 p-5 outline-none border-none blue_bg my-bold text-white rounded-md shadow-md'>
                            <option value="" className='my-bold'>Select</option>
                            {infraDrop?.Data?.map((infra, index) => (
                                <option key={index} value={infra._id} className='my-bold'>{infra.InfraName}</option>
                            ))}
                        </select>
                    } */}

                    {infra && <div key={infra.Data?._id}>
                        <div className='flex justify-center items-center'>
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
                                        <div key={index} className='flex items-center h-[500px] justify-center'>
                                            <img src={`${import.meta.env.VITE_API_URL}/Infrastructure/Infrastructure_Image_Display/${infra.Data._id}/${image._id}`} alt={image} className='rounded-lg ' /* onLoad={() => { window.scrollTo(0, myRef.current.offsetTop + 140) }} */ />
                                        </div>))
                                    }
                                </Carousel>
                            </div>
                        </div>
                        <p className='text-gray-700 text-2xl text-justify'> {infra.Data?.Detail}</p>
                    </div>}
                </div>
            </motion.section>
            <Footer />
        </>
    )
}

export default Infra