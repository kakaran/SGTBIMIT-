import React, { useState } from "react";
import "../../../Society/Society_Add/Society_Add.css"
import "../../../Testimonials/Testimonials_ADD/Testimonials_ADD.css";
import AdminHeader from "../../../../Components/AdminHeader/AdminHeader";
import AdminMenu from "../../../../Components/AdminMenu/AdminMenu";
import axios from "axios";
import { Helmet } from "react-helmet";

const PStatsAdd = () => {
  const [pstatsUpdate, setPstatsUpdate] = useState({
    Year: "",
    Name: "",
    Eligible: "",
    Offers: "",
  });
  const [filedata, setFileData] = useState();

  const Onchagetesdetail = (e) => {
    setPstatsUpdate({ ...pstatsUpdate, [e.target.name]: e.target.value });
  };

  const options = {
    maxSizeMB: 1,
    maxWidthOrHeight: 1920,
    useWebWorker: true,
  }

  const FacultyAdd = async () => {
    try {
      let formData = new FormData();
    //   const compressedFile = await imageCompression(filedata, options);
    //   console.log(compressedFile);
    //   formData.append("image", compressedFile, filedata.name);
      formData.append("Year", pstatsUpdate.Year);
      formData.append("Name", pstatsUpdate.Name);
      formData.append("Eligible", pstatsUpdate.Eligible);
      formData.append("Offers", pstatsUpdate.Offers);
      const data1 = (
        await axios.post(
          `${process.env.REACT_APP_API_URL}/PlacementStatics/placement_Statics_Add`,
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
              <h1>Add a new Placement Statistics</h1>
            </div>
            <div className="SocietyForm">
            <input
                type="text"
                name="Year"
                id=""
                placeholder="Year Range"
                onChange={Onchagetesdetail}
              />
              <input
                type="text"
                name="Name"
                id=""
                placeholder="Name"
                onChange={Onchagetesdetail}
              />
              <input
                type="text"
                name="Eligible"
                id=""
                placeholder="No. of Eligible Students"
                onChange={Onchagetesdetail}
              />
              <input
                type="text"
                name="Offers"
                id=""
                placeholder="Total No. of Offers"
                onChange={Onchagetesdetail}
              />

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

export default PStatsAdd