import React from 'react'
import './placements.css'
import { Header, Navbar, Footer } from '../../Components'
import { Helmet } from 'react-helmet'
import { BsArrowDownCircleFill } from 'react-icons/bs'
import ellipse from '../../images/placement-ellipse.png'
import img from '../../images/place-img.png'
import Recruiters from '../../Home/Recruiters'
import Placementss from '../../Home/Placementss'
import Statistics from './Statistics/Statistics'
import { motion } from 'framer-motion'
import { routingAnimations } from '../../constants'

export default function Placements() {
    return (
        <>
            <Helmet title='SGTBIMIT | Placements' />
            <Header />
            <Navbar />
            <motion.main className="placement-cell"
                viewport='viewport'
                initial='initial'
                animate='animate'
                exit='exit'
                transition='transition'
                variants={routingAnimations}
            >
                <section className="placement-cell-section">
                    <h1>
                        Dream big & <br />
                        make it happen
                    </h1>
                    <p>
                        This would be the our story text. Amet minim mollit noncription. Amnefjenfjeet minim mollit noncription. Amet minim mollit noncription. Amet minnfejfnjim mollit noncription. Amet minim mollit noncription. Amet minim jdbfjejfbmollit noncription. Amet minim mollit noncription. Amet minim mollit noncription. Amet minim mollit noncription. Amet minim fbmollit noncription. Amet minim mollit no
                    </p>
                    <a href="#placement-about">
                        <BsArrowDownCircleFill size={"3rem"} color="#005E93" />
                        <div className="vertical-line" />
                    </a>
                </section>
                <section className='placement-about-section' id='placement-about'>
                    <img src={ellipse} alt="" className='max-lg:hidden' />
                    <div className='layered-title'>
                        <h1>ABOUT US</h1>
                        <h2>About us</h2>
                    </div>
                    <div className='placement-about-content'>
                        <div className="people">
                            <h2 className='placement-about-us'>01/About Us</h2>
                            <h1>
                                Be where
                                people are
                            </h1>
                            <p>
                                This would be the our story text. Amet minim mollit noncription. Amnefjenfjeet minim mollit noncription. Amet minim mollit noncription. Amet minnfejfnjim mollit noncription. Amet minim mollit noncription. Amet minim jdbfjejfbmollit noncription.
                            </p>
                        </div>
                        <img src={img} alt="" />
                    </div>
                </section>
                <section className="featured-stars-section">
                    <h2 className='placement-about-us'
                        style={{
                            marginInline: 'auto',
                            zIndex: '10'
                        }}
                    >01/About Us</h2>
                    <h1 style={{
                        marginBottom: "4rem",
                        zIndex: '10'
                    }}>Featured Stars</h1>
                    <Placementss isTitle={false} />
                    <div className="vertical-line"
                        style={{
                            marginTop: "min(2rem, 2vw)"
                        }}
                    />
                </section>
                <section className='placement-recruiters-section'>
                    <div className='layered-title' style={{
                        marginInline: 'auto',
                    }}>
                        <h1>RECRUITERS</h1>
                        <h2>Our Past Recruiters</h2>
                    </div>
                    <Recruiters isTitle={false} />
                </section>
                <Statistics />
            </motion.main>
            <Footer />
        </>
    )
}
