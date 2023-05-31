import React from 'react'
import './placements.css'
import { Header, Navbar, Footer, Loader } from '../../Components'
import { Helmet } from 'react-helmet'
import { BsArrowDownCircleFill } from 'react-icons/bs'
import ellipse from '../../images/placement-ellipse.png'
import img from '../../images/place-img.png'
import Recruiters from '../../Home/Recruiters'
import Placementss from '../../Home/Placementss'
import Statistics from './Statistics/Statistics'
import { motion } from 'framer-motion'
import { routingAnimations } from '../../constants'
import AutoHorizontalScroll from '../../Home/AutoHorizontalScroll'
import useFetch from '../../useFetch'
import _ from 'lodash'
import Team from './Team'

export default function Placements() {

    const { data: feature, isPending } = useFetch(`${import.meta.env.VITE_API_URL}/PlacementFeature/PlacementFeature_Display`)

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
                        <div className="vertical-line max-lg:hidden" />
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
                <Team />
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
                    <div className='w-full px-9 flex flex-col mx-auto'>
                        {isPending && <Loader />}
                        {feature && <AutoHorizontalScroll>
                            {feature.map(feat => (
                                <div className='relative p-5 border-solid border-2 border-gray-300 rounded-md bg-white flex flex-col gap-4 min-w-[350px] max-w-[350px] m-0 overflow-hidden' key={feat.name} style={{ boxShadow: "inset 0 -3em 3em rgba(0,0,0,0.1), 0 0  0 2px rgb(190, 190, 190),0.3em 0.3em 1em rgba(0,0,0,0.3)" }}>
                                    <img src={`${import.meta.env.VITE_API_URL}/PlacementFeature/Placementfeature_Image_Display/${feat._id}`} alt="" className='mix-blend-multiply w-full' />
                                    <div>
                                        <div className='my-bold text-3xl'>{_.capitalize(_.toLower(feat.Name))}</div>
                                        <div className='uppercase text-gray-800 text-lg'>{feat.Course}</div>
                                    </div>
                                    <div className='h-1 bg-blue-600 rounded-full w-5/6 mx-auto' />
                                    <img src={`${import.meta.env.VITE_API_URL}/PlacementFeature/PlacementFeature_CompanyImg_Display/${feat._id}`} alt="" className='mix-blend-multiply w-1/2 mx-auto' />
                                </div>
                            ))}
                        </AutoHorizontalScroll>}
                    </div>
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
