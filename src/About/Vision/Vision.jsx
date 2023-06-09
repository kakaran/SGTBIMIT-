import React, { useEffect } from "react";
import { Header, Navbar, Footer } from "../../Components";
import "./Vision.css";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { routingAnimations } from "../../constants";

export default function Vision() {
  useEffect(() => {
    document.querySelector(".about-nav-link").classList.remove("dropdown-active-item")
  }, [])

  return (
    <>
      <Helmet title="SGTBIMIT | Vision" />
      <Header />
      <Navbar />
      <motion.div viewport='viewport'
        initial='initial'
        animate='animate'
        exit='exit'
        transition='transition'
        variants={routingAnimations}
        className="Vision_Container">
        <div className="grid grid-cols-2 mx-auto w-[min(1200px,100%)] max-md:grid-cols-1 px-5">
          <div>
            <h1 className="my-bold my-text-4 primary-blue">
              OUR VISION
            </h1>
            <p className="text-2xl text-justify leading-[2em] text-gray-800">
              To facilitate integrated, secure, competitive and scalable digital
              learning in the long run by preparing young professionals to match
              the Global Standards of institute-industry interface with
              entrepreneurial capabilities of accepting new challenges with a
              holistic concern for a better life, environment and society.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <img src="/images/vission.jpg" alt="" className=" w-full" />
          </div>
        </div>
        <div className="grid grid-cols-2 mx-auto w-[min(1200px,100%)] max-md:grid-cols-1 px-5">
          <div className="flex justify-center items-center">
            <img src="/images/mission.jpg" alt="" className=" w-full p-5" />
          </div>
          <div>
            <h1 className="my-bold my-text-4 primary-blue">
              OUR MISSION
            </h1>
            <ul className="text-2xl text-justify leading-[2em] text-gray-800">
              <li>
                To impart high quality educational content for development of
                perspective, talented and dynamic students as catalysts of
                social transformation.
              </li>
              <li>
                Sample item to promote progressive spirit, innovative ideas and
                entrepreneurial platform.
              </li>
              <li>
                Our endeavour is to provide all possible support to promote
                research & development activities.
              </li>
              <li>
                To create competitive and cooperative environment and prepare
                the students to meet national and global challenges.
              </li>
            </ul>
          </div>

        </div>
      </motion.div>
      <Footer />
    </>
  );
}
