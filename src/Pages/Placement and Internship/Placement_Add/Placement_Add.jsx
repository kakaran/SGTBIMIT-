import React, { useState } from "react";
import "../../Society/Society_Add/Society_Add.css"
import "../../Testimonials/Testimonials_ADD/Testimonials_ADD.css";
import imageCompression from 'browser-image-compression';
import AdminHeader from "../../../Components/AdminHeader/AdminHeader";
import AdminMenu from "../../../Components/AdminMenu/AdminMenu";
import axios from "axios";
import { Helmet } from "react-helmet";

const PlacementAdd = () => {
  const [placementUpdate, setPlacementUpdate] = useState({
    name: "",
    image: "",
    companyName: "",
  });
  const [filedata, setFileData] = useState();

  const Onchagetesdetail = (e) => {
    setPlacementUpdate({ ...placementUpdate, [e.target.name]: e.target.value });
  };

  const options = {
    maxSizeMB: 1,
    maxWidthOrHeight: 1920,
    useWebWorker: true,
  }

  const PlacementAdd = async () => {
    try {
      let formData = new FormData();
      const compressedFile = await imageCompression(filedata, options);
      console.log(compressedFile);
      formData.append("image", compressedFile, filedata.name);
      formData.append("name", placementUpdate.name);
      formData.append("companyName", placementUpdate.companyName);
      const data1 = (
        await axios.post(
          `${process.env.REACT_APP_API_URL}/Placement_Intership/PlacementInterships_Add`,
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
      <Helmet title="Add Placement" />
      <div className="societyAddConatiner">
        <div className="SideBar">
          <AdminMenu />
        </div>
        <div className="SocietyDetailContainer">
          <AdminHeader />
          <div className="SocietyFormContainer">
            <div className="Society_Heading">
              <h1>Add About New Placement and Internship</h1>
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
                name="companyName"
                id=""
                placeholder="Company Name"
                onChange={Onchagetesdetail}
              />
              <div className="Message_image">
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
                  PlacementAdd();
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

export default PlacementAdd