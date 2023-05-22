import React from 'react'
import './courses.css'
import AdditionalDiploma from './AdditionalDiploma'
import { Header, Navbar, Footer } from '../../Components'
import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion'
import { routingAnimations } from '../../constants'

export default function Bcom() {
    return (
        <>
            <Helmet title="SGTBIMIT | Bcom" />
            <Header />
            <Navbar />
            <section className="courses-section"
                viewport='viewport'
                initial='initial'
                animate='animate'
                exit='exit'
                transition='transition'
                variants={routingAnimations}
            >
                <div className='courses'>
                    <img src={require("../../images/bcom.png")} alt="cant load" />
                    <h1>BACHELORS OF COMMERCE</h1>
                    <p>
                        The Bachelor of Commerce (BCom) program offered by Sri Guru
                        Tegh Bahadur Institute of Management and Information Technology
                        (SGTBIMIT) is a highly regarded program for students looking to
                        pursue a career in the field of commerce and business.The BCom
                        program at SGTBIMIT provides students with a comprehensive
                        understanding of business concepts and practices, including accounting,
                        finance, marketing, and human resource management. The curriculum is
                        designed to provide students with both theoretical and practical
                        knowledge, through case studies, projects, and internships.
                        The program also emphasizes the development of critical thinking,
                        analytical, and communication skills, which are essential for
                        success in the business world.
                        <br /><br />
                        The faculty at SGTBIMIT are highly experienced and dedicated to
                        providing students with quality education. The institute offers
                        modern facilities and resources, including a well-equipped library,
                        computer labs, and access to industry experts.Throughout the program,
                        students have the opportunity to participate in various extracurricular
                        activities, including seminars, workshops, and business competitions,
                        which help them enhance their skills and gain exposure to the latest
                        trends in the business world.
                        <br /><br />
                        Upon completion of the BCom program, students are well-equipped to
                        pursue exciting careers in various fields, including accounting,
                        finance, marketing, human resources, and many more. The program also
                        provides an excellent foundation for students who wish to pursue further
                        studies in business or related fields. Overall, the BCom program at
                        SGTBIMIT is an excellent choice for students who are passionate about
                        pursuing a career in the field of business and commerce, as it provides
                        them with a solid foundation and exposure to the latest trends and practices in the industry.
                    </p>
                    {/*                     <AdditionalDiploma /> */}
                </div>
            </section>
            <Footer></Footer>
        </>
    )
}
