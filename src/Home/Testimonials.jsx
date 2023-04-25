
import React from 'react'
import useFetch from '../useFetch'
import { Carousel } from 'react-responsive-carousel'
import Loader from '../Components/Loader'
import { motion } from 'framer-motion'
export default function Testimonials() {
    const { data: testimonials, isPending } = useFetch(`${process.env.REACT_APP_API_URL}/Testimonial/Testimonial_Display`)
    return (

        <section className="test-section">
            <motion.h1
                className='t-heading'
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
                WHAT STUDENTS SAY ABOUT US
            </motion.h1>
            {isPending && <Loader />}
            <motion.div className="test-carousel-container"
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
                {testimonials &&
                    <Carousel
                        swipeable={false}
                        showStatus={false}
                        showThumbs={false}
                    >
                        {testimonials.map((testimonial, i) => (
                            <div className="test-container" key={testimonial._id}>
                                <div className="test">
                                    <div className="card">
                                        <img src={require("../images/quote.png")} alt="" className="test-quote" />
                                        <motion.div 
                                        className="card-content"
                                        initial={{
                                            opacity: 0
                                          }}
                                          whileInView={{
                                            opacity: 1
                                          }}
                                          transition={{
                                            duration: 1,
                                          }}
                                        >
                                            <p>{testimonial.detail}</p>
                                            <div className="testi-name">
                                                <h1>{testimonial.name}</h1>
                                                <div className="batch">BCA Batch 2014</div>
                                            </div>
                                        </motion.div>
                                        <div className="testimonial-img">
                                            <motion.img 
                                            src={require("../images/sgtbimit.png")} 
                                            alt=""
                                            initial={{
                                                y: -400
                                              }}
                                              whileInView={{
                                                y: 0
                                              }}
                                              transition={{
                                                duration: 0.5,
                                                type: 'spring'
                                              }} 
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                }
            </motion.div>
        </section>
    )
}