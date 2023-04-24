import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import imageCompression from "browser-image-compression";
import axios from "axios";
import "../../Society/Society_Add/Society_Add.css";
import "../../Testimonials/Testimonials_ADD/Testimonials_ADD";
import AdminHeader from "../../../Components/AdminHeader/AdminHeader";
import AdminMenu from "../../../Components/AdminMenu/AdminMenu";
import { Helmet } from "react-helmet";

const FacultyUpdate = () => {
  const [facultyUpdate, setFacultyUpdate] = useState({
    name: "",
    post: "",
    detail: "",
    Department: "",
  });
  const { _id } = useParams();

  const [filedata, setFileData] = useState();

  const Onchagetesdetail = (e) => {
    setFacultyUpdate({ ...facultyUpdate, [e.target.name]: e.target.value });
  };

  const options = {
    maxSizeMB: 1,
    maxWidthOrHeight: 1920,
    useWebWorker: true,
  };

  useEffect(() => {
    const TestSingleData = async () => {
      try {
        const data = (
          await axios.get(
            `${process.env.REACT_APP_API_URL}/Faculty/FacultySingle/${_id}`
          )
        ).data;
        setFacultyUpdate({
          name: data?.name,
          post: data?.post,
          detail: data?.detail,
          Department: data?.Department,
        });
      } catch (error) {
        console.log(error);
      }
    };
    TestSingleData();
  }, [_id]);

  const compresFile = async () => {
    if (filedata) {
      const compressedFile = await imageCompression(filedata, options);
      return compressedFile
    } else {
      return filedata
    }
  };

  // console.log(societUpdate);

  const SocietyUpdate = async () => {
    try {
      let formData = new FormData();
      let Imagefile = await compresFile()
      formData.append("image", Imagefile, filedata.name);
      formData.append("name", facultyUpdate.name);
      formData.append("post", facultyUpdate.post);
      formData.append("detail", facultyUpdate.detail);
      formData.append("Department", facultyUpdate.Department);
      const data1 = (
        await axios.post(
          `${process.env.REACT_APP_API_URL}/Faculty/Faculty_Update/${_id}`,
          formData,
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
  console.log(facultyUpdate);
  return (
    <>
      <Helmet title="Update Faculty" />
      <div className="societyAddConatiner">
        <div className="SideBar">
          <AdminMenu />
        </div>
        <div className="SocietyDetailContainer">
          <AdminHeader />
          <div className="SocietyFormContainer">
            <div className="Society_Heading">
              <h1>Update Faculty</h1>
            </div>
            <div className="SocietyForm">
              <input
                type="text"
                name="name"
                id=""
                placeholder="Name"
                value={facultyUpdate?.name}
                onChange={Onchagetesdetail}
              />
              <input
                type="text"
                name="post"
                id=""
                placeholder="Post"
                value={facultyUpdate?.post}
                onChange={Onchagetesdetail}
              />
              <input
                type="text"
                name="Department"
                id=""
                placeholder="Department"
                value={facultyUpdate?.Department}
                onChange={Onchagetesdetail}
              />
              <textarea
                name="detail"
                id=""
                cols="15"
                rows="5"
                placeholder="Detail"
                value={facultyUpdate?.detail}
                onChange={Onchagetesdetail}
              ></textarea>
              <div className="Message_image">
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  id="ImageUpload"
                  onChange={(e) => {
                    setFileData(e.target.files[0]);
                  }}
                  style={{ width: "400px", height: "200px" }}
                />
                {filedata ? (
                  <img
                    src={URL.createObjectURL(filedata)}
                    alt=""
                    style={{
                      width: "400px",
                      height: "200px",
                      borderRadius: "10px",
                    }}
                  />
                ) : (
                  <img
                    src={`${process.env.REACT_APP_API_URL}/Faculty/Faculty_Image_Display/${_id}`}
                    alt=""
                    style={{
                      width: "400px",
                      height: "200px",
                      borderRadius: "10px",
                    }}
                  />
                )}
              </div>
              <button
                className="button-19"
                onClick={() => {
                  SocietyUpdate();
                }}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FacultyUpdate;
