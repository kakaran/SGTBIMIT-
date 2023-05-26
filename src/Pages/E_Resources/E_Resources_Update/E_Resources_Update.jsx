import React, { useEffect, useState } from "react";
import AdminHeader from "../../../Components/AdminHeader/AdminHeader";
import AdminMenu from "../../../Components/AdminMenu/AdminMenu";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet";

const EResourcesUpdate = () => {
  const [SingleData, setSingleData] = useState({
    name: "",
    url: "",
  });

  const { _id } = useParams();

  useEffect(() => {
    const TestSingleData = async () => {
      try {
        const data = await axios.get(`${import.meta.env.VITE_API_URL}/E_Resources/EResources_Single_Display/${_id}`).data;
        console.log(data);
        setSingleData({
          name: data?.source?.name,
          url: data?.source?.url,
        });
      } catch (error) {
        console.log(error);
      }
    };
    TestSingleData();
  }, [_id]);

  const EResoucesUpdate = async (e) => {
    e.preventDefault();
    try {
      const data = (
        await axios.post(`${import.meta.env.VITE_API_URL}/E_Resources/EResources_Update/${_id}`, SingleData)
      ).data;
      console.log(data)
    } catch (error) {
      console.log(error);
    }
  };

  const Onchagetesdetail = (e) => {
    setSingleData({ ...SingleData, [e.target.name]: e.target.value })
  }

  return (
    <>
      <Helmet title="Update E-Resources" />
      <div className="TestimonialUpdateContainer" style={{ display: "flex" }}>
        <div className="SideBar">
          <AdminMenu />
        </div>
        <div className="TestimonialDetailContainer">
          <AdminHeader />
          <div className="TesHeadingFormContainer">
            <div className="Testimonial_Heading">
              <h1>Update E-Resources</h1>
            </div>
            <div className="TestimonialForm">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                value={SingleData?.name}
                onChange={Onchagetesdetail}
              />
              <input
                type="text"
                name="url"
                id="url"
                placeholder="URL"
                value={SingleData?.url}
                onChange={Onchagetesdetail}
              />
              <button className="button-19" onClick={EResoucesUpdate}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EResourcesUpdate;
