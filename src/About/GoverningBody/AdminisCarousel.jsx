import React, { useEffect } from "react";
import useFetch from "../../useFetch";
import { Carousel } from "react-responsive-carousel";
import "./adminis.css";
import { Header, Navbar, Footer, Loader } from '../../Components'
import { Helmet } from "react-helmet";
import { motion } from 'framer-motion'
export default function AdminisCarousel() {

  const { data: adminisArray, isPending, error } = useFetch(`${process.env.REACT_APP_API_URL}/Administration/Administration_Display`)

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
      <motion.section
        initial={{
          x: "-100vw",
        }}
        animate={{
          x: 0,
        }}
        exit={{
          x: '100vw',
        }}
        transition={{
          duration: .25,
        }}
        className="adminis-section">
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
                  src={`${process.env.REACT_APP_API_URL}/Administration/AdministrationImageDisplay/${adminis._id}`}
                  alt="cant load"
                />
                <h2 className="adminis-heading">
                  {adminis?.name}
                  <strong className="position"> {adminis?.position}</strong>
                </h2>
                <strong className="short-note">
                  WAHEGURU JI KA KHALSA, WAHEGURU JI KI FATEH!!
                  <strong>{adminis.shortNote}</strong>
                </strong>
                <p className="long-note"> {adminis?.longNote} </p>
              </div>
            ))}
        </Carousel>
      </motion.section>
      <Footer />
    </>
  );
}
