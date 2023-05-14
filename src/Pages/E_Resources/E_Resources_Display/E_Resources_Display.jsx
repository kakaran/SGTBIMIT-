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

const EResourcesDisplay = () => {
  const [getEresources, setEresources] = useState([]);
  const navigator = useNavigate("");
  const [render, setRender] = useState(0);


  useEffect(() => {
    const TestimonialsDataGet = async () => {
      try {
        const data = (
          await axios.get(
            `${process.env.REACT_APP_API_URL}/E_Resources/EResources_Display`
          )
        ).data;
        console.log(data);
        setEresources(data);
        setRender(0)
      } catch (error) {
        console.log(error);
      }
    };
    TestimonialsDataGet();
  }, [render]);

  const EresourcesDelete = async (value) => {
    try {
      const _id = value;
      await axios.post(`${process.env.REACT_APP_API_URL}/E_Resources/EResources_Delete`, {
        _id,
      });
      setRender(1)
    } catch (error) {
      console.log(error);
    }
  };

  const detailStyle = {
    fontFamily: "'Abel', sans-serif",
  };
  console.log(getEresources);
  return (
    <>
      <Helmet title="Display E-Resources" />
      <div className="Testimonial_DisplayContainer">
        <div className="SideBar">
          <AdminMenu />
        </div>
        <div className="Testimonial_DetailContainer">
          <AdminHeader />
          <div className="TesHeaderCard">
            <div className="TesDisplayHeading">
              <h1>E-Resources</h1>
            </div>
            <div className="TesDisplayCardContainer">
              {getEresources.map((value, index) => {
                return (
                  <Row gutter={16}>
                    <Col span={8}>
                      <div className="TesDisplayCard">
                        <Card
                          title={value.name}
                          bordered={false}
                          extra={
                            <RiDeleteBin6Line
                              className="TestBin"
                              onClick={() => {
                                EresourcesDelete(value._id);
                              }}
                              style={{ color: "#d00000" }}
                            />
                          }
                          style={{ width: 400, marginTop: 16, detailStyle }}
                          actions={[
                            <EditOutlined
                              key="edit"
                              onClick={() => {
                                navigator(
                                  `/dashboard/admin/EResources_Update/${value._id}`
                                );
                              }}
                            />,
                          ]}
                        >
                          {value.url}
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

export default EResourcesDisplay;
