import axios from "axios";
import React, { useState } from "react";
import AdminHeader from "../../../Components/AdminHeader/AdminHeader";
import AdminMenu from "../../../Components/AdminMenu/AdminMenu";
import "./Testimonials_ADD.css";
import { Helmet } from "react-helmet";

const Testimonials_ADD = () => {
  const [testiUpdate, setTestiUpdate] = useState({
    name: "",
    detail: "",
  });

  const Onchagetesdetail = (e) => {
    setTestiUpdate({ ...testiUpdate, [e.target.name]: e.target.value });
  };

  const AddTestimonial = async () => {
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/Testimonial/Testimonial_Add`, {
        testiUpdate,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Helmet title="Add Testimonial" />
      <div className="TestimonailAddContainer">
        <div className="SideBar">
          <AdminMenu />
        </div>
        <div className="TestimonialDetailContainer">
          <AdminHeader />
          <div className="TesHeadingFormContainer">
            <div className="Testimonial_Heading">
              <h1>Create a new Testimonial</h1>
            </div>
            <div className="TestimonialForm">
              <input
                type="text"
                name="name"
                id=""
                placeholder="Name"
                onChange={Onchagetesdetail}
              />
              <textarea
                name="detail"
                id=""
                cols="15"
                rows="5"
                placeholder="Message"
                onChange={Onchagetesdetail}
              ></textarea>
              <button
                className="button-19"
                onClick={() => {
                  AddTestimonial();
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials_ADD;
