import React, { useState } from "react";
import { Footer, Header, Navbar } from "../Components";
import { Image } from "antd";
import "./Infra.css";
import { useEffect } from "react";
import axios from "axios";

const InfraLife = () => {
  const [infraData, setInfraData] = useState([]);

  useEffect(() => {
    const InfraDataGet = async () => {
      try {
        const Data = (await axios.get(`${import.meta.env.VITE_API_URL}/Infrastructure/InfraLife_Data_Send`)).data;
        console.log(Data);
        setInfraData(Data)
      } catch (error) {
        console.log(error);
      }
    };
    InfraDataGet()
  }, []);

  return (
    <>
      <Header />
      <Navbar />
      <div className="gradient-bg" />
      <div className="InfraLifeContainer">
        <div className="grid place-content-center">
          <h1 className="blue_gradient my-bold my-text-4 uppercase">Campus Life</h1>
        </div>
        <p>
          <span className="my-bold">
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
          <Image.PreviewGroup
            preview={{
              onChange: (current, prev) =>
                console.log(`current index: ${current}, prev index: ${prev}`),
            }}
          >
            {infraData.map((value) => {
              return (<Image
                width={200}
                height={200}
                src={`${import.meta.env.VITE_API_URL}/Infrastructure/InfraLife_Images_Display/${value._id}`}
              />)
            })}

          </Image.PreviewGroup>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default InfraLife;
