import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import AdminHeader from "../../../Components/AdminHeader/AdminHeader";
import AdminMenu from "../../../Components/AdminMenu/AdminMenu";
import { useParams } from "react-router-dom";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import "../../QuestionPaper/QuestionPaperAdd/QuestionPaperAdd.css";
import "../../Society/Society_Add/Society_Add.css";
import "../../Testimonials/Testimonials_ADD/Testimonials_ADD";
import { Helmet } from "react-helmet";

const NoticeUpdate = () => {
  const [societUpdate, setSocieUpdate] = useState({
    Name: "",
    Detail: "",
    Categories: "",
  });

  const { _id } = useParams();

  const [filedata, setFileData] = useState();

  // function handleFileInputChange(event) {
  //   const files = event.target.files;
  //   const newImages = [];

  //   if (files.length) {
  //     for (let i = 0; i < files.length; i++) {
  //       newImages.push(files[i]);
  //     }

  //     setFileData(newImages);
  //   } else {
  //     setFileData(files);
  //   }
  // }

  const Onchagetesdetail = (e) => {
    setSocieUpdate({ ...societUpdate, [e.target.name]: e.target.value });
  };

 


  const NoticeUpdate = async () => {
    try {
      let formData = new FormData();
      if (filedata.length) {
        for (let i = 0; i < filedata.length; i++) {
          formData.append("file", filedata[i]);
        }
      } else {
        formData.append("file", filedata);
      }
      formData.append("Name", societUpdate.Name);
      formData.append("Detail", societUpdate.Detail);
      formData.append("Categories", societUpdate.Categories);
      const data1 = (
        await axios.post(`${process.env.REACT_APP_API_URL}/Notice/Notice_Update/${_id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })).data;
      toast(`${data1.message}`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      // console.log(data1);
    } catch (error) {
      console.log(error);
      toast.error(`${error.message}`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  return (
    <>
      <Helmet title="Update Question Paper" />
      <div className="societyAddConatiner">
        <div className="SideBar">
          <AdminMenu />
        </div>
        <div className="SocietyDetailContainer">
          <AdminHeader />
          <div className="SocietyFormContainer">
            <div className="Society_Heading">
              <h1>Paper Data Update</h1>
            </div>
            <div className="SocietyForm">
              <input
                type="text"
                name="Name"
                id=""
                placeholder="Name"
                value={societUpdate?.Name}
                onChange={Onchagetesdetail}
              />
              <textarea
                name="Detail"
                id=""
                cols="15"
                rows="5"
                placeholder="Detail"
                value={societUpdate?.Detail}
                onChange={Onchagetesdetail}
              ></textarea>
              <select name="Categories" id="" value={societUpdate?.Categories} onChange={Onchagetesdetail}
              >
                <option value=" ">Select Categories</option>
                // <option value="Academics">Academics</option>
                // <option value="Admission">Admission</option>
                <option value="Important">Important</option>
                <option value="Normal">Normal</option>
              </select>
              <div className="Message_image">
                <input
                  type="file"
                  name="file"
                  id="ImageUpload"
                  multiple
                  onChange={(e) => {
                    setFileData(e.target.files[0]);
                  }}
                  style={{ width: "200px", height: "150px" }}
                />
              </div>
              <button
                className="button-19"
                onClick={async () => {
                  NoticeUpdate();
                }}
              >
                Submit
              </button>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoticeUpdate;
