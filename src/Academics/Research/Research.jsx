import React, { useEffect, useState } from 'react'
import { Header, Navbar, Footer } from "../../Components"
import './research.css'
import img from '../../images/research-img.png'
import { Link, useNavigate } from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel'
import researchCardImg from '../../images/research-card-img.png'
import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion'
import { routingAnimations } from '../../constants'
import _ from 'lodash'



export default function Research() {
    const navigate = useNavigate()
    const [filter, setFilter] = useState(null)
    const [research, setResearch] = useState(null)
    const [options, setOptions] = useState(null)

    const fetchResearch = async () => {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/Research_Development/Research_Development_Display`)
        const data = (await res.json()).Data
        setResearch(data)
        setOptions(_.uniqBy(data, obj => obj.Date))
        setFilter(_.uniqBy(data, obj => obj.Date)[0].Date)
        console.log(data)
    }

    // const research = [
    //     [
    //         {
    //             image: researchCardImg,
    //             title: 'Research Card',
    //             date: "dd-mm-yyyy"
    //         },
    //         {
    //             image: researchCardImg,
    //             title: 'Research Card',
    //             date: "dd-mm-yyyy"
    //         },
    //         {
    //             image: researchCardImg,
    //             title: 'Research Card',
    //             date: "dd-mm-yyyy"
    //         },
    //     ],
    //     [
    //         {
    //             image: researchCardImg,
    //             title: 'Research Card',
    //             date: "dd-mm-yyyy"
    //         },
    //         {
    //             image: researchCardImg,
    //             title: 'Research Card',
    //             date: "dd-mm-yyyy"
    //         },
    //         {
    //             image: researchCardImg,
    //             title: 'Research Card',
    //             date: "dd-mm-yyyy"
    //         },
    //     ],
    // ]
    useEffect(() => {
        fetchResearch()
    }, [])

    return (
        <>
            <Helmet title="SGTBIMIT | Research" />
            <Header />
            <Navbar />
            <motion.main
                viewport='viewport'
                initial='initial'
                animate='animate'
                exit='exit'
                transition='transition'
                variants={routingAnimations}
            >
                <div className="gradient-bg"></div>
                <section className='research-section'

                >
                    <div className="research-img">
                        <img src={img} alt="cant load" className='w-full h-[500px] rounded-3xl shadow-lg object-cover' />
                    </div>
                    <p className="research-content">
                        SGTBIMIT has a Research and Development Department dedicated to promote and to encourage the aspiring students and faculty members to carry out research in the field of Management, IT, commerce, by providing necessary facilities and infrastructures required by them.
                    </p>
                    {/* {<section className='research-box'>
                    <div className="research-box-left">
                        <p>The Latest research from</p>
                        <p>Sri Guru Tegh Bahadur Institute of Management and Information Technology</p>

                        <p className='research-link'>
                            <Link to="view-all">View All {">"}</Link>
                        </p>
                    </div>
                    <div className="research-box-right">
                        <Carousel
                            showThumbs={false}
                            showIndicators={false}
                        >
                            {research && research.map((res, i) => (
                                <div className="res-grid" key={i}>
                                    {res.map((re, i) => (
                                        <div className="research-card" key={i}>
                                            <img src={re.image} alt="cant load" />
                                            <h1>{re.title}</h1>
                                            <p>{re.date}</p>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </section>} */}
                    <select name="date" id="date" onChange={(e) => setFilter(e.target.value)} className='blue_bg text-white my-text-2 my-bold px-5 py-2 outline-none border-none rounded-lg my-5'>
                        {/* <option value="">Select Year</option> */}
                        {options?.map(option => (
                            <option value={option.Date}>{option.Date}</option>
                        ))}
                    </select>
                    <div className="events-container">
                        <div className="EventScroller">
                            {research?.filter(obj => obj.Date === filter).map((res, i) => (
                                <motion.div className="eventCardConatainer" key={res._id}
                                    initial={{ opacity: 0, y: 100 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 100 }}
                                    transition={{ duration: 0.5 }}
                                    onClick={
                                        () => { navigate(`/academics/research/${res._id}`) }
                                    }
                                >
                                    <div className="event-card">
                                        <p>{res?.Date}</p>
                                        <img
                                            src={`${import.meta.env.VITE_API_URL}/Research&Development/Research&Development_Image_Display/${res._id}`}
                                            alt="cant load"
                                        />
                                        <h1> {res.heading} </h1>
                                        <p> {res.Detail} </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    {/* <div>
                            {options && options.map((option, i) => (
                                <div>
                                    <h1 className='orange_gradient my-bold my-text-3'>{option.category}</h1>
                                    {research && research.filter(res => res.category === option.category).map((res, i) => (
                                        <div className='text-gray-700 text-2xl my-5'>
                                            <div className='h-1 rounded-full bg-red-700 w-full'></div>
                                            <h1 className='text-3xl blue_gradient my-bold'>{`${res.heading}`}</h1>
                                            <img src={`${import.meta.env.VITE_API_URL}/Research&Development/Research&Development_Image_Display/${res._id}`} alt="" className='w-1/2 rounded-md shadow-lg' />
                                            <div className='grid gap-10'>
                                                <pre className='whitespace-break-spaces text-justify'>
                                                    {res.Detail}
                                                </pre>
                                                <div className='grid place-content-center w-[min(800px,100%)] mx-auto'>
                                                    <div className=''>
                                                        <Carousel
                                                            showThumbs={false}
                                                            showIndicators={false}

                                                        >
                                                            {res.images.map((image, i) => (
                                                                <div className='flex justify-center items-center'>
                                                                    <img src={`${import.meta.env.VITE_API_URL}/Research&Development/Research&Development_Images_Display/${res._id}/${image._id}`} alt="" className='rounded-md shadow-lg h-[400px]' />
                                                                </div>))}
                                                        </Carousel>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div> */}
                    <div className="bottom-carousel"
                        style={{
                            marginTop: 'min(3rem, 3vw)',
                        }}
                    >
                        <Carousel
                            showThumbs={false}
                            showIndicators={false}
                        >
                            {/* {research.map((res, i) => (
                            <div className="res-grid" key={i}>
                                {res.map((re, i) => (
                                    <div className="research-card" key={i}>
                                        <img src={re.image} alt="cant load" />
                                        <h1>{re.title}</h1>
                                        <p>{re.date}</p>
                                    </div>
                                ))}
                            </div>
                        ))} */}
                        </Carousel>
                    </div>
                </section>
            </motion.main>
            <Footer />
        </>
    )
}
