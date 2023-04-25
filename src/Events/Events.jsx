import React, { useState, useEffect } from "react";
import "./events.css";
import { Header, Navbar, Footer, Loader } from "../Components";
import nssImg2 from "../images/nss-img-2.png";
import { Carousel } from "react-responsive-carousel";
import { BsFillFilterCircleFill } from "react-icons/bs";
import useFetch from "../useFetch";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import axios from "axios";
export default function Events() {
  const { id } = useParams();
  const [events, setEvents] = useState();
  const [eventFilter, setEventFilter] = useState();

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
        // console.log(data);
        setEvents(data);
        setEventFilter(data?.Years[0]?.year);
      } catch (error) {
        console.log(error);
      }
    };
    EventDataGet();
  }, [id]);

  //   console.log(eventFilter);

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
      {/* {isPending && <Loader />} */}
      {events && (
        <section className="event-section">
          <div className="event-header">
            <div className="gradient" />
            <img
              src={`${API_URL}/Eventhandler/EventHandleR_Heder_Image/${events?._id}`}
              alt=""
            />
            <div className="event-header-title">
              <p>
                Home {">"} Societies {">"} {events?.name}
              </p>
              <h1> {events?.name} </h1>
            </div>
          </div>
          <div className="about-event-section">
            <div className="about-event">
              <h1>About {events?.name}</h1>
              <p>{events?.detail}</p>
            </div>
            <div className="about-event-carousel">
              <Carousel showThumbs={false} showIndicators={false} width="600px">
                {events.images.map((image) => (
                  <img
                    src={`${API_URL}/Eventhandler/EventHandler_Image_Display/${events?._id}/${image?._id}`}
                    alt="cant load"
                    className="event-carousel-img"
                  />
                ))}
              </Carousel>
            </div>
          </div>
          <section className="events-section-1">
            <div className="events-header">
              <button type="button">Events</button>
              <span>
                <BsFillFilterCircleFill size="min(4rem, 5vw)" color="#005E93" />
                {events.Years.map((value) =>{
                    return(
                        <>

                        </>
                    )
                })}
              </span>
            </div>
            {/* {event.Years.map((year, i) => (
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
                                {year.Events.map(singleEvent => (
                                    eventChunks.map(images => (
                                        <div className="event-grid">
                                            {images.map(image => (
                                                <div className="event-card">
                                                    <img src={`${API_URL}/Event/Event_Image_Display/${singleEvent.Event_id._id}/${image._id}`} alt="cant load" />
                                                    <h1> {singleEvent.Event_id.name} </h1>
                                                    <p> {singleEvent.Event_id.detail}  </p>
                                                </div>
                                            ))}
                                        </div>
                                    ))
                                ))}
                            </Carousel>
                        </div>
                    ))} */}
          </section>
        </section>
      )}
      <Footer />
    </>
  );
}
