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
          We at SGTBIMIT aspire to create competent Software & IT Management professionals who 
          are committed to pursuing excellence and setting benchmarks in the IT Sector. 
          Our students are provided with the best learning aids, and hands-on exposure to 
          industry work and seminars.

          <h2>ABOUT THE BCA PROGRAM STRUCTURE</h2>

          BCA course offered by SGTBIMITis affiliated to the Guru Gobind Singh Indraprastha University, Delhi.
          The programme is divided into six semesters with two semesters in an academic year.
          The fast-growing information technology and communication systems have become critical 
          components of almost every company's strategic plan. Companies that want to take advantage 
          of the new information technologies and communication systems require expert professionals, 
          who can apply computer science principles to solve problems produced by the interface 
          between business and technology. BCA Course is an undergraduate program where students 
          are exposed to various areas of computer applications including the latest developments 
          in the industry. The main objective of the Bachelor of Computer Application (B.C.A.) is 
          to provide an advanced career in Computer Applications. BCA graduates can start their 
          careers as programmers and rise to that senior programmers.

          <h2>DESCRIPTION OF DEGREE</h2>

          Bachelor of Computer Application(BCA) is an undergraduate course for tech-savvy youth 
          who are interested in making a career in the field of Info-tech. If one wishes to 
          become a Software Developer or web designer or wants to take up a career in Systems 
          Management, then BCA is the best course to get an early start on their career. Job 
          opportunities can be found in both large and small software development organizations 
          as well as hardware companies. The aim is to equip individuals with skill sets 
          comparable to International standards. The successful completion of this course 
          opens up options such as MCA, MBA etc.

          <h2>SKILLS OBTAINED</h2>

          Bachelor of Computer Applications (BCA) course grooms the students with 
          comprehensive inputs from the rapidly changing IT industry & enables them 
          to develop an all-round personality that would enable the students to take 
          up the challenges of the corporate world. The primary focus is to build the 
          strong foundation needed for careers in Computers, with Emphasis on emerging Computer Applications.

          <h2>HIGHER EDUCATIONAL PLAN</h2>

          The Master of Computer Application is also one of the most popular graduate 
          degrees. Students from a wide range of backgrounds apply to MCA programs to stay in IT Sector.

          <h2>CAREER OPTIONS</h2>

          A very good career option indeed. The successful completion of this course opens 
          up options such as MCA etc.IT being a sunshine sector there are no dearth of 
          opportunities in the same. The IT industry has a shortage of skilled resources. 
          Develop a strong analytical ability and excellent written and verbal communication 
          skills if you want to move ahead in this field. Excellent team working and 
          peer-to-peer interaction are a must to succeed in the IT industry. Given the 
          era of globalization, it is advisable to pick up a foreign language as well.
          </p>
          {/*           <AdditionalDiploma /> */}
        </div>
      </motion.section>
      <Footer />
    </>
  )
}
