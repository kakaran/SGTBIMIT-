import React, { useState, useEffect } from "react";
import AdminHeader from "../../../../Components/AdminHeader/AdminHeader";
import AdminMenu from "../../../../Components/AdminMenu/AdminMenu";
import "../../../Society/Society_Add/Society_Add.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import imageCompression from "browser-image-compression";
import { Helmet } from "react-helmet";

const VisitUpdate = () => {
  const [societUpdate, setSocieUpdate] = useState({
    name: "",
    about: "",
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
            `${import.meta.env.VITE_API_URL}/IndustrialVisits/IndustrialVisits_Display/${_id}`
          )
        ).data;
        setSocieUpdate({
          name: data?.name,
          about: data?.about,
        });
      } catch (error) {
        console.log(error);
      }
    };
    TestSingleData();
  }, [_id]);

  // console.log(societUpdate);
  const compresFile = async () => {
    if (filedata) {
      const compressedFile = await imageCompression(filedata, options);
      return compressedFile
    } else {
      return filedata
    }
  };

  const SocietyUpdate = async () => {
    try {
      let formData = new FormData();
      let Imagefile = await compresFile()
      formData.append("image", Imagefile, filedata.name);
      formData.append("name", societUpdate.name);
      formData.append("about", societUpdate.about);
      const data1 = (
        await axios.post(
          `${import.meta.env.VITE_API_URL}/IndustrialVisits/IndustrialVisits_Update/${_id}`,
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
      <Helmet title="Update Industrial Visit" />
      <div className="societyAddConatiner">
        <div className="SideBar">
          <AdminMenu />
        </div>
        <div className="SocietyDetailContainer">
          <AdminHeader />
          <div className="SocietyFormContainer">
            <div className="Society_Heading">
              <h1>Update Industrial Visits</h1>
            </div>
            <div className="SocietyForm">
              <input
                type="text"
                name="name"
                id=""
                placeholder="Name"
                value={societUpdate?.name}
                onChange={Onchagetesdetail}
              />
              <textarea
                name="about"
                id=""
                cols="15"
                rows="5"
                placeholder="Message"
                value={societUpdate?.about}
                onChange={Onchagetesdetail}
              ></textarea>
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
                    src={`${import.meta.env.VITE_API_URL}/Society/Society_Image_Display/${_id}`}
                    alt=""
                    style={{
                      width: "400px",
                      height: "200px",
                      borderRadius: "10px",
                    }}
                  />
                )}
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

export default VisitUpdate;
