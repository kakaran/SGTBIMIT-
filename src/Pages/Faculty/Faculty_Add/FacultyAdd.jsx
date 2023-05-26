import React, { useState } from "react";
import "../../Society/Society_Add/Society_Add.css"
import "../../Testimonials/Testimonials_ADD/Testimonials_ADD.css";
import imageCompression from 'browser-image-compression';
import AdminHeader from "../../../Components/AdminHeader/AdminHeader";
import AdminMenu from "../../../Components/AdminMenu/AdminMenu";
import axios from "axios";
import { Helmet } from "react-helmet";

const FacultyAdd = () => {
  const [facultyUpdate, setFacultyUpdate] = useState({
    name: "",
    post: "",
    detail: "",
    Department: "",
  });
  const [filedata, setFileData] = useState();

  const Onchagetesdetail = (e) => {
    setFacultyUpdate({ ...facultyUpdate, [e.target.name]: e.target.value });
  };

  const options = {
    maxSizeMB: 1,
    maxWidthOrHeight: 1920,
    useWebWorker: true,
  }

  const FacultyAdd = async () => {
    try {
      let formData = new FormData();
      const compressedFile = await imageCompression(filedata, options);
      console.log(compressedFile);
      formData.append("image", compressedFile, filedata.name);
      formData.append("name", facultyUpdate.name);
      formData.append("post", facultyUpdate.post);
      formData.append("detail", facultyUpdate.detail);
      formData.append("Department", facultyUpdate.Department);
      const data1 = (
        await axios.post(
          `${import.meta.env.VITE_API_URL}/Faculty/Faculty_Add`,
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
      <Helmet title="Add Faculty" />
      <div className="societyAddConatiner">
        <div className="SideBar">
          <AdminMenu />
        </div>
        <div className="SocietyDetailContainer">
          <AdminHeader />
          <div className="SocietyFormContainer">
            <div className="Society_Heading">
              <h1>Create a new Faculty</h1>
            </div>
            <div className="SocietyForm">
              <input
                type="text"
                name="name"
                id=""
                placeholder="Name"
                onChange={Onchagetesdetail}
              />
              <input
                type="text"
                name="post"
                id=""
                placeholder="Post"
                onChange={Onchagetesdetail}
              />
              <input
                type="text"
                name="Department"
                id=""
                placeholder="Department"
                onChange={Onchagetesdetail}
              />
              <div className="Message_image">
                <textarea
                  name="detail"
                  id=""
                  cols="15"
                  rows="5"
                  placeholder="Detail"
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
              </div>

              <button
                className="button-19"
                onClick={() => {
                  FacultyAdd();
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>)
}

export default FacultyAdd