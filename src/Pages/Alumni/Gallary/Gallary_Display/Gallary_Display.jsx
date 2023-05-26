import React, { useEffect, useState } from "react";
import "./Gallery_Display.css";
import AdminHeader from "../../../../Components/AdminHeader/AdminHeader";
import AdminMenu from "../../../../Components/AdminMenu/AdminMenu";
import axios from "axios";

const Gallary_Display = () => {
  const API_URL = import.meta.env.VITE_API_URL;
  const [aluminData, setAluminiData] = useState();
  const { aluminimglen, setAluminimglen } = useState();

  useEffect(() => {
    const alumDataGet = async () => {
      try {
        const data = (
          await axios.get(`${API_URL}/Alumini/gallery/aluminiDisplayImage`)
        ).data;
        console.log(data);
        if (data) {
          setAluminiData(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    alumDataGet();
  }, []);

  //   const aluminiimagelength = async (_id) => {
  //     try {
  //       const data = (
  //         await axios(`${API_URL}/Alumini/gallery/alumini_Images_length/${_id}`)
  //       ).data;
  //     //   console.log(data);
  //       for (let i = 0; i < data; i++) {
  //         return (
  //           <img
  //             src={`${API_URL}/Alumini/gallery/aluminiDisplayImages/${_id}/${i}`}
  //             alt=""
  //           />
  //         );
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  return (
    <>
      <div className="societyAddConatiner">
        <div className="SideBar">
          <AdminMenu />
        </div>
        <div className="SocietyDetailContainer">
          <AdminHeader />
          <div className="GalleryCardContainer">
            {aluminData?.map((value, index) => {
              return (
                <div className="AluminCard" key={index}>
                  <div className="image_Categories">
                    <img
                      src={`${API_URL}/Alumini/gallery/alumini_Simgle_Image/${value?._id}`}
                      alt=""
                    />
                    <h1>{value.category}</h1>
                  </div>
                  <div className="multiple_Images_scroller">
                    {/* {aluminiimagelength(value._id)} */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallary_Display;
