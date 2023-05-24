import React, { useState, useEffect } from "react";
import "./events.css";
import { Header, Navbar, Footer, Loader } from "../Components";
import { Carousel } from "react-responsive-carousel";
import { BsFillFilterCircleFill } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import axios from "axios";
import { motion, AnimatePresence } from 'framer-motion'
import { routingAnimations } from "../constants";
import _ from 'lodash'


export default function Events() {
  const { id } = useParams();
  const [events, setEvents] = useState();
  const [eventFilter, setEventFilter] = useState();
  const [eventYearController, setEventYearController] = useState(false);

  const API_URL = process.env.REACT_APP_API_URL;

  // const { data: events, isPending } = useFetch(`${API_URL}/Eventhandler/EventHandler_Single_Display/${id}`)

  useEffect(() => {
    const EventDataGet = async () => {
      try {
        const data = (
          await axios.get(
            `${API_URL}/Eventhandler/EventHandler_Single_Display/${id}`
          )
        ).data;
        console.log(data);
        setEvents(data);
        setEventFilter(data?.Years[0]?.year);
      } catch (error) {
        console.log(error);
      }
    };
    EventDataGet();
  }, [id]);

  console.log(eventFilter);

  // let i = 0
  // const count = 4
  // let eventChunks = []
  // events && (
  //     event.Years.forEach((e) => {
  //         e.Events.forEach((ee) => {
  //             ee.Event_id.images.forEach(() => {
  //                 let res = ee.Event_id.images.slice(i, i + count)
  //                 if (res.length === 0) return
  //                 eventChunks.push(res)
  //                 i = i + count
  //             })
  //         })
  //     })
  // )
  // console.log(eventChunks ? eventChunks : '')
  return (
    <>
      <Helmet title={events?.name} />
      <Header />
      <Navbar />
      <motion.section className="event-section"
        viewport='viewport'
        initial='initial'
        animate='animate'
        exit='exit'
        transition='transition'
        variants={routingAnimations}
      >
        {!events && <Loader />}
        {events && (
          <>
            <div className="event-header">
              <div className="gradient" />
              <img
                src={`${API_URL}/Eventhandler/EventHandleR_Heder_Image/${events?._id}`}
                alt=""
              />
              <div className="event-header-title">
                <p>
                  Home {">"} Societies {">"} {_.startCase(_.toLower(events?.name))}
                </p>
                <h1> {_.startCase(_.toLower(events?.name))} </h1>
              </div>
            </div>
            <div className={`about-event-section ${events?.images?.length ? "conditional-event-grid" : ""}`}>
              <div className="gradient-bg"></div>
              <div className="about-event">
                <h1 className='my-bold bg-clip-text text-transparent w-max' style={{ backgroundImage: "linear-gradient(to right, #f59e0b, #ea580c, #eab308)" }}>About {_.startCase(_.toLower(events?.name))}</h1>
                <p className="text-gray-800 leading-[1.5em]">{events?.detail}</p>
              </div>
              {events?.images?.length ?
                <div className="about-event-carousel">
                  <Carousel showThumbs={false} showIndicators={false} >
                    {events?.images?.map((image) => (
                      <img
                        src={`${API_URL}/Eventhandler/EventHandler_Image_Display/${events?._id}/${image?._id}`}
                        alt="cant load"
                        className="event-carousel-img"
                        key={image?._id}
                      />
                    ))}
                  </Carousel>
                </div> : ""
              }
            </div>
            <section className="events-section-1">
              <div className="events-header">
                <div className="EventFilterContainer">
                  <span className="EventFilterHeader">
                    <h4 type="button">Events</h4>
                    <BsFillFilterCircleFill
                      size="min(4rem, 5vw)"
                      color="#005E93"
                      cursor="pointer"
                      onClick={() => {
                        setEventYearController(!eventYearController);
                      }}
                    />
                  </span>
                  <AnimatePresence mode="wait">
                    {eventYearController && (
                      <motion.div viewport={{ once: true }}
                        className="FilterData"
                        initial={{
                          scale: 0,
                        }}
                        animate={{
                          scale: 1,
                        }}
                        exit={{
                          scale: 0,
                        }}

                        style={{
                          transformOrigin: 'top'
                        }}
                      >
                        {events.Years.map((value, i) => {
                          return (
                            <div className="EventsYear" key={`Years-${i}`}>
                              <h5
                                onClick={() => {
                                  setEventFilter(value.year);
                                  setEventYearController(!eventYearController);
                                }}
                                style={{ cursor: "pointer" }}
                              >
                                {value?.year}
                              </h5>
                            </div>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
              {events.Years.map((year, i) => {
                if (eventFilter === year?.year) {
                  return (
                    <div className="events-container" key={`Year-${i}`}>
                      {/* <h1
                style={{
                    fontFamily: "SF Pro Display-Bold",
                    fontSize: "min(3rem, 6vw)",
                    marginTop: 0,
                }}
            > {year.year} </h1> */}

                      <div className="EventScroller">
                        {year.Events.map((singleEvent, i) => {
                          return (
                            <div className="eventCardConatainer" key={`Event-${i}`}>
                              <div className="event-card">
                                <p>{year?.year}</p>
                                <img
                                  src={`${API_URL}/Event/Event_MainImage_Display/${singleEvent?.Event_id?._id}`}
                                  alt="cant load"
                                />
                                <h1> {singleEvent?.Event_id?.name} </h1>
                                <p> {singleEvent?.Event_id?.detail} </p>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  )
                }
              })}
            </section>
          </>
        )}
      </motion.section>
      <Footer />
    </>
  );
}
