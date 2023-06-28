import React from 'react'
import './courses.css'
import { Header, Navbar, Footer } from '../../Components'
import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion'
import { routingAnimations } from '../../constants'

export default function Bcom() {
    return (
        <>
            <Helmet title="SGTBIMIT | BCOM" />
            <Header />
            <Navbar />
            <motion.section className="courses-section"
                viewport='viewport'
                initial='initial'
                animate='animate'
                exit='exit'
                transition='transition'
                variants={routingAnimations}
            >
                <div className='courses'>
                    <img src="/images/bcom.png" alt="cant load" />
                    <h1>BACHELORS OF COMMERCE</h1>
                    <p>
                        B.Com (Honours) is an industry-oriented degree programme that
                        teaches students about business, accounting, marketing, and
                        other related subjects. This course provides a promising future
                        with many prospects. B.com (Honours) course graduates can make a
                        career in corporate and financial services, banking and management services.

                        <h2>DESCRIPTION OF DEGREE</h2>

                        B.Com (Honours) course is designed to promote understanding of the
                        issues in the world of business and the economy as a whole. It empowers
                        students to acquire the necessary knowledge, skills and abilities to
                        analyze the contemporary realities of the business domain. This programme
                        aims at inculcating conceptual and practical understanding to equip
                        students to manage businesses and organizations, and prepares them
                        to drive and face the challenge of tomorrow. Further, this course is
                        designed to help cultivate an entrepreneurial mindset and skills.

                        <h2>SKILLS OBTAINED</h2>

                        To disseminate in the students the knowledge and capability of
                        understanding the business world and its complexities. It will
                        also develop the competence and ability to have a problem-solving
                        approach toward the issues which accompany the dynamism attached
                        to the business world. This gives students a chance to inculcate
                        the attitudes and character that will help students evolve into
                        sensitive and technically sound future business leaders rather
                        than managers and aim at enhancing the employability options of the students.

                        <h2>HIGHER EDUCATIONAL PLAN</h2>

                        B.Com (Honours) course is one of the well-known courses across the world.
                        Students can choose from two major alternatives after completing their
                        Bachelor of Commerce (Honours) degree:
                        <br />
                        Option 1: Students can begin working in entry-level positions in their
                        respective fields after completing a B.Com (Honours) degree. They can
                        continue their studies and pursue a master's degree in the relevant
                        discipline after gaining a few years of work experience.

                        Option 2: Students who obtain a B.Com (Honours) degree can pursue a
                        postgraduate degree and can apply for M.Com (Master of Commerce) or
                        MBA (Master of Business Administration) programmes to stay competitive
                        and become successful in their careers.

                        <h2>CAREER OPTIONS</h2>

                        Students who opt for B.Com (Honours) course get an insight into
                        taxation, finance, accountancy and economics which further help them
                        seek amazing job profiles and positions in reputed companies across
                        the globe. There is a huge scope and varying job profiles in varying
                        industries for B.com (Honours) degree graduates. Students after
                        completing the course get a wide scope of opportunities to work as
                        Auditors, Banking, Lecturers, Insurance Consultant, Stock brokers and Tax Consultants.

                        <h2>WRAP UP</h2>

                        The Degree in B.com (Honours) Programme will help the students to
                        understand and evaluate various systems, policy frameworks and
                        strategies needed to administer the rapid changes in a globally oriented
                        environment like providing students with an understanding of the financial
                        system, its constituents, the principles on which it operates, inter-linkages
                        and regulatory concerns apart from exposure of different functional domains of management.
                    </p>
                    {/* <AdditionalDiploma /> */}
                </div>
            </motion.section>
            <Footer></Footer>
        </>
    )
}
