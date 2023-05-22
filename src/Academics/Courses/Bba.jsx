import React from 'react'
import './courses.css'
import AdditionalDiploma from './AdditionalDiploma'
import { Header, Navbar, Footer } from '../../Components'
import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion'
import { routingAnimations } from '../../constants'

export default function Bba() {
  return (
    <>
      <Helmet title="SGTBIMIT | BBA" />
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

          <img src={require("../../images/bba.jpg")} alt="cant load" />
          <h1>BACHELORS OF BUSINESS ADMINISTRATION</h1>
          <p>
            "According to Peter Drucker, leadership involves elevating an individual's vision to greater
            heights, improving their performance to exceed standard levels, and expanding their personality
            beyond its usual limitations."
            <br /><br />
            In 2008, SGTBIMIT launched the Department of Business Administration, which has since become
            renowned for producing outstanding graduates. Many of its alumni are now successful
            entrepreneurs and business leaders.
            <br /><br />
            Management is a prestigious profession that commands
            high social standing. With increasing demand for practitioners, researchers, and social
            scientists, management education is receiving greater attention. The BBA (G) program offered
            by the Department of Business Administration equips students with professional skills
            necessary for achieving success in the economy. Additionally, it enables students to understand,
            predict, and guide human behavior in organizations.
          </p>
          {/*           <AdditionalDiploma /> */}
        </div>
      </motion.section>
      <Footer />
    </>
  )
}
