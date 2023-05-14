import React, { useState } from "react";
import "../../../Society/Society_Add/Society_Add.css"
import "../../../Testimonials/Testimonials_ADD/Testimonials_ADD.css";
import imageCompression from 'browser-image-compression';
import AdminHeader from "../../../../Components/AdminHeader/AdminHeader";
import AdminMenu from "../../../../Components/AdminMenu/AdminMenu";
import axios from "axios";
import { Helmet } from "react-helmet";

const RegistrationAdd = () => {
  const [regisUpdate, setRegisUpdate] = useState({
    Fname: "",
    Lname: "",
    Email: "",
    MNumber: "",
    Address: "",
    AdhaarNo: "",
    course: "",
    Year: "",
    employed: "",
    placement: "",
    presentOrgani: "",
    CurrentDesignation: "",
  });
  const [filedata, setFileData] = useState();

  const Onchagetesdetail = (e) => {
    setRegisUpdate({ ...regisUpdate, [e.target.name]: e.target.value });
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
    //   formData.append("image", compressedFile, filedata.name);
      formData.append("Fname", regisUpdate.Fname);
      formData.append("Lname", regisUpdate.Lname);
      formData.append("Email", regisUpdate.Email);
      formData.append("MNumber", regisUpdate.MNumber);
      formData.append("Address", regisUpdate.Address);
      formData.append("AdhaarNo", regisUpdate.AdhaarNo);
      formData.append("course", regisUpdate.course);
      formData.append("Year", regisUpdate.Year);
      formData.append("employed", regisUpdate.employed);
      formData.append("placement", regisUpdate.placement);
      formData.append("presentOrgani", regisUpdate.presentOrgani);
      formData.append("CurrentDesignation", regisUpdate.CurrentDesignation);
      const data1 = (
        await axios.post(
          `${process.env.REACT_APP_API_URL}/Registration/Registration_Add`,
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
              <h1>Create a new Alumni Registration</h1>
            </div>
            <div className="SocietyForm">
              <input
                type="text"
                name="Fname"
                id=""
                placeholder="First Name"
                onChange={Onchagetesdetail}
              />
              <input
                type="text"
                name="Lname"
                id=""
                placeholder="Last Name"
                onChange={Onchagetesdetail}
              />
              <input
                type="text"
                name="Email"
                id=""
                placeholder="Email"
                onChange={Onchagetesdetail}
              />
              <input
                type="number"
                name="MNumber"
                id=""
                placeholder="Mobile Number"
                onChange={Onchagetesdetail}
              />
              <textarea
                name="Address"
                id=""
                cols="20"
                rows="5"
                placeholder="Address"
                onChange={Onchagetesdetail}
              ></textarea>
              <input
                type="text"
                name="AdhaarNo"
                id=""
                placeholder="Adhaar Card No."
                onChange={Onchagetesdetail}
              />
              <span>Higher Education:</span>
              <select name="course" id="" onChange={Onchagetesdetail}>
                <option value=" ">Select Course</option>
                <option value="BCA">BCA</option>
                <option value="BBA">BBA</option>
                <option value="BBA B&I">BBA B&I</option>
                <option value="BCOM">BCOM</option>
              </select>
              <input
                type="text"
                name="Year"
                id=""
                placeholder="Graduation Year"
                onChange={Onchagetesdetail}
              />
              <select name="employed" id="" onChange={Onchagetesdetail}>
                <option value=" ">If Currently Employed</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
              <span>Current Working Place</span>
              <select name="placement" id="" onChange={Onchagetesdetail}>
                <option value=" ">If placed by SGTBIMIT</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
              <input
                type="text"
                name="presentOrgani"
                id=""
                placeholder="Present Organization"
                onChange={Onchagetesdetail}
              />
              <input
                type="text"
                name="CurrentDesignation"
                id=""
                placeholder="Current Designation"
                onChange={Onchagetesdetail}
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
    </>)
}

export default RegistrationAdd