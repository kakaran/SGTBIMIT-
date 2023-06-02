import React from 'react'
import { Header, Navbar, Footer } from "../../Components"
import './research.css'
import img from '../../images/research-img.png'
import { Link } from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel'
import researchCardImg from '../../images/research-card-img.png'
import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion'
import { routingAnimations } from '../../constants'


export default function Research() {
    const research = [
        [
            {
                image: researchCardImg,
                title: 'Research Card',
                date: "dd-mm-yyyy"
            },
            {
                image: researchCardImg,
                title: 'Research Card',
                date: "dd-mm-yyyy"
            },
            {
                image: researchCardImg,
                title: 'Research Card',
                date: "dd-mm-yyyy"
            },
        ],
        [
            {
                image: researchCardImg,
                title: 'Research Card',
                date: "dd-mm-yyyy"
            },
            {
                image: researchCardImg,
                title: 'Research Card',
                date: "dd-mm-yyyy"
            },
            {
                image: researchCardImg,
                title: 'Research Card',
                date: "dd-mm-yyyy"
            },
        ],
    ]

    return (
        <>
            <Helmet title="SGTBIMIT | Research" />
            <Header />
            <Navbar />
            <motion.section className='research-section'
                viewport='viewport'
                initial='initial'
                animate='animate'
                exit='exit'
                transition='transition'
                variants={routingAnimations}
            >
                <div className="research-img">
                    <img src={img} alt="cant load" />
                </div>
                <p className="research-content">
                    SGTBIMIT has a Research and Development Department dedicated to promote and to encourage the aspiring students and faculty members to carry out research in the field of Management, IT, commerce, by providing necessary facilities and infrastructures required by them.
                </p>
                <section className='research-box'>
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
                            {research.map((res, i) => (
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
                </section>
                <div className="bottom-carousel"
                    style={{
                        marginTop: 'min(3rem, 3vw)',
                    }}
                >
                    <Carousel
                        showThumbs={false}
                        showIndicators={false}
                    >
                        {research.map((res, i) => (
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
            </motion.section>
            <Footer />
        </>
    )
}
