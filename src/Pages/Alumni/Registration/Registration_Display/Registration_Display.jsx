import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminMenu from "../../../../Components/AdminMenu/AdminMenu";
import AdminHeader from "../../../../Components/AdminHeader/AdminHeader";
import "../../../Testimonials/Testimonials_Display/Testimonial_Display.css";
import { Card, Col, Row } from "antd";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { EditOutlined } from "@ant-design/icons";
import { Helmet } from "react-helmet";

const RegistrationDisplay = () => {
  const [getRegis, setRegis] = useState([]);
  const navigator = useNavigate("");
  const [render, setRender] = useState(0);


  useEffect(() => {
    const TestimonialsDataGet = async () => {
      try {
        const data = (
          await axios.get(
            `${process.env.REACT_APP_API_URL}/Registration/Registration_Display`
          )
        ).data;
        console.log(data);
        setRegis(data);
        setRender(0)
      } catch (error) {
        console.log(error);
      }
    };
    TestimonialsDataGet();
  }, [render]);

  const TestimonialDelete = async (value) => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/Registration/Registration_Delete/${value}`);
      setRender(1)
    } catch (error) {
      console.log(error);
    }
  };

  const detailStyle = {
    fontFamily: "'Abel', sans-serif",
  };
  console.log(getRegis);
  return (
    <>
      <Helmet title="Display Testimonial" />
      <div className="Testimonial_DisplayContainer">
        <div className="SideBar">
          <AdminMenu />
        </div>
        <div className="Testimonial_DetailContainer">
          <AdminHeader />
          <div className="TesHeaderCard">
            <div className="TesDisplayHeading">
              <h1>Registrations of the Alumnis</h1>
            </div>
            <div className="TesDisplayCardContainer">
              {getRegis.map((value, index) => {
                return (
                  <Row gutter={16}>
                    <Col span={8}>
                      <div className="TesDisplayCard">
                        <Card
                          title={value.Fname}
                          bordered={false}
                          extra={
                            <RiDeleteBin6Line
                              className="TestBin"
                              onClick={() => {
                                TestimonialDelete(value._id);
                              }}
                              style={{ color: "#d00000" }}
                            />
                          }
                          style={{ width: 300, marginTop: 16, detailStyle }}
                          actions={[
                            <EditOutlined
                              key="edit"
                              onClick={() => {
                                navigator(
                                  `/dashboard/admin/Registration_Update/${value._id}`
                                );
                              }}
                            />,
                          ]}
                        >
                        Last Name: {value.Lname}
                        Email: {value.Email}
                        Mobile Number: {value.MNumber}        
                        Address: {value.Address}
                        Adhaar Card No: {value.AdhaarNo}
                        Course: {value.course}
                        Year: {value.Year}
                        Employed: {value.employed}
                        Placement by SGTBIMIT: {value.placement}
                        Present Organization: {value.presentOrgani}
                        Current Designation: {value.CurrentDesignation}
                        </Card>
                      </div>
                    </Col>
                  </Row>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistrationDisplay;
