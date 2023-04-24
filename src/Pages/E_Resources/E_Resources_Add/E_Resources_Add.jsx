import axios from "axios";
import React, { useState } from "react";
import AdminHeader from "../../../Components/AdminHeader/AdminHeader";
import AdminMenu from "../../../Components/AdminMenu/AdminMenu";
import "../../Testimonials/Testimonials_ADD/Testimonials_ADD.css";
import { Helmet } from "react-helmet";

const EResourcesAdd = () => {
  const [eresourcesUpdate, setEResoursesUpdate] = useState({
    name: "",
    url: "",
  });

  const Onchagetesdetail = (e) => {
    setEResoursesUpdate({ ...eresourcesUpdate, [e.target.name]: e.target.value });
  };

  const EResourcesAdd = async () => {
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/E_Resources/EResources_Add`, {
        eresourcesUpdate,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Helmet title="Add E-Resources" />
      <div className="TestimonailAddContainer">
        <div className="SideBar">
          <AdminMenu />
        </div>
        <div className="TestimonialDetailContainer">
          <AdminHeader />
          <div className="TesHeadingFormContainer">
            <div className="Testimonial_Heading">
              <h1>Add a new E-Resource</h1>
            </div>
            <div className="TestimonialForm">
              <input
                type="text"
                name="name"
                id=""
                placeholder="Name"
                onChange={Onchagetesdetail}
              />
              <input
                type="text"
                name="url"
                id=""
                placeholder="URL"
                onChange={Onchagetesdetail}
              />
              <button
                className="button-19"
                onClick={() => {
                  EResourcesAdd();
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

export default EResourcesAdd;
