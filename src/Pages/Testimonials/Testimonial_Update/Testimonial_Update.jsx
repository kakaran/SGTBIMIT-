import React, { useEffect, useState } from "react";
import AdminHeader from "../../../Components/AdminHeader/AdminHeader";
import AdminMenu from "../../../Components/AdminMenu/AdminMenu";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet";

const Testimonial_Update = () => {
  const [SingleData, setSingleData] = useState({
    name: "",
    detail: "",
  });

  const { id } = useParams();

  useEffect(() => {
    const TestSingleData = async () => {
      try {
        const data = (
          await axios.get(
            `${process.env.REACT_APP_API_URL}/Testimonial/single_Testimonial_Display`,
            { id }
          )
        ).data;
        setSingleData({
          name: data?.source?.name,
          detail: data?.source?.detail,
        });
      } catch (error) {
        console.log(error);
      }
    };
    TestSingleData();
  }, [id]);

  const UpdateTestimonial = async (e) => {
    e.preventDefault();
    try {
      const data = (
        await axios.post(
          `${process.env.REACT_APP_API_URL}/Testimonial/Testimonial_Update/${id}`,
          { SingleData }
        )
      ).data;
    } catch (error) {
      console.log(error);
    }
  };

  const Onchagetesdetail = (e) => {
    setSingleData((SingleData) => ({
      ...SingleData,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <Helmet title="Update Testimonial" />
      <div className="TestimonialUpdateContainer" style={{ display: "flex" }}>
        <div className="SideBar">
          <AdminMenu />
        </div>
        <div className="TestimonialDetailContainer">
          <AdminHeader />
          <div className="TesHeadingFormContainer">
            <div className="Testimonial_Heading">
              <h1>Update Testimonial</h1>
            </div>
            <div className="TestimonialForm">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                value={SingleData.name}
                onChange={Onchagetesdetail}
              />
              <textarea
                name="detail"
                id="detail"
                cols="15"
                rows="5"
                placeholder="Message"
                value={SingleData.detail}
                onChange={Onchagetesdetail}
              ></textarea>
              <button className="button-19" onClick={UpdateTestimonial}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial_Update;
