import React, { useState } from "react";
import AdminHeader from "../../../Components/AdminHeader/AdminHeader";
import AdminMenu from "../../../Components/AdminMenu/AdminMenu";
import "../../Society/Society_Add/Society_Add.css";
// import "../../Testimonials/Testimonials_ADD/Testimonials_ADD";
import axios from "axios";
import imageCompression from 'browser-image-compression';
import { Helmet } from "react-helmet";


const NoticeAdd = () => {
  const [noticeUpdate, setNoticeUpdate] = useState({
    Name: "",
    Detail: "",
    Categories: "",
  });
  const [filedata, setFileData] = useState();

  function handleFileInputChange(event) {
    const files = event.target.files;
    const newImages = [];

    if (files.length) {
      for (let i = 0; i < files.length; i++) {
        newImages.push(files[i]);
      }

      setFileData(newImages);
    } else {
      setFileData(files);
    }
  }

  const Onchagetesdetail = (e) => {
    setNoticeUpdate({ ...noticeUpdate, [e.target.name]: e.target.value });
  };

  const options = {
    maxSizeMB: 1,
    maxWidthOrHeight: 1920,
    useWebWorker: true,
  }

  const SocietyAdd = async () => {
    try {
      let formData = new FormData();
      const compressedFile = await imageCompression(filedata, options);
      console.log(compressedFile);
      formData.append("Name", noticeUpdate.Name);
      formData.append("Detail", noticeUpdate.Detail);
      formData.append("Categories", noticeUpdate.Categories);
      const data1 = (
        await axios.post(
          `${process.env.REACT_APP_API_URL}/Notice/Notice_Add`,
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
      <Helmet title="Add Notice" />
      <div className="societyAddConatiner">
        <div className="SideBar">
          <AdminMenu />
        </div>
        <div className="SocietyDetailContainer">
          <AdminHeader />
          <div className="SocietyFormContainer">
            <div className="Society_Heading">
              <h1>Create a new Notice</h1>
            </div>
            <div className="SocietyForm">
              <input
                type="text"
                name="Name"
                id=""
                placeholder="Name"
                onChange={Onchagetesdetail}
              />
              <textarea
                name="Detail"
                id=""
                cols="20"
                rows="5"
                placeholder="Detail"
                onChange={Onchagetesdetail}
              ></textarea>
              <select name="Categories" id="" value={noticeUpdate?.Categories} onChange={Onchagetesdetail}
              >
                <option value=" ">Select Categories</option>
                <option value="Academics">Academics</option>
                <option value="Admission">Admission</option>
                <option value="Events">Events</option>
                <option value="Placements">Placements</option>
              </select>
              <div className="Message_image">
                <input
                  type="file"
                  name="file"
                  id="ImageUpload"
                  multiple
                  onChange={handleFileInputChange}
                  style={{ width: "200px", height: "150px" }}
                />
              </div>

              <button
                className="button-19"
                onClick={() => {
                  SocietyAdd();
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

export default NoticeAdd;
