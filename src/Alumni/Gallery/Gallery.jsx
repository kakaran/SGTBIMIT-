import React, { useState } from 'react'
import './gallery.css'
import { Header, Navbar, Footer } from '../../Components'
import { Carousel } from 'react-responsive-carousel'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet'
import { routingAnimations } from '../../constants'
import p1 from '../../images/p1.jpg'
import cancel from '../../images/cancel.png'

export default function Gallery() {
    const [isCarouselActive, setIsCarouselActive] = useState(false)
    return (
        <>
            <Helmet title='SGTBIMIT | Alumini Gallery' />
            <Header />
            <Navbar />
            <motion.section className='gallery-section'
                viewport='viewport'
                initial='initial'
                animate='animate'
                exit='exit'
                transition='transition'
                variants={routingAnimations}
            >
                <div className="head1">GALLERY</div>
                <div className="gallery-box">
                    {[...Array(9)].map((x, i) => (
                        <>
                            {!isCarouselActive && <div className="gallery-box1" onClick={() => { setIsCarouselActive(true) }}>
                                <img src={p1} alt="infra" className="pic" />
                                <p className="text">Infra</p>
                            </div>}
                            {isCarouselActive && (
                                <motion.section viewport={{ once: true }}
                                    className="gallery-carousel-section"
                                    initial={{
                                        scale: 0,
                                    }}
                                    animate={{
                                        scale: 1,
                                    }}
                                >
                                    <div className="gallery-carousel-container">
                                        <img src={cancel} className="carousel-close-btn" onClick={() => setIsCarouselActive(false)} alt='' />
                                        <Carousel>
                                            {[...Array(6)].map((x, i) => (
                                                <div className="gallery-carousel-item">
                                                    <img src={p1} alt="infra" />
                                                </div>
                                            ))}
                                        </Carousel>
                                    </div>
                                </motion.section>
                            )}
                        </>
                    ))}
                </div>
            </motion.section>
            <Footer />
        </>
    )
}
