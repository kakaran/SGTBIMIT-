import React, { useEffect, useState } from 'react'
import './home.css'
import { motion } from 'framer-motion'
import '../Events/events.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function LatestEvents() {
    const navigate = useNavigate();
    const [data, setData] = useState([]);

    const date = (new Date()).getFullYear();
    console.log(date);

    const fetchData = async () => {
        const data = await axios.get(`${import.meta.env.VITE_API_URL}/Event/All_Event_Display`)
        setData(data.data.filter((event) => (event.year == date)))
    }
    console.log(data);

    useEffect(() => {
        fetchData()
    }, [])

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
                        {data.map((event) => (
                            <div className="eventCardConatainer">
                                <div className="event-card" onClick={() => { navigate(`/event/${event._id}`) }}>

                                    <p> {event.year} </p>
                                    <img
                                        src={`${import.meta.env.VITE_API_URL}/Event/Event_MainImage_Display/${event._id}`}
                                        alt="image of the event"
                                    />
                                    <h1> {event.name} </h1>
                                    <p> {event.detail} </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
