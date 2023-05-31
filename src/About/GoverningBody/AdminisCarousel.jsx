import React, { useEffect } from "react";
import useFetch from "../../useFetch";
import { Carousel } from "react-responsive-carousel";
import "./adminis.css";
import { Header, Navbar, Footer, Loader } from '../../Components'
import { Helmet } from "react-helmet";
import { motion } from 'framer-motion'
import { routingAnimations } from "../../constants";
export default function AdminisCarousel() {

  const { data: adminisArray, isPending, error } = useFetch(`${import.meta.env.VITE_API_URL}/Administration/Administration_Display`)

  useEffect(() => {
    document
      .querySelector(".about-nav-link")
      .classList.remove("dropdown-active-item");
  }, []);

  const numAscending = adminisArray ? [...adminisArray].sort((a, b) => a.Index - b.Index) : adminisArray
  return (
    <>
      <Helmet title="SGTBIMIT | Governing Body" />
      <Header></Header>
      <Navbar></Navbar>
      <motion.section viewport='viewport'
        initial='initial'
        animate='animate'
        exit='exit'
        transition='transition'
        variants={routingAnimations}
        className="adminis-section"
      >
        <h1 className="my-bold my-text-4 primary-blue text-center">Governing Body</h1>
        {isPending && <Loader />}
        {error && <div className="error">{error}</div>}
        <div className="p-2 shadow-lg">
          <Carousel
            showThumbs={false}
            interval={4000}
            className="adminis-carousel"
            autoPlay={true}
            selectedItem={0}
            emulateTouch={false}
          >
            {
              numAscending?.map((adminis) => (
                <div className="adminis" key={adminis?.Index}>

                  <div className="flex flex-col items-start gap-4">
                    <div>

                      <div className="position my-bold text-start">
                        {adminis?.position}
                      </div>
                    </div>
                    <div className="short-note">
                      <div className="my-bold mt-5 text-lg text-start">WAHEGURU JI KA KHALSA, WAHEGURU JI KI FATEH!!</div>
                      <div className="my-bold text-gray-700 text-start">{adminis.shortNote}</div>
                    </div>
                    <div>
                      <img
                        src={`${import.meta.env.VITE_API_URL}/Administration/AdministrationImageDisplay/${adminis._id}`}
                        alt="cant load"
                        className="float-left max-md:float-none"
                      />
                      <p className="my-text-4 m-0 my-bold text-start">
                        {adminis?.name}
                      </p>
                      <p className="long-note leading-[2em] text-gray-800"> {adminis?.longNote} </p>
                    </div>

                  </div>

                </div>
              ))}
          </Carousel>
        </div>
      </motion.section>
      <Footer />
    </>
  );
}
