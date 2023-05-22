import React, { useEffect, useState } from "react";
import AdminHeader from "../../../../Components/AdminHeader/AdminHeader";
import AdminMenu from "../../../../Components/AdminMenu/AdminMenu";
import axios from "axios";
import "../../../Society/Society_Display/Society_Display.css";
import "../../../Faculty/Faculty_Display/FacultyDisplay.css"
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { Card } from "antd";
import { Helmet } from "react-helmet";
const { Meta } = Card;

const StarsDisplay = () => {
  const [render, setRender] = useState(0);
  const [getStars, setStars] = useState([]);
//   const navigator = useNavigate("");

  useEffect(() => {
    const TestimonialsDataGet = async () => {
      try {
        const data = (
          await axios.get(`${process.env.REACT_APP_API_URL}/PlacementFeature/PlacementFeature_Display`)
        ).data;
        setStars(data);
        setRender(0);
      } catch (error) {
        console.log(error);
      }
    };
    TestimonialsDataGet();
    ImagesGet();
  }, [render]);

  const ImagesGet = (value) => {
    return (
      <img src={`${process.env.REACT_APP_API_URL}/PlacementFeature/Placementfeature_Image_Display/${value}`} alt=""
        style={{ height: "300px", borderBottom: "1px solid #f0f0f0", paddingBottom: "5px" }}
      />
    );
  };

  const PlacementDelete = async (value) => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/PlacementFeature/PlacementFeature_Delete/${value}`);
      setRender(1);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Helmet title="Display Placement" />
      <div className="SocietyDisplayContainer">
        <div className="SideBar">
          <AdminMenu />
        </div>
        <div className="Testimonial_DetailContainer">
          <AdminHeader />
          <div className="TesHeaderCard">
            <div className="TesDisplayHeading">
              <h1>Featured Stars</h1>
            </div>
            <div className="FacultyCardContainer">
              {getStars.map((value) => {
                return (
                  <div className="FacultyCard">
                    <Card hoverable style={{width: 240,}} cover={ImagesGet(value?._id)}>
                      <div className="FacultyCardtitle">
                        <Meta title={value?.Name} bordered={false} style={{ padding: "10px" }} />
                        <Meta title={value?.Course} />
                      </div>
                      <span className="FacultyCardController">
                        {/* <BiEditAlt
                          style={{
                            paddingRight: "10px",
                            borderRight: "1px solid #f0f0f0",
                            width: "35px",
                            fontSize: "20px",
                            color: "#adb5bd",
                          }}
                          onClick={() => {
                            navigator(`/dashboard/admin/Placement_Update/${value._id}`);
                          }}
                        /> */}
                        <RiDeleteBin6Line
                          className="TestBin"
                          onClick={() => {
                            PlacementDelete(value._id);
                          }}
                          style={{ color: "#d00000" }}
                        />
                      </span>
                    </Card>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StarsDisplay;
