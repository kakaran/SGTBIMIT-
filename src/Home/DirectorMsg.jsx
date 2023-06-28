import React from 'react'
import { motion } from 'framer-motion'

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
        <img src="/images/quote.png" alt="" className="dir-quote" />
        <div className="director-position">
          <b>Prof. Dr. Navneet Kaur - Director, SGTBIMIT</b>
        </div>
        <div className="director-img">
          <img src="/images/director.jpg" alt="cant load" />
        </div>
        <p className='dr-note text-justify'>
          “Those who walk on the path of truth shall be praised throughout the world”
          <br />
          <span className='my-bold text-center mt-4 block'>
            &nbsp; ~ Sri Guru Granth Sahib Ji &nbsp;
          </span>
          <br />
          We at Sri Guru Tegh Bahadur Institute of Management & Information Technology endeavor to follow Gurbani in letter and spirit. The management and staff of SGTBIMIT work on a mission and treat students with utmost love & compassion.SGTBIMIT started in the year 2009 with a modest strength and in the next couple of years, it has crossed the 1500 mark. At present, it has emerged as a premier institution that stands above most of the institutes of Guru Gobind Singh Indraprastha University.We are happy to have a qualified, dedicated, innovative, and hard-working faculty as well as administrative staff.
        </p>

      </motion.div>
    </section>
  )
}
