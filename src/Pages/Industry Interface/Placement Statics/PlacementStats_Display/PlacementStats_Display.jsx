import React, { useEffect, useState } from "react";
import AdminMenu from "../../../../Components/AdminMenu/AdminMenu";
import AdminHeader from "../../../../Components/AdminHeader/AdminHeader";
import "../../../Society/Society_Display/Society_Display.css";
import "../../../Testimonials/Testimonials_Display/Testimonial_Display.css";
import axios from "axios";
import { RiDeleteBin6Line } from "react-icons/ri";
//import { BiEditAlt } from "react-icons/bi";
//import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const PStatsDisplay = () => {

  const [render, setRender] = useState(0);
  const [Pstats, setPstats] = useState([]);

  useEffect(() => {
    const AdministrationsDataGet = async () => {
      try {
        const data = (await axios.get(`${import.meta.env.VITE_API_URL}/PlacementStatics/placement_Display`)
        ).data.AllData;
        console.log(data);
        setPstats(data);
        setRender(0);
      } catch (error) {
        console.log(error);
      }
    };
    AdministrationsDataGet();
  }, [render]);

  const SocietyDelete = async (value) => {
    try {
      const _id = value;
      console.log(_id);
      await axios.post(`${import.meta.env.VITE_API_URL}/PlacementStatics/Placement_Year_Delete/${_id}`);
      setRender(1);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Helmet title="Display Placement Stats" />
      <div className="SocietyDisplayContainer">
        <div className="SideBar">
          <AdminMenu />
        </div>
        <div className="Testimonial_DetailContainer">
          <AdminHeader />
          <div className="TesHeaderCard">
            <div className="TesDisplayHeading">
              <h1>Placement Statistics</h1>
            </div>
            <div className="TesDisplayCardContainer">
              {Pstats?.map((value, index) => {
                return (
                  <div className="Society_Card" key={index}>
                    <h3>
                      {value.Year}
                      <span
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <RiDeleteBin6Line
                          className="TestBin"
                          onClick={() => {
                            SocietyDelete(value._id);
                          }}
                          style={{ color: "#d00000" }}
                        />
                      </span>
                    </h3>
                    <div className="Society_Card_ImageDescription">
                      {value.Course?.map((value, index) => {
                        return (
                          <div className="Society_Describe" key={index}>
                            <h4>Name: {value.Name}</h4>
                            <h4>Eligible Students: {value.Eligible}</h4>
                            <p>No. of Offers: {value.Offers}</p>
                          </div>
                        );
                      })
                      }
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PStatsDisplay;
