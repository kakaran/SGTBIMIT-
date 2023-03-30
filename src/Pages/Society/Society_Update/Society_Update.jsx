import React, { useState, useEffect } from "react";
import AdminHeader from "../../../Components/AdminHeader/AdminHeader";
import AdminMenu from "../../../Components/AdminMenu/AdminMenu";
import "../Society_Add/Society_Add.css";
import "../../Testimonials/Testimonials_ADD/Testimonials_ADD";
import axios from "axios";
import { useParams } from "react-router-dom";
import imageCompression from "browser-image-compression";

const Society_Update = () => {
  const [societUpdate, setSocieUpdate] = useState({
    title: "",
    detail: "",
    subdetail: "",
  });
  const { _id } = useParams();

  const [filedata, setFileData] = useState();

  const Onchagetesdetail = (e) => {
    setSocieUpdate({ ...societUpdate, [e.target.name]: e.target.value });
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
            `http://localhost:5000/Society/Single_Society_Display/${_id}`
          )
        ).data;
        setSocieUpdate({
          title: data?.title,
          detail: data?.detail,
          subdetail: data?.subdetail,
        });
      } catch (error) {
        console.log(error);
      }
    };
    TestSingleData();
  }, [_id]);

  // console.log(societUpdate);

  const SocietyUpdate = async () => {
    try {
      let formData = new FormData();
      const compressedFile = await imageCompression(filedata, options);
      formData.append("image", compressedFile);
      formData.append("title", societUpdate.title);
      formData.append("detail", societUpdate.detail);
      formData.append("subdetail", societUpdate.subdetail);
      const data1 = (
        await axios.post(
          `http://localhost:5000/Society/Society_Update/${_id}`,
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
      <div className="societyAddConatiner">
        <div className="SideBar">
          <AdminMenu />
        </div>
        <div className="SocietyDetailContainer">
          <AdminHeader />
          <div className="SocietyFormContainer">
            <div className="Society_Heading">
              <h1>Update Society</h1>
            </div>
            <div className="SocietyForm">
              <input
                type="text"
                name="title"
                id=""
                placeholder="Society"
                value={societUpdate.title}
                onChange={Onchagetesdetail}
              />
              <input
                type="text"
                name="subdetail"
                id=""
                placeholder="Sub Detail"
                value={societUpdate.subdetail}
                onChange={Onchagetesdetail}
              />
              <textarea
                name="detail"
                id=""
                cols="15"
                rows="5"
                placeholder="Message"
                value={societUpdate.detail}
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
                    src={`http://localhost:5000/Society/Society_Image_Display/${_id}`}
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

export default Society_Update;
