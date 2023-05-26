import React from 'react'
import './testAl.css'
import { Header, Navbar, Footer } from '../../Components'
import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion'
import { routingAnimations } from '../../constants'
import useFetch from '../../useFetch'


export default function TestimonialsAL() {
    const { data: alumni, isPending } = useFetch(`${import.meta.env.VITE_API_URL}/alumini_Testimonial/alumini_Testimonial_Display`)

    return (
        <>
            <Helmet title='SGTBIMIT | Alumni Testimonials' />
            <Header />
            <Navbar />
            <motion.section className='test-al-section'
                viewport='viewport'
                initial='initial'
                animate='animate'
                exit='exit'
                transition='transition'
                variants={routingAnimations}
            >
                <h1>TESTIMONIALS</h1>
                <div className="t-grid">
                    {alumni?.map((alum, i) => {
                        return (
                            <div className="t-card">
                                <img src={`${import.meta.env.VITE_API_URL}/alumini_Testimonial/alumini_Testimonial_Image_Display/${alum._id}`} className="card-img" alt='placeholder for images' />
                                <div className="card-info">
                                    <p className="text-body">{alum.detail}</p>
                                    <p className="text-title">{alum.name}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </motion.section>
            <Footer />
        </>
    )
}