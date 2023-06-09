import React, { useEffect, useState } from "react";
import { Footer, Header, Loader, Navbar } from "../../Components";
import { motion } from "framer-motion";
import { routingAnimations } from "../../constants";
import styles from "./visit.module.css";
import axios from "axios";

const Visit = () => {
  const [visit, setVisit] = useState(null);

  const getVisitData = async () => {
    try {
      const Data = (await axios.get(`${import.meta.env.VITE_API_URL}/IndustrialVisits/IndustrialVisits_Display`)).data;
      console.log(Data);
      setVisit(Data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getVisitData();
  }, []);

  return (
    <>
      <Header />
      <Navbar />
      <motion.main
        viewport="viewport"
        initial="initial"
        animate="animate"
        exit="exit"
        transition="transition"
        variants={routingAnimations}
      >
        <div className="gradient-bg"></div>
        <section

          className="w-[min(1500px,98%)] mx-auto"
        >
          <div className="w-[min(1500px,98%)] mx-auto">
            <h1 className="my-bold my-text-4 primary-blue text-center uppercase">
              Industrial Visit
            </h1>
            <p className=" text-2xl text-justify text-gray-800">
              Industrial visit is a part of the college curriculum and holds a
              special place in the professional career of students. It is a
              standard process in engineering and MBA courses where students get
              insight into real-world problems. Students understand the internal
              working of an organization through an industrial visit. During the
              industrial visits, students get to learn how professionals perform
              at work and they implement certain industry-specific concepts such
              as benchmarking, quality analysis, just-in-time production, etc An
              industrial visit gives students a brief knowledge about what they
              are interested in, the students will get to know the working
              environment in the industries, their processing, how machines are
              working, interact with the workers, The industrial visit is
              considered one of the most tactical methods of teaching. It provides
              students with an opportunity to learn practically through
              interaction, working methods and employment practices. It gives
              exposure from an academic point of view.
            </p>
          </div>
          {/* <div>
                    <h1 className='my-bold max-md:text-3xl primary-blue m-0 text-5xl'>Companies Visited</h1>
                    <div className={`${styles.line} w-full h-1 primary-blue-bg-clr`}></div>
                    <div className={`${styles.container} px-10 py-20 shadow-2xl mx-auto`}>
                        <p className='primary-blue text-2xl text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut distinctio tempora natus eveniet rerum! Voluptatibus, odio magni. Ea, reiciendis reprehenderit voluptas quos delectus provident asperiores nostrum aperiam dicta quod, laborum odio eum nobis, perferendis veniam. Ut odit iusto unde, eius, vitae cumque, reiciendis inventore non autem sed aut debitis eum!</p>
                    </div>
                </div> */}
          <div>
            {!visit && <Loader />}
            {visit?.map((visit) => (
              <div key={visit._id}>
                <h1 className="my-bold blue_gradient m text-5xl">{visit.name}</h1>
                <div className={`w-full h-1 primary-bg-clr rounded-full`}></div>
                <div className="h-28" />
                <div className="flex">
                  <div className="z-10 w-full min-h-full grid">
                    <img
                      src={`${import.meta.env.VITE_API_URL
                        }/IndustrialVisits/IndustrialVisits_Image_Display/${visit._id
                        }`}
                      alt="cant load"
                      className="aspect-video w-[400px] rounded-lg shadow-lg"
                      style={{
                        transform: "translate(3rem,-30%)",
                      }}
                    />
                    <img
                      src={`${import.meta.env.VITE_API_URL
                        }/IndustrialVisits/IndustrialVisits_CompanyImg_Display/${visit._id
                        }`}
                      alt=""
                      className="aspect-square w-[200px] mt-auto"
                    />
                  </div>
                  <p className=" bg-[rgba(255,255,255,0.5)] z-0 p-16 rounded-lg text-gray-700 text-justify text-2xl flex items-center">
                    {visit.about}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </motion.main>
      <Footer />
    </>
  );
};
export default Visit;
