import React, { useState } from "react";
import { Footer, Header, Navbar } from "../Components";
/* import { Image } from "antd"; */
import "./Infra.css";
import { useEffect } from "react";
import axios from "axios";
import { Carousel } from "antd";
import { motion } from 'framer-motion'
import { routingAnimations } from "../constants";

const InfraLife = () => {
  const [infraData, setInfraData] = useState([]);

  useEffect(() => {
    const InfraDataGet = async () => {
      try {
        const Data = (
          await axios.get(
            `${import.meta.env.VITE_API_URL}/Infrastructure/InfraLife_Data_Send`
          )
        ).data;
        console.log(Data);
        setInfraData(Data);
      } catch (error) {
        console.log(error);
      }
    };
    InfraDataGet();
  }, []);
  return (
    <>
      <Header />
      <Navbar />
      <motion.section
        initial="initial"
        animate="animate"
        exit="exit"
        transition="transition"
        variants={routingAnimations}>
        <div className="gradient-bg"></div>
        <section className="InfraLifeContainer">
          <div className="flex justify-center">
            <h1 className="my-bold blue_gradient">Infra Life</h1>
          </div>
          <p>
            <span style={{ fontWeight: "bold" }}>
              Life at SGTBIMIT: Fostering Excellence and Holistic Development
            </span>
            <br />
            <br />
            SGTBIMIT offers a student-centric learning environment, promoting
            analytical and problem-solving skills through engaging tutorials. The
            institute's entrepreneurship-oriented teaching methodology, along with
            workshops, encourages innovation. With highly educated faculty and
            hi-tech, air-conditioned classrooms equipped with audio-visual aids,
            SGTBIMIT provides a seamless foundation for professional success. The
            Wi-Fi campus with high-speed internet ensures connectivity,
            complemented by a digitized library housing extensive resources.
            Excellent sports facilities, separate common rooms for boys and girls,
            and a multi-cuisine cafeteria enhance student life. The institute
            organizes a range of curricular and co-curricular events, including
            guest lectures, seminars, and motivational programs. SGTBIMIT
            prioritizes student well-being with anti-ragging, grievance, and
            sexual harassment cells.
          </p>
          <video
            src="College Tour.mp4"
            controls
            poster="videoposter.jpg"
            width="65%"
            height="60%"
            muted
          ></video>
          <div className="InfraLifeImageContainer">
            <Carousel autoplay>
              {infraData.map((value) => {
                return (
                  <img
                    src={`${import.meta.env.VITE_API_URL
                      }/Infrastructure/InfraLife_Images_Display/${value._id}`}
                    alt=""
                    width="1000px"
                    height="800px"
                  />
                );
              })}
            </Carousel>
          </div>
        </section>
      </motion.section>
      <Footer />
    </>
  );
};

export default InfraLife;
