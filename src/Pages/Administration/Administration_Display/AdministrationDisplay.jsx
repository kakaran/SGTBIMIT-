import React, { useEffect, useState } from "react";
import AdminMenu from "../../../Components/AdminMenu/AdminMenu";
import AdminHeader from "../../../Components/AdminHeader/AdminHeader";
import "../../Society/Society_Display/Society_Display.css";
import "../../Testimonials/Testimonials_Display/Testimonial_Display.css";
import axios from "axios";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const AdministrationDisplay = () => {
  const [render, setRender] = useState(0);
  const [getAdmini, setAdmini] = useState([]);
  const [Sort, setSort] = useState([]);
  const navigator = useNavigate("");

  useEffect(() => {
    const AdministrationsDataGet = async () => {
      try {
        const data = (
          await axios.get(
            `${import.meta.env.VITE_API_URL}/Administration/Administration_Display`
          )
        ).data;
        setAdmini(data);
        setRender(0);
      } catch (error) {
        console.log(error);
      }
    };
    AdministrationsDataGet();
    ImagesGet();
  }, [render]);

  const ImagesGet = (value) => {
    return (
      <img
        src={`${import.meta.env.VITE_API_URL}/Administration/AdministrationImageDisplay/${value}`}
        alt=""
        style={{ width: "400px", height: "450px" }}
      />
    );
  };

  const SocietyDelete = async (value) => {
    try {
      const _id = value;
      console.log(_id);
      await axios.post(
        `${import.meta.env.VITE_API_URL}/Administration/Administration_Delete/${_id}`
      );
      setRender(1);
    } catch (error) {
      console.log(error);
    }
  };

  const numAscending = [...getAdmini].sort((a, b) => a.Index - b.Index);
  return (
    <>
      <Helmet title="Display Administration" />
      <div className="SocietyDisplayContainer">
        <div className="SideBar">
          <AdminMenu />
        </div>
        <div className="Testimonial_DetailContainer">
          <AdminHeader />
          <div className="TesHeaderCard">
            <div className="TesDisplayHeading">
              <h1>Governing Body</h1>
            </div>
            <div className="TesDisplayCardContainer">
              {numAscending.map((value) => {
                return (
                  <div className="Society_Card" key={value.Index}>
                    {console.log(value.Index)}
                    <h3>
                      {value.name}
                      <span
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <BiEditAlt
                          style={{
                            paddingRight: "10px",
                            width: "32px",
                            color: "#adb5bd",
                          }}
                          onClick={() => {
                            navigator(
                              `/dashboard/admin/Administration_Update/${value._id}`
                            );
                          }}
                        />
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
                      <div className="AdministImageContainer">
                        {ImagesGet(value?._id)}
                      </div>
                      <div className="Society_Describe">
                        <h4>{value.position}</h4>
                        <h4>{value.shortNote}</h4>
                        <p>{value.longNote}</p>
                      </div>
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

export default AdministrationDisplay;
