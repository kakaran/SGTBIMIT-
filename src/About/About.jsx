import React from 'react'
import './about.css'
import { Header, Navbar, Footer } from '../Components'
import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion'
import { routingAnimations } from '../constants/RoutingAnimations'
import college from '../images/college.jpg'

export default function About() {
    return (
        <main>
            <Helmet title="SGTBIMIT | About us" />
            <Header />
            <Navbar />
            <motion.section
                viewport='viewport'
                initial='initial'
                animate='animate'
                exit='exit'
                transition='transition'
                variants={routingAnimations}
                className='about'>
                <h1 className='my-bold primary-blue my-text-4 text-center'>
                    ABOUT SGTBIMIT
                </h1>
                <div className='flex flex-col gap-3 w-[min(1400px,100%)] mx-auto'>
                    <div className='grid grid-cols-2 gap-8 text-[min(1.5rem,4vw)] max-lg:grid-cols-1 leading-[2em] max-md:leading-[1.5em] text-gray-800 place-items-center'>
                        <p className='text-justify '>
                            SGTBIMIT ascertains, preserves and disseminates knowledge. Since the establishment of SGTBIMIT in 2008, it has aimed to promote excellence in professional education and insp​ire research and extension work in the emerging areas of higher education in Management, Banking, Insurance and Information Technology. "A" degree level institute, approved by D​irectorate of Higher Education (Govt of NCT of Delhi) certified by ISO 9001:2015 and affiliated to Guru Gobind Singh Indraprastha University, Delhi. Located in the heart of the city, adjoining Gurudwara Nanak Piao, hardly 1 km away from North Campus (DU) and Model town Metro Station. Ever since its inception, SGTBIMIT has consistently shaped students who have outshined in academics and professional endeavors.
                        </p>
                        <img src={college} alt="" className='w-full rounded-lg' />
                    </div>

                    <div className='text-justify text-gray-800 '>
                        <h1 className="my-bold primary-blue my-text-4">
                            History
                        </h1>
                        <div className='text-[min(1.5rem,4vw)] leading-[2em] max-md:leading-[1.5em]' >
                            <p>
                                <span className='my-bold'>Sri Guru Tegh Bahadur Institute of Management & Information Technology</span>, a SIKH Institution, was founded by the DSGMC, with the primary objective of providing University Education in a nice atmosphere for deserving students irrespective of caste and creed.
                            It started functioning in 2008 with just 120 students on the rolls in two undergraduate courses of BCA & BBA.
                            SGTBIMIT is an 'A' degree level Institute, affiliated to Guru Gobind Singh Indraprastha University, approved by the directorate of higher education (GOVT OF NCT OF DELHI), certified by ISO 9001-2008 . SGTBIMIT, though affiliated to Guru Gobind Singh Indraprastha University, is empowered to frame its own course of studies and adopt innovative methods of teaching and evaluation.
                            The University degrees will be conferred on the students passing the examinations conducted by the university. The story of Sri Guru Tegh Bahadur Institute of Management and Information technology (SGTBIMIT) goes back to the chain of schools and colleges under DSGMC that offer an attractive option of world class education.
                            SGTBIMIT was established to promote excellence in professional education and promote studies, research and extension work in the emerging areas of higher education in Management, Information Technology, Banking & Insurance. Located in the heart of the city, adjacent to Gurudwara Nanak Piao (GT Karnal Road, New Delhi), hardly 1 km away from north campus (DU).
                            Today, we have four U.G courses (BCA , BBA(G), BBA(B&I), & B.Com(H)) . At present, we have well educated teaching staff members & non-teaching staff in service.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.section>
            <Footer />
        </main>
    )
}
