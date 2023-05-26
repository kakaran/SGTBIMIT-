import React, { useState } from "react";
import "../../../Society/Society_Add/Society_Add.css"
import "../../../Testimonials/Testimonials_ADD/Testimonials_ADD.css";
import imageCompression from 'browser-image-compression';
import AdminHeader from "../../../../Components/AdminHeader/AdminHeader";
import AdminMenu from "../../../../Components/AdminMenu/AdminMenu";
import axios from "axios";
import { Helmet } from "react-helmet";

const PTeamAdd = () => {
  const [pteamUpdate, setPteamUpdate] = useState({
    Name: "",
    linkdin: "",
    Categories: "",
  });
  const [filedata, setFileData] = useState();

  const Onchagetesdetail = (e) => {
    setPteamUpdate({ ...pteamUpdate, [e.target.name]: e.target.value });
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
      formData.append("Name", pteamUpdate.Name);
      formData.append("linkdin", pteamUpdate.linkdin);
      formData.append("Categories", pteamUpdate.Categories);
      const data1 = (
        await axios.post(
          `${import.meta.env.VITE_API_URL}/PlacementTeam/Placement_Team_Add`,
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
      <Helmet title="Add Placement Team" />
      <div className="societyAddConatiner">
        <div className="SideBar">
          <AdminMenu />
        </div>
        <div className="SocietyDetailContainer">
          <AdminHeader />
          <div className="SocietyFormContainer">
            <div className="Society_Heading">
              <h1>Add a new Placement Team Member(s)</h1>
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
                name="linkdin"
                id=""
                placeholder="LinkedIn Id"
                onChange={Onchagetesdetail}
              />
              <input
                type="integer"
                name="Categories"
                id=""
                placeholder="Categories"
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

export default PTeamAdd