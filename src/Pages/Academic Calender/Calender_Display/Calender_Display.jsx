import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminMenu from "../../../Components/AdminMenu/AdminMenu";
import AdminHeader from "../../../Components/AdminHeader/AdminHeader";
import "../../Testimonials/Testimonials_Display/Testimonial_Display.css";
import { Card, Col, Row } from "antd";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { EditOutlined } from "@ant-design/icons";
import { Helmet } from "react-helmet";

const CalenderDisplay = () => {
  const [getCalender, setCalender] = useState([]);
  const navigator = useNavigate("");
  const [render, setRender] = useState(0);


  useEffect(() => {
    const TestimonialsDataGet = async () => {
      try {
        const data = (
          await axios.get(
            `${import.meta.env.VITE_API_URL}/Calendar/CalendarDisplay`
          )
        ).data;
        console.log(data);
        setCalender(data);
        setRender(0)
      } catch (error) {
        console.log(error);
      }
    };
    TestimonialsDataGet();
  }, [render]);

  const CalenderDelete = async (value) => {
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/Calendar/CalendarDelete/${value}`);
      setRender(1)
    } catch (error) {
      console.log(error);
    }
  };

  const detailStyle = {
    fontFamily: "'Abel', sans-serif",
  };
  console.log(getCalender);
  return (
    <>
      <Helmet title="Display Calendar" />
      <div className="Testimonial_DisplayContainer">
        <div className="SideBar">
          <AdminMenu />
        </div>
        <div className="Testimonial_DetailContainer">
          <AdminHeader />
          <div className="TesHeaderCard">
            <div className="TesDisplayHeading">
              <h1>Academic Calender</h1>
            </div>
            <div className="TesDisplayCardContainer">
              {getCalender.map((value, index) => {
                return (
                  <Row gutter={16}>
                    <Col span={8}>
                      <div className="TesDisplayCard">
                        <Card
                          title={value.Date}
                          bordered={false}
                          extra={
                            <RiDeleteBin6Line
                              className="TestBin"
                              onClick={() => {
                                CalenderDelete(value._id);
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
                                  `/dashboard/admin/Calender_Update/${value._id}`
                                );
                              }}
                            />,
                          ]}
                        >
                          {value.Event}
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

export default CalenderDisplay;