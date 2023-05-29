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
        {isPending && <Loader />}
        {error && <div className="error">{error}</div>}
        <Carousel
          showThumbs={false}
          interval={4000}
          className="adminis-carousel"
          autoPlay={true}
          selectedItem={0}
        >
          {
            numAscending?.map((adminis) => (
              <div className="adminis" key={adminis?.Index}>

                <img
                  src={`${import.meta.env.VITE_API_URL}/Administration/AdministrationImageDisplay/${adminis._id}`}
                  alt="cant load"
                />
                <h2 className="adminis-heading m-0 my-bold">
                  {adminis?.name}
                </h2>
                <div className="position my-bold"> {adminis?.position}</div>
                <div className="short-note">
                  <div className="my-bold mt-5">WAHEGURU JI KA KHALSA, WAHEGURU JI KI FATEH!!</div>
                  <div>{adminis.shortNote}</div>
                </div>
                <p className="long-note leading-[2em] text-gray-800"> {adminis?.longNote} </p>
              </div>
            ))}
        </Carousel>
      </motion.section>
      <Footer />
    </>
  );
}
