import { useState, useEffect, useRef } from 'react'
import { Header, Navbar, Footer, Loader } from '../Components'
import { motion } from 'framer-motion'
import { routingAnimations } from "../constants"
import { Carousel } from 'react-responsive-carousel'
import useFetch from '../useFetch'

const Infra = () => {
    const myRef = useRef(null)
    const [infra, setInfra] = useState({})
    const { data: infraDrop, isPending } = useFetch(`${import.meta.env.VITE_API_URL}/Infrastructure/Infrastructure_Display_DropDown`)

    const fetchInfra = async (e) => {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/Infrastructure/Infrastructure_Single_Display/${e.target.value}`)
        const data = await res.json()
        setInfra(data)

        console.log(data);
    }



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

                <div className='w-[min(1500px,100%)] mx-auto my-10 grid'>
                    {isPending && <Loader />}
                    {infraDrop &&
                        <select name="infradrop" onChange={(e) => { fetchInfra(e) }} className='mx-auto my-text-2 p-5 outline-none border-none blue_bg my-bold text-white rounded-md shadow-md'>
                            <option value="" className='my-bold'>Select</option>
                            {infraDrop?.Data?.map((infra, index) => (
                                <option key={index} value={infra._id} className='my-bold'>{infra.InfraName}</option>
                            ))}
                        </select>
                    }

                    {infra && <motion.div
                        initial={{ translateY: 100 }}
                        animate={{ translateY: 0 }}
                        transition={{ duration: .3, type: 'spring' }}
                        ref={myRef}
                        key={infra.Data?._id}
                    >
                        <h1 className='orange_gradient my-bold my-text-3'>{infra.Data?.InfraName}</h1>
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
                                            <img src={`${import.meta.env.VITE_API_URL}/Infrastructure/Infrastructure_Image_Display/${infra.Data._id}/${image._id}`} alt={image} className='rounded-lg ' onLoad={() => { window.scrollTo(0, myRef.current.offsetTop + 140) }} />
                                        </div>))
                                    }
                                </Carousel>
                            </div>
                        </div>
                    </motion.div>}
                    <p className='text-gray-700 text-2xl text-justify'> {infra.Data?.Detail}</p>
                </div>
            </motion.section>
            <Footer />
        </>
    )
}

export default Infra