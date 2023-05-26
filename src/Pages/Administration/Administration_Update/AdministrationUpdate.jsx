
import React, { useState, useEffect } from "react";
import AdminHeader from "../../../Components/AdminHeader/AdminHeader";
import AdminMenu from "../../../Components/AdminMenu/AdminMenu";
import "../../Society/Society_Add/Society_Add.css";
import "../../Testimonials/Testimonials_ADD/Testimonials_ADD";
import axios from "axios";
import { useParams } from "react-router-dom";
import imageCompression from "browser-image-compression";
import { Helmet } from "react-helmet";


const Society_Update = () => {
  const [GovernUpdate, setGovernUpdate] = useState({
    name: "",
    position: "",
    shortNote: "",
    longNote: "",
    Index: "",
  });
  const { _id } = useParams();

  const [filedata, setFileData] = useState();

  const Onchagetesdetail = (e) => {
    setGovernUpdate({ ...GovernUpdate, [e.target.name]: e.target.value });
  };

  const options = {
    maxSizeMB: 1,
    maxWidthOrHeight: 1920,
    // useWebWorker: true,
  };

  useEffect(() => {
    const TestSingleData = async () => {
      try {
        const data = (
          await axios.get(
            `${import.meta.env.VITE_API_URL}/Administration/Single_Administration_Display/${_id}`
          )
        ).data;
        setGovernUpdate({
          name: data?.name,
          position: data?.position,
          shortNote: data?.shortNote,
          longNote: data?.longNote,
          Index: data?.Index,
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

  const GoverningUpdate = async () => {
    try {
      let formData = new FormData();
      let Imagefile = await compresFile()
      filedata && formData.append("image", Imagefile, filedata.name);
      formData.append("name", GovernUpdate.name);
      formData.append("position", GovernUpdate.position);
      formData.append("shortNote", GovernUpdate.shortNote);
      formData.append("longNote", GovernUpdate.longNote);
      formData.append("Index", Number(GovernUpdate.Index));

      console.log(formData);
      const data1 = (
        await axios.post(
          `${import.meta.env.VITE_API_URL}/Administration/Administration_Update/${_id}`,
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

  return (
    <>
      <Helmet title="Update Administration" />
      <div className="societyAddConatiner">
        <div className="SideBar">
          <AdminMenu />
        </div>
        <div className="SocietyDetailContainer">
          <AdminHeader />
          <div className="SocietyFormContainer">
            <div className="Society_Heading">
              <h1>Update Governing Body</h1>
            </div>
            <div className="SocietyForm">
              <input
                type="text"
                name="name"
                id=""
                placeholder="Name"
                value={GovernUpdate.name}
                onChange={Onchagetesdetail}
              />
              <input
                type="text"
                name="position"
                id=""
                placeholder="Position"
                value={GovernUpdate.position}
                onChange={Onchagetesdetail}
              />
              <input
                type="text"
                name="shortNote"
                id=""
                placeholder="Short Note"
                value={GovernUpdate.shortNote}
                onChange={Onchagetesdetail}
              />
              <input
                type="text"
                name="Index"
                id=""
                placeholder="Index"
                value={GovernUpdate.Index}
                onChange={Onchagetesdetail}
              />
              <textarea
                name="longNote"
                id=""
                cols="15"
                rows="5"
                placeholder="Detail"
                wrap="off"
                value={GovernUpdate.longNote}
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
                    src={`${import.meta.env.VITE_API_URL}/Administration/AdministrationImageDisplay/${_id}`}
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
                  GoverningUpdate();
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

export default Society_Update;
