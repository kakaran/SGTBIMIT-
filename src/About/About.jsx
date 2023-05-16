import React from 'react'
import './about.css'
import Navbar from '../Components/Navbar'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion'
export default function About() {
    return (
        <main>
            <Helmet title="SGTBIMIT | About us" />
            <Header />
            <Navbar />
            <motion.section viewport={{ once: true }}
                initial={{
                    x: "100vw",
                }}
                animate={{
                    x: 0,
                }}
                exit={{
                    x: '-100vw',
                }}
                transition={{
                    duration: .25,
                }}
                className='about'>

                <div className='about-container'>
                    <div className='about-title'>
                        ABOUT SGTBIMIT
                    </div>
                    <div className='about-content'>
                        <img src={require("../images/college.jpg")} alt="" className='clg-img' />
                        <p>
                            SGTBIMIT ascertains, preserves and disseminates knowledge. Since the establishment of SGTBIMIT in 2008, it has aimed to promote excellence in professional education and insp​ire research and extension work in the emerging areas of higher education in Management, Banking, Insurance and Information Technology. "A" degree level institute, approved by D​irectorate of Higher Education (Govt of NCT of Delhi) certified by ISO 9001:2015 and affiliated to Guru Gobind Singh Indraprastha University, Delhi. Located in the heart of the city, adjoining Gurudwara Nanak Piao, hardly 1 km away from North Campus (DU) and Model town Metro Station. Ever since its inception, SGTBIMIT has consistently shaped students who have outshined in academics and professional endeavors.
                        </p>
                    </div>

                </div>
                <div className="history-container">
                    <div className="about-title">
                        HISTORY
                    </div>
                    <p>
                        <strong>Sri Guru Tegh Bahadur Institute of Management & Information Technology</strong>, a SIKH Institution, was founded by the DSGMC, with the primary objective of providing University Education in a nice atmosphere for deserving students irrespective of caste and creed.
                    </p>
                    <p>
                        It started functioning in 2008 with just 120 students on the rolls in two undergraduate courses of BCA & BBA.
                    </p>
                    <p>
                        SGTBIMIT is a degree level Institute, affiliated to Guru Gobind Singh Indraprastha University, approved by the directorate of higher education (GOVT OF NCT OF DELHI), certified by ISO 9001-2008 . SGTBIMIT, though affiliated to Guru Gobind Singh Indraprastha University, is empowered to frame its own course of studies and adopt innovative methods of teaching and evaluation.
                    </p>
                    <p>
                        The University degrees will be conferred on the students passing the examinations conducted by the university. The story of Sri Guru Tegh Bahadur Institute of Management and Information technology (SGTBIMIT) goes back to the chain of schools and colleges under DSGMC that offer an attractive option of world class education.
                    </p>
                    <p>
                        SGTBIMIT was established to promote excellence in professional education and promote studies, research and extension work in the emerging areas of higher education in Management, Information Technology, Banking & Insurance. Located in the heart of the city, adjacent to Gurudwara Nanak Piao (GT Karnal Road, New Delhi), hardly 1 km away from north campus (DU).
                    </p>
                    <p>
                        Today, we have four U.G courses (BCA , BBA(G) & BBA(B&I), B.Com(H)) . At present, we have well educated teaching staff members & non-teaching staff in service.
                    </p>
                </div>
            </motion.section>
            <Footer />
        </main>
    )
}
