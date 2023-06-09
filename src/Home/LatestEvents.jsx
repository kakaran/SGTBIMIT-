import React from 'react'
import './home.css'
import { motion } from 'framer-motion'
import '../Events/events.css'

export default function LatestEvents() {
    return (
        <section className='test-section'>
            <motion.h1 viewport={{ once: true }}
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
                LATEST EVENTS
            </motion.h1>
            {/* eventcard css on home.css */}
            <div className="eventcard">
            <div className="events-container">
                <div className="EventScroller">
                    <div className="eventCardConatainer">
                        <div className="event-card">
                            <p>YEAR of the event</p>
                            <img
                                src=""
                                alt="image of the event"
                            />
                            <h1>event name</h1>
                            <p>event detail</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>
    )
}
