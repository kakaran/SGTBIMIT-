import React, { useState } from 'react'
import './events.css'
import { Header, Navbar, Footer, Loader } from '../Components'
import nssImg2 from '../images/nss-img-2.png'
import { Carousel } from 'react-responsive-carousel'
import { BsFillFilterCircleFill } from 'react-icons/bs'
import useFetch from '../useFetch'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'
export default function Events() {


    const { id } = useParams()

    const API_URL = process.env.REACT_APP_API_URL

    const { data: events, isPending } = useFetch(`${API_URL}/Eventhandler/EventHandler_Single_Display/${id}`)

    const event = events ? events[0] : " "

    console.log(events ? event : '')

    return (
        <>
            <Helmet title={event.name} />
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
                            {event.images.map((image) => (
                                <div className="event-carousel-img">
                                    <img src={`${API_URL}/Eventhandler/EventHandler_Image_Display/${event._id}/${image._id}`} alt="cant load" />
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
                <section className="events-section-1">
                    <div className="events-header">
                        <button type='button'>Events</button>
                        <BsFillFilterCircleFill size="min(4rem, 5vw)" color='#005E93' />
                    </div>
                    {event.Years.map((year, i) => (
                        <div className="events-container">
                            <h1
                                style={{
                                    fontFamily: "SF Pro Display-Bold",
                                    fontSize: "min(3rem, 6vw)",
                                    marginTop: 0,
                                }}
                            > {year.year} </h1>
                            <Carousel           
                                showThumbs={false}
                                showIndicators={false}
                                showStatus={false}
                            >
                                <div className="event-grid">
                                    {year.Events.map(singleEvent => (
                                        singleEvent.Event_id.Images.map(image => (
                                            <div className="event-card">
                                                <img src={`${API_URL}/Event/Event_Image_Display/${singleEvent.Event_id._id}/${image._id}`} alt="cant load" />
                                                <h1> {singleEvent.Event_id.name} </h1>
                                                <p> {singleEvent.Event_id.detail}  </p>
                                            </div>
                                        ))
                                    ))}
                                </div>
                            </Carousel>
                        </div>
                    ))}
                </section>
            </section>}
            <Footer />
        </>
    )
}
