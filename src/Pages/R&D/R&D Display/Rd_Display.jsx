import React, { useEffect, useState } from "react";
import AdminMenu from "../../../Components/AdminMenu/AdminMenu";
import AdminHeader from "../../../Components/AdminHeader/AdminHeader";
import "../../Society/Society_Display/Society_Display.css";
import axios from "axios";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const RDDisplay = () => {
  const [render, setRender] = useState(0);
  const [getSociety, setSociety] = useState([]);
  const navigator = useNavigate("");

  useEffect(() => {
    const TestimonialsDataGet = async () => {
      try {
        const data = (
          await axios.get(`${import.meta.env.VITE_API_URL}/Research_Development/Research_Development_Display`)
        ).data;
        setSociety(data);
        setRender(0);
      } catch (error) {
        console.log(error);
      }
    };
    TestimonialsDataGet();
    ImagesGet()
  }, [render]);

  const ImagesGet = (value) => {
    return (<img
      src={`${import.meta.env.VITE_API_URL}/Research&Development/Research&Development_Image_Display/${value}`}
      alt=""
    />)
  }

  const SocietyDelete = async (value) => {
    try {
      const _id = value;
      console.log(_id);
      await axios.post(`${import.meta.env.VITE_API_URL}/Research&Development/Research&Development_Delete/${_id}`);
      setRender(1);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Helmet title="Display R&D" />
      <div className="SocietyDisplayContainer">
        <div className="SideBar">
          <AdminMenu />
        </div>
        <div className="Testimonial_DetailContainer">
          <AdminHeader />
          <div className="TesHeaderCard">
            <div className="TesDisplayHeading">
              <h1>R&D Events</h1>
            </div>
            <div className="TesDisplayCardContainer">
              {getSociety.map((value) => {
                return (
                  <div className="Society_Card">
                    <h3>
                      {value.Date}
                      <span>
                        <BiEditAlt
                          style={{
                            paddingRight: "10px",
                            width: "32px",
                            color: "#adb5bd",
                          }}
                          onClick={() => {
                            navigator(`/dashboard/admin/Research&Development_Update/${value._id}`);
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
                      {ImagesGet(value?._id)}
                      <div className="Society_Describe">
                        <h4>{value.heading}</h4>
                        <p>Detail: {value.Detail}
                        Category: {value.category}
                        Heading: {value.heading}
                        Index: {value.index}
                        </p>
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

export default RDDisplay;
