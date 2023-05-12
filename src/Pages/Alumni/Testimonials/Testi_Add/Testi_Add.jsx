import axios from "axios";
import React, { useState } from "react";
import AdminHeader from "../../../../Components/AdminHeader/AdminHeader";
import AdminMenu from "../../../../Components/AdminMenu/AdminMenu";
import "../../../Testimonials/Testimonials_ADD/Testimonials_ADD.css";
import { Helmet } from "react-helmet";
import imageCompression from 'browser-image-compression';

const AlumniTesti_Add = () => {
  const [testiUpdate, setTestiUpdate] = useState({
    name: "",
    detail: "",
    image: "",
  });

  const [filedata, setFileData] = useState();

  const Onchagetesdetail = (e) => {
    setTestiUpdate({ ...testiUpdate, [e.target.name]: e.target.value });
  };

  const options = {
    maxSizeMB: 1,
    maxWidthOrHeight: 1920,
    useWebWorker: true,
  }

  const AddTestimonial = async () => {
    try {
        let formData = new FormData();
        const compressedFile = await imageCompression(filedata, options);
        console.log(compressedFile);
        formData.append("image", compressedFile, filedata.name);
        formData.append("name", testiUpdate.name);
        formData.append("detail", testiUpdate.detail);
        const data1 = (
          await axios.post(
            `${process.env.REACT_APP_API_URL}/Testimonial/Testimonial_Add`,
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          )
        ).data;
        // console.log(data1);
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
              <h1>Create a new Alumni Testimonial</h1>
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
              <input
                  type="file"
                  name="image"
                  id="ImageUpload"
                  onChange={(e) => {
                    setFileData(e.target.files[0]);
                  }}
                  style={{ width: "200px", height: "150px" }}
                />
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

export default AlumniTesti_Add;
