import React, { useEffect, useState } from 'react'
import './gallery.css'
import { Header, Navbar, Footer } from '../../Components'
import { Carousel } from 'react-responsive-carousel'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet'
import { routingAnimations } from '../../constants'
import p1 from '../../images/p1.jpg'
import cancel from '../../images/cancel.png'

export default function Gallery() {

    const [images, setImages] = useState([])
    const [carouselIndex, setCarouselIndex] = useState(null)

    const fetchImages = async () => {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/Alumini/gallery/aluminiDisplayImage`)
        const data = await res.json()
        setImages(data)

    }

    useEffect(() => {
        fetchImages()
    }, [])
    return (
        <>
            <Helmet title='SGTBIMIT | Alumni Gallery' />
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
                    {images.map((image, i) => (
                        <div key={image._id} className="gallery-box1" onClick={() => { setCarouselIndex(i) }}>
                            <img src={`${import.meta.env.VITE_API_URL}/Alumini/gallery/alumini_Simgle_Image/${image._id}`} alt="can load" className="pic" />
                            <p className="my-text-2">{image.category}</p>
                        </div>
                    ))}
                </div>
            </motion.section>
            {images.map((image, i) => {
                if (carouselIndex === i) return (
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
                            <img src={cancel} className="carousel-close-btn" onClick={() => setCarouselIndex(null)} alt='' />
                            <Carousel>
                                {image.images.map((nestedImage, i) => (
                                    <div className="gallery-carousel-item">
                                        <img src={`${import.meta.env.VITE_API_URL}/Alumini/gallery/aluminiDisplayImages/${image._id}/${nestedImage._id}`} alt="cant load" />
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    </motion.section>
                )
            })}
            <Footer />
        </>
    )
}
