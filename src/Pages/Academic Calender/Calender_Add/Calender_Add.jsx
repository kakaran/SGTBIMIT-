import axios from "axios";
import React, { useState } from "react";
import AdminHeader from "../../../Components/AdminHeader/AdminHeader";
import AdminMenu from "../../../Components/AdminMenu/AdminMenu";
import "../../Testimonials/Testimonials_ADD/Testimonials_ADD.css";
import { Helmet } from 'react-helmet'

const CalenderAdd = () => {
  const [calenderUpdate, setCalenderUpdate] = useState({
    Date: "",
    Event: "",
  });

  const Onchagetesdetail = (e) => {
    setCalenderUpdate({ ...calenderUpdate, [e.target.name]: e.target.value });
  };

  const CalenderAdd = async () => {
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/Calendar/CalendarAdd`, {
        calenderUpdate,
      });
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
                onChange={Onchagetesdetail}
              />
              <input
                type="text"
                name="Event"
                id=""
                placeholder="Event"
                onChange={Onchagetesdetail}
              />
              <button
                className="button-19"
                onClick={() => {
                  CalenderAdd();
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

export default CalenderAdd;
