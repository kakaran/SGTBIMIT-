import React from 'react'
import './testAl.css'
import { Header, Navbar, Footer } from '../../Components'
import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion'
import { routingAnimations } from '../../constants'


export default function TestimonialsAL() {
    return (
        <>
            <Helmet title='SGTBIMIT | Alumini Testimonials' />
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
                    {[...Array(12)].map((x, i) => {
                        return (
                            <div className="t-card">
                                <img src={""} className="card-img" alt='placeholder for images' />
                                <div className="card-info">
                                    <p className="text-body">I put some random interesting text here of more than 2 lines.</p>
                                    <p className="text-title">Author</p>
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