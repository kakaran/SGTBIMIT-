import React, { useEffect } from "react";
import useFetch from "../../useFetch";
import { Carousel } from "react-responsive-carousel";
// import "./adminis.css";
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
        <div className="gradient-bg"></div>
        <h1 className="my-bold my-text-4 primary-blue text-center">GOVERNING BODY</h1>
        {isPending && <Loader />}
        {error && <div className="error">{error}</div>}
        <div className="p-2 shadow-lg theme-width">
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
                <div className="flex gap-10 max-2xl:block" key={adminis?.Index}>
                  <div className="min-w-[400px] max-w-[400px] max-2xl:grid max-2xl:place-content-center max-2xl:min-w-full max-2xl:max-w-full">
                    <img
                      src={`${import.meta.env.VITE_API_URL}/Administration/AdministrationImageDisplay/${adminis._id}`}
                      alt="cant load"
                      className="aspect-square rounded-xl max-2xl:!w-64"
                    />
                  </div>

                  <div className="flex flex-col gap-4">
                    <div className="grid max-2xl:place-content-center">
                      <div className="my-text-4 m-0 my-bold text-start max-lg:mt-5 orange_gradient inline">
                        {adminis?.name}
                      </div>
                    </div>
                    <div className="position my-bold text-start grid max-2xl:place-content-center text-xl text-[red]">
                      {adminis?.position}
                    </div>
                    <div className="grid max-2xl:place-content-center">
                      <div className="my-bold mt-5 text-lg text-start">WAHEGURU JI KA KHALSA, WAHEGURU JI KI FATEH!!</div>
                      <div className=" my-bold text-gray-700 text-start max-2xl:text-center">{adminis.shortNote}</div>
                    </div>
                    <p className="text-3xl max-lg:text-xl text-justify text-gray-700"> {adminis?.longNote} </p>
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
