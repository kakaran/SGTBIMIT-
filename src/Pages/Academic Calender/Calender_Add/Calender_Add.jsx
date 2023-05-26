import axios from "axios";
import React, { useState } from "react";
import AdminHeader from "../../../Components/AdminHeader/AdminHeader";
import AdminMenu from "../../../Components/AdminMenu/AdminMenu";
import "../../Testimonials/Testimonials_ADD/Testimonials_ADD.css";
import { Helmet } from 'react-helmet'

const CalenderAdd = () => {

  const [Date, setdate] = useState("");
  const [Event, setevent] = useState("");

  // const Onchagetesdetail = (e) => {
  //   setCalenderUpdate({ ...calenderUpdate, [e.target.name]: e.target.value });
  // };

  const data = { Date, Event };

  const CalenderAdd = async () => {
    try {
      const add = await axios.post(`${import.meta.env.VITE_API_URL}/Calendar/CalendarAdd`, data);
      console.log(add);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Helmet title="Add Calendar" />
      <div className="TestimonailAddContainer">
        <div className="SideBar">
          <AdminMenu />
        </div>
        <div className="TestimonialDetailContainer">
          <AdminHeader />
          <div className="TesHeadingFormContainer">
            <div className="Testimonial_Heading">
              <h1>Add a new Academic Detail</h1>
            </div>
            <div className="TestimonialForm">
              <input
                type="text"
                name="Date"
                id=""
                placeholder="Date"
                onChange={(e) => setdate(e.target.value)}
              />
              <input
                type="text"
                name="Event"
                id=""
                placeholder="Event"
                onChange={(e) => setevent(e.target.value)}
              />
              <button
                className="button-19"
                onClick={CalenderAdd}
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

export default CalenderAdd;