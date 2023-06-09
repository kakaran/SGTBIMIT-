import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import imageCompression from "browser-image-compression";
import axios from "axios";
import "../../../Society/Society_Add/Society_Add.css";
import "../../../Testimonials/Testimonials_ADD/Testimonials_ADD";
import AdminHeader from "../../../../Components/AdminHeader/AdminHeader";
import AdminMenu from "../../../../Components/AdminMenu/AdminMenu";
import { Helmet } from "react-helmet";

const StarsUpdate = () => {
  const [starsUpdate, setStarsUpdate] = useState({
    name: "",
    image: "",
    companyName: "",
  });
  const { _id } = useParams();

  const [filedata, setFileData] = useState();

  const Onchagetesdetail = (e) => {
    setStarsUpdate({ ...starsUpdate, [e.target.name]: e.target.value });
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
            `${import.meta.env.VITE_API_URL}/Placement_Intership/PlacementInterships_Single/${_id}`
          )
        ).data;
        setStarsUpdate({
          name: data?.name,
          companyName: data?.companyName,
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
      formData.append("name", starsUpdate.name);
      formData.append("companyName", starsUpdate.companyName);
      const data1 = (
        await axios.post(
          `${import.meta.env.VITE_API_URL}/Placement_Intership/PlacementInterships_Update/${_id}`,
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
      <Helmet title="Update Placement Stars" />
      <div className="societyAddConatiner">
        <div className="SideBar">
          <AdminMenu />
        </div>
        <div className="SocietyDetailContainer">
          <AdminHeader />
          <div className="SocietyFormContainer">
            <div className="Society_Heading">
              <h1>Update the Featured Stars</h1>
            </div>
            <div className="SocietyForm">
              <input
                type="text"
                name="name"
                id=""
                placeholder="Name"
                value={starsUpdate.name}
                onChange={Onchagetesdetail}
              />
              <input
                type="text"
                name="companyName"
                id=""
                placeholder="Company Name"
                value={starsUpdate.companyName}
                onChange={Onchagetesdetail}
              />
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
                    src={`${import.meta.env.VITE_API_URL}/PlacementFeature/Placementfeature_Image_Display/${_id}`}
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

export default StarsUpdate;
