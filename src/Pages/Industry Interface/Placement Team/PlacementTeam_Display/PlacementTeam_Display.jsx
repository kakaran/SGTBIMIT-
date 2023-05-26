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

const PTeamDisplay = () => {
  const [render, setRender] = useState(0);
  const [getFaculty, setFaculty] = useState([]);
  const navigator = useNavigate("");

  useEffect(() => {
    const TestimonialsDataGet = async () => {
      try {
        const data = (
          await axios.get(`${import.meta.env.VITE_API_URL}/PlacementTeam/Placement_Team_Display`)
        ).data;
        setFaculty(data);
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
      <img
        src={`${import.meta.env.VITE_API_URL}/PlacementTeam/Placement_Image_Display/${value}`}
        alt=""
        style={{ height: "300px", borderBottom: "1px solid #f0f0f0", paddingBottom: "5px" }}
      />
    );
  };

  const FacultyDelete = async (value) => {
    try {
      const _id = value;
      // console.log(_id);
      await axios.delete(`${import.meta.env.VITE_API_URL}/PlacementTeam/Placement_Team_Delete/${_id}`);
      setRender(1);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Helmet title="Display Faculty" />
      <div className="SocietyDisplayContainer">
        <div className="SideBar">
          <AdminMenu />
        </div>
        <div className="Testimonial_DetailContainer">
          <AdminHeader />
          <div className="TesHeaderCard">
            <div className="TesDisplayHeading">
              <h1>Placement Team</h1>
            </div>
            <div className="FacultyCardContainer">
              {getFaculty.map((value) => {
                return (
                  <div className="FacultyCard">
                    <Card
                      hoverable
                      style={{
                        width: 240,
                      }}
                      cover={
                        ImagesGet(value?._id)
                      }
                    >
                      <div className="FacultyCardtitle" >
                        <Meta title={value?.Name} bordered={false} style={{ padding: "10px" }} />
                        <Meta title={value?.linkdin} />
                        <Meta
                          title={value?.Categories}
                        />
                      </div>
                      <span className="FacultyCardController">
                        <RiDeleteBin6Line
                          className="TestBin"
                          onClick={() => {
                            FacultyDelete(value._id);
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

export default PTeamDisplay;
