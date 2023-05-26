import React from 'react'
import { motion } from 'framer-motion'
import { committees } from './constant'
import { Link } from 'react-router-dom'
import pdfIcon from '../../images/pdf-icon.png'

export default function Committees() {


  return (
    <section className="committees">
      <div className="committees-container" >
        {committees.map((committee, i) => (
          <motion.div viewport={{ once: true }}
            className="committee-item"
            key={committee.name}
            initial={{
              x: -100,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.2,
              delay: i * 0.1,
            }}
          >
            <div
              className="committee-img"
            >
              <Link
                to={`/committees/${committee.id}`}
                target='_blank'
              >
                <motion.img viewport={{ once: true }}
                  src={committee.image}
                  alt="cant load"
                  initial={{
                    scale: 0,
                    opacity: 0,
                  }}
                  whileInView={{
                    scale: 1,
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.2,
                    delay: i * 0.15,
                  }}

                  style={{
                    filter: "brightness(2)"
                  }}
                />
              </Link>
            </div>
            <Link
              to={`/committees/${committee.id}`}
              target='_blank'
            >
              <motion.div viewport={{ once: true }}
                initial={{
                  scale: 0,
                }}
                whileInView={{
                  scale: 1,
                }}
                transition={{
                  duration: 0.2,
                  delay: i * 0.15,
                }}
              >
                <img src={pdfIcon} alt="" />
                <span>View Data</span>
              </motion.div>
            </Link>
            <motion.div viewport={{ once: true }}
              className="committee-content"
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              transition={{
                duration: 0.2,
                delay: i * 0.15,
              }}
            >
              <h1>
                <Link
                  style={{
                    color: 'white',
                    fontFamily: "SF Pro Display-Bold"
                  }}
                  to={`/committees/${committee.id}`}
                  target='_blank'
                >
                  {committee.name}
                </Link>
              </h1>
              <p>
                {committee.detail}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
