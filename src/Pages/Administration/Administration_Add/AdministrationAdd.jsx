import React, { useState } from "react";
import axios from "axios";
import "../../Society/Society_Add/Society_Add.css";
import "../../Testimonials/Testimonials_ADD/Testimonials_ADD.css";
import AdminMenu from "../../../Components/AdminMenu/AdminMenu";
import AdminHeader from "../../../Components/AdminHeader/AdminHeader";
import imageCompression from "browser-image-compression";
import { Helmet } from "react-helmet";

const AdministrationAdd = () => {
  const [AdminiUpdate, setAdminiUpdate] = useState({
    name: "",
    position: "",
    shortNote: "",
    longNote: "",
  });
  const [filedata, setFileData] = useState();

  const Onchagetesdetail = (e) => {
    setAdminiUpdate({ ...AdminiUpdate, [e.target.name]: e.target.value });
  };

  const options = {
    maxSizeMB: 1,
    maxWidthOrHeight: 1920,
    useWebWorker: true,
  };

  const AdminiAdd = async () => {
    try {
      axios.defaults.headers = {
        authorization: localStorage.getItem("token"),
      };
      let formData = new FormData();
      const compressedFile = await imageCompression(filedata, options);
      console.log(compressedFile);
      formData.append("image", compressedFile, filedata.name);
      formData.append("name", AdminiUpdate.name);
      formData.append("position", AdminiUpdate.position);
      formData.append("shortNote", AdminiUpdate.shortNote);
      formData.append("longNote", AdminiUpdate.longNote);
      const data1 = (
        await axios.post(
          `${process.env.REACT_APP_API_URL}/Administration/Administration_Add`,
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
      <Helmet title="Add Administration" />
      <div className="societyAddConatiner">
        <div className="SideBar">
          <AdminMenu />
        </div>
        <div className="SocietyDetailContainer">
          <AdminHeader />
          <div className="SocietyFormContainer">
            <div className="Society_Heading">
              <h1>Create a new Governing Body </h1>
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
                name="position"
                id=""
                placeholder="Position"
                onChange={Onchagetesdetail}
              />
              <input
                type="text"
                name="shortNote"
                id=""
                placeholder="Short Note"
                onChange={Onchagetesdetail}
              />
              <div className="Message_image">
                <textarea
                  name="longNote"
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
                  AdminiAdd();
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

export default AdministrationAdd;
