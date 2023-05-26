import React from 'react'
import './courses.css'
import { Header, Navbar, Footer } from '../../Components'
import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion'
import { routingAnimations } from '../../constants'
import bca from '../../images/bca.jpg'

export default function Bca() {

  return (
    <>
      <Helmet title='SGTBIMIT | BCA' />
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
          <img src={bca} alt="cant load" />
          <h1>BACHELORS OF COMPUTER APPLICATIONS</h1>
          <p>
            The Bachelor of Computer Applications (BCA) program offered by
            Sri Guru Tegh Bahadur Institute of Management and Information
            Technology (SGTBIMIT) is a highly sought-after program for students
            aspiring to pursue a career in the field of Information Technology (IT).
            <br /><br />
            The BCA program at SGTBIMIT is designed to provide students with a
            strong foundation in computer applications, programming languages,
            database management, and software development. The curriculum is
            well-balanced, with a focus on both theoretical and practical learning.
            Students gain hands-on experience through various lab sessions, projects,
            and assignments, which help them apply their learning to real-world scenarios.
            <br /><br />
            The faculty at SGTBIMIT is highly qualified and experienced in their
            respective fields, and they are dedicated to providing quality education
            to students. The institute offers modern facilities and resources, including
            a well-equipped computer lab, library, and access to the latest software and technologies.
            <br /><br />
            Throughout the program, students have the opportunity to participate in
            various extracurricular activities, including technical events, seminars,
            and workshops, which help them enhance their skills and gain exposure to
            the latest trends in the IT industry.
            <br /><br />
            Upon completion of the BCA program, students have a strong foundation in
            computer applications and programming, which prepares them for various job
            roles in the IT industry. They can pursue careers as software developers,
            database administrators, system analysts, network administrators, and many more.
            <br /><br />
            Overall, the BCA program at SGTBIMIT is an excellent choice for students who
            are passionate about pursuing a career in the field of IT, as it provides them
            with a strong foundation and exposure to the latest technologies and trends in the industry.
          </p>
          {/*           <AdditionalDiploma /> */}
        </div>
      </motion.section>
      <Footer />
    </>
  )
}
