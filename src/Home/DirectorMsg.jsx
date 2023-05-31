import React from 'react'
import { motion } from 'framer-motion'
import quote from '../images/quote.png'
import dir from '../images/director.jpg'

export default function DirectorMsg() {

  return (
    <section className="director-msg">
      <motion.h1 viewport={{ once: true }}
        className='director-heading my-bold my-text-4'
        initial={{
          x: 400
        }}
        whileInView={{
          x: 0
        }}
        transition={{
          duration: 0.5,
          type: 'spring'
        }}
      >
        DIRECTOR'S NOTE
      </motion.h1>
      <motion.div viewport={{ once: true }} className='director-container'
        initial={{
          x: -400
        }}
        whileInView={{
          x: 0
        }}
        transition={{
          duration: 0.5,
          type: 'spring'
        }}
      >
        <img src={quote} alt="" className="dir-quote" />
        <div className="director-img">
          <img src={dir} alt="cant load" />
        </div>
        <p className='dr-note text-justify'>
          “Those who walk on the path of truth shall be praised throughout the world”
          <br />
          <span className='my-bold text-center mt-4 block'>
            &nbsp; ~ Sri Guru Granth Sahib Ji &nbsp;
          </span>
          <br />
          We at Sri Guru Tegh Bahadur Institute of Management & Information Technology endeavor to follow Gurbani in letter and spirit. The management and staff of SGTBIMIT work on a mission and treat students with utmost love & compassion.
        </p>
        <div className="director-position">
          Prof. Dr. Navneet Kaur - Director, SGTBIMIT
        </div>

      </motion.div>
    </section>
  )
}
