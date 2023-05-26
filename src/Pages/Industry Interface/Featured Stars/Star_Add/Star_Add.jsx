import React, { useState } from "react";
import "../../../Society/Society_Add/Society_Add.css"
import "../../../Testimonials/Testimonials_ADD/Testimonials_ADD.css";
import imageCompression from 'browser-image-compression';
import AdminHeader from "../../../../Components/AdminHeader/AdminHeader";
import AdminMenu from "../../../../Components/AdminMenu/AdminMenu";
import axios from "axios";
import { Helmet } from "react-helmet";

const StarsAdd = () => {
  const [starsUpdate, setStarsUpdate] = useState({
    Name: "",
    Course: "",
    image: "",
    CompanyImage: "",
  });
  const [filedata, setFileData] = useState();
  const [image, setImage] = useState()
  const Onchagetesdetail = (e) => {
    setStarsUpdate({ ...starsUpdate, [e.target.name]: e.target.value });
  };

  const options = {
    maxSizeMB: 1,
    maxWidthOrHeight: 1920,
    useWebWorker: true,
  }

  const PlacementAdd = async () => {
    try {
      let formData = new FormData();
      const userImage = await imageCompression(filedata, options);
      const companyImage = await imageCompression(image, options);
      console.log(userImage);
      formData.append("image", userImage, filedata.name);
      formData.append("Name", starsUpdate.Name);
      formData.append("Course", starsUpdate.Course);
      formData.append("CompanyImage", companyImage, image.name);
      const data1 = (
        await axios.post(
          `${import.meta.env.VITE_API_URL}/PlacementFeature/PlacementFeature_Add`, formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
      ).data;
      console.log(data1);
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
              <h1>Add Our New Featured Star(s)</h1>
            </div>
            <div className="SocietyForm">
              <input
                type="text"
                name="Name"
                id=""
                placeholder="Name"
                onChange={Onchagetesdetail}
              />
              <input
                type="text"
                name="Course"
                id=""
                placeholder="Couse"
                onChange={Onchagetesdetail}
              />
              <div className="Message_image flex-col gap-2" style={{ alignItems: "flex-start" }}>
                <label htmlFor="sImageUpload" className="my-bold text-lg">Student Image</label>
                <input
                  type="file"
                  name="image"
                  id="sImageUpload"
                  onChange={(e) => {
                    setFileData(e.target.files[0]);
                  }}
                  style={{ width: "200px", height: "150px" }}
                />
              </div>

              <div className="Message_image flex-col gap-2" style={{ alignItems: "flex-start" }}>
                <label htmlFor="ImageUpload" className="my-bold text-lg">Company Image</label>
                <input
                  type="file"
                  name="image"
                  id="ImageUpload"
                  onChange={(e) => {
                    setImage(e.target.files[0]);
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

export default StarsAdd