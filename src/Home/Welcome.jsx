import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import gtb from '../images/gtbji.png'
import arrow from '../images/VectorskillsArrow.png'

export default function Welcome() {

  return (
    <section className="welcome"
    >
      <motion.div viewport={{ once: true }} className="welcome-img"
        initial={{
          scale: 0
        }}
        whileInView={{
          scale: 1
        }}
        transition={{
          duration: 0.5,
          type: 'spring'
        }}
      >
        <img src={gtb} alt="" />
      </motion.div>
      <div className='welcome-text'>
        <motion.h1 viewport={{ once: true }}
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
          Welcome to  <span className='my-bold bg-clip-text text-transparent' style={{ backgroundImage: "linear-gradient(to right, #f59e0b, #ea580c, #eab308)" }}>SGTBIMIT</span>
        </motion.h1>
        <motion.p viewport={{ once: true }}
          initial={{
            x: -400
          }}
          whileInView={{
            x: 0
          }}
          transition={{
            duration: 0.5,
            type: 'spring'
          }}>
          SGTBIMIT ascertains, preserves and disseminates knowledge. Since the establishment of SGTBIMIT in 2008, it has aimed to promote excellence in professional education and inspire research and extension work in the emerging areas of higher education in Management, Banking, Insurance and Information Technology. "A" degree level institute, approved by Directorate of Higher Education (Govt of NCT of Delhi) certified by ISO 9001:2015 and affiliated to Guru Gobind Singh Indraprastha University, Delhi. Located in the heart of the city, adjoining Gurudwara Nanak Piao, hardly 1 km away from North Campus (DU) and Model town Metro Station. Ever since its inception, SGTBIMIT has consistently shaped students who have outshined in academics and professional endeavors.

        </motion.p>
        {/* <motion.button viewport={{ once: true }}
          className="develop-skills-btn"
          type="button"
          initial={{
            scale: 0.5
          }}
          whileInView={{
            scale: 1
          }}
          transition={{
            duration: 0.5,
            type: 'spring'
          }}
        >

          <Link to="/skills" className="skills-text">
            Develop your skills with SGTBIMIT
          </Link>
          <img src={arrow} alt="cant load" className="skill-arrow" />

        </motion.button> */}
      </div>
    </section>

  )
}
