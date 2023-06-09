import React, { useState, useEffect } from "react";
import "./alumnimeet.css";
import { Header, Navbar, Footer } from "../../Components";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { routingAnimations } from "../../constants";
import axios from "axios";
import cancel from '../../images/cancel.png'
import { Carousel } from "react-responsive-carousel";

const AlumniMeet = () => {
  const [carouselIndex, setCarouselIndex] = useState(null)
  const [aluminiEventData, setAluminiEventData] = useState([]);

  useEffect(() => {
    const AluminEvent = async () => {
      try {
        const Data = (
          await axios.get(
            `${import.meta.env.VITE_API_URL
            }/AluminiEvents/AluyminiEvent_Display`
          )
        ).data;
        console.log(Data);
        if (Data) {
          setAluminiEventData(Data.SearchData);
        }
      } catch (error) {
        console.log(error);
      }
    };
    AluminEvent();
  }, []);

  return (
    <>
      <Helmet title="SGTBIMIT | Alumni Meet" />
      <Header />
      <Navbar />
      <motion.section
        viewport="viewport"
        initial="initial"
        animate="animate"
        exit="exit"
        transition="transition"
        variants={routingAnimations}
        className="alumini-meet-section"
      >
        <div className="alumnimeet">
          <h1 className="primary-clr my-text-4 text-center">ALUMNI MEET</h1>
          <div className="rounded-2xl bg-[#D1E9FF] w-[90%] mx-auto">
            <h1
              className="primary-blue w-max"
              style={{ transform: "translate(-20%, -40%)" }}
            >
              <span className="text-[min(5rem,10vw)] my-bold">A</span>
              <span className="text-[min(3rem,6vw)] my-bold">bout us</span>
            </h1>
            <p className="px-10 pb-10 -mt-10 text-[24px]">
              The Alumni Association of Sri Guru Tegh Bahadur Institute of
              Management and Information Technology evolved to bridge the wide
              chasm existing between college and career life. It is committed to
              all youngsters who graduate and face challenges of the
              competitive, professional world to remain a part of their alma
              mater. The idea took shape and the formation of the Alumni
              Association turned into reality. The reputation of an educational
              institution lies within its students – Past and Present. Faculty
              and staff also play a vital role. The reputation grows when it
              keeps producing successful graduates continuously – intelligent,
              innovative and effective in their respective fields.
            </p>
          </div>
          <h3>Our Mission</h3>
          <ul>
            <li>To reunite the students with their alma mater.</li>

            <li>
              {" "}
              To build a bridge between college life and career life, so as to
              introduce present students to the professional world and to make
              them proactive to face the challenges that may emerge in their
              path.
            </li>

            <li>
              To provide job opportunities to fresh bachelors through references
              of professionals.
            </li>

            <li>
              To conduct orientation and training programs for students on
              various topics to enhance their skills.
            </li>

            <li>
              To create awareness among students about the scope of their
              subject in the professional world.
            </li>

            <li>
              To provide a platform for students to develop their qualities.
            </li>

            <li>
              To participate in social welfare activities for social
              accountability.
            </li>
          </ul>
          <h3> Plan of Action </h3>
          <ul>
            <li>
              Conducting training sessions on industry practices and
              professional approaches by industry professionals.
            </li>
            <li>
              Conducting personality development trainings, interview answering
              skills and confidence-building programs.
            </li>
            <li>
              Interacting with unemployed ex-students to find the probability of
              employment with the reference of professionals.
            </li>
            <li>
              Conducting social welfare activities such as blood donation,
              health awareness programs, plantation and cleanliness drives.
            </li>
            <li>Re-unions of ex-students.</li>
            <li>Felicitation of achievers.</li>
          </ul>
          <h3>Alumni Meets</h3>
          <div className="AluminiEventsContainer">
            {aluminiEventData?.map((value, i) => {
              return (
                <div className="AluminCardContainer" key={value._id} onClick={() => { setCarouselIndex(i) }}>
                  <h4>{value?.Year}</h4>
                  <img
                    src={`${import.meta.env.VITE_API_URL
                      }/AluminiEvents/AluminiEvenmai_Image_Display/${value?._id}`}
                    alt={value?.Name}
                  />
                  <p>{value?.Detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </motion.section>
      {aluminiEventData?.map((alumni, i) => {

        if (carouselIndex === i) return <motion.section viewport={{ once: true }}
          className="gallery-carousel-section"
          initial={{
            scale: 0,
          }}
          animate={{
            scale: 1,
          }}
        >
          <img src={cancel} className="carousel-close-btn" onClick={() => setCarouselIndex(null)} alt='' />
          <Carousel
            showThumbs={false}
          >
            {alumni.Images.map((image) => {
              return (
                <div className="gallery-carousel-container">
                  <div className="gallery-carousel-item h-[500px]">
                    <img src={`${import.meta.env.VITE_API_URL}/Alumni/AlumniEventImages_Display/${alumni?._id}/${image?._id}`} alt="cant load" />
                  </div>
                </div>
              )
            }
            )}
          </Carousel>
        </motion.section>
      }
      )
      }
      {/* <Footer /> */}
    </>
  );
};

export default AlumniMeet;
