import React, { useState } from 'react'
import './events.css'
import { Header, Navbar, Footer, Loader } from '../Components'
import nssImg2 from '../images/nss-img-2.png'
import { Carousel } from 'react-responsive-carousel'
import { BsFillFilterCircleFill } from 'react-icons/bs'
import { walkathon } from './walkathon'
import useFetch from '../useFetch'
import { useParams } from 'react-router-dom'
export default function Events() {

    const { id } = useParams()

    const API_URL = process.env.REACT_APP_API_URL

    const { data: events, isPending } = useFetch(`${API_URL}/Eventhandler/EventHandler_Single_Display/${id}`)

    const event = events ? events[0] : " "

    console.log(events ? event : '')

    return (
        <>
            <Header />
            <Navbar />
            {isPending && <Loader />}
            {events && <section className='event-section'>
                <div className="event-header">
                    <div className='gradient' />
                    <img src={`${API_URL}/Eventhandler/EventHandleR_Heder_Image/${event._id}`} alt="" />
                    <div className="event-header-title">
                        <p>Home {">"} Societies {">"} {event.name}</p>
                        <h1> {event.name} </h1>
                    </div>
                </div>
                <div className="about-event-section">
                    <div className="about-event">
                        <h1>About {event.name}</h1>
                        <p>{event.detail}</p>
                    </div>
                    <div className="about-event-carousel">
                        <Carousel
                            showThumbs={false}
                            showIndicators={false}
                            width="600px"
                        >
                            {[...Array(3)].map(() => (
                                <div className="event-carousel-img">
                                    <img src={nssImg2} alt="cant load" />
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
                <section className="events-section-1">
                    <div className="events-header">
                        <button type='button'>Events</button>
                        <BsFillFilterCircleFill size="4rem" color='#005E93' />
                    </div>
                    <Carousel
                        showThumbs={false}
                        showIndicators={false}
                        showStatus={false}
                    >
                        {walkathon.map(walk => (
                            <div className="event-grid">
                                {walk.map(wal => (
                                    <div className="event-card">
                                        <img src={wal.image} alt="" />
                                        <h1> {wal.title} </h1>
                                        <p> {wal.detail} </p>
                                        {/* <div className="event-card-bottom">
                                            <div className="date-chip">
                                                {wal.date}
                                            </div>
                                            <div className="register-btn">
                                                <div>Register Now</div>
                                            </div>
                                        </div> */}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </Carousel>
                </section>
            </section>}
            <Footer />
        </>
    )
}
