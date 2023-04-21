import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import imageCompression from "browser-image-compression";
import axios from "axios";
import "../../Society/Society_Add/Society_Add.css";
import "../../Testimonials/Testimonials_ADD/Testimonials_ADD";
import AdminHeader from "../../../Components/AdminHeader/AdminHeader";
import AdminMenu from "../../../Components/AdminMenu/AdminMenu";

const CollaborationsUpdate = () => {
  const [collabsUpdate, setCollabsUpdate] = useState({
    name: "",
    image: "",
  });
  const { _id } = useParams();

  const [filedata, setFileData] = useState();

  const Onchagetesdetail = (e) => {
    setCollabsUpdate({ ...collabsUpdate, [e.target.name]: e.target.value });
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
            `http://localhost:5000/Recruiters/recruiters_Single_Display/${_id}`
          )
        ).data;
        console.log(data);
        setCollabsUpdate({
          Name: data?.name,
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
    }else{
      return filedata
    }
  };
  // console.log(societUpdate);

  const SocietyUpdate = async () => {
    try {
      let formData = new FormData();
      let Imagefile = await compresFile()
      Imagefile && formData.append("image", Imagefile, filedata.name);
      formData.append("Name", collabsUpdate.name);
      const data1 = (
        await axios.post(
          `http://localhost:5000/Recruiters/recruiters_Update/${_id}`,
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
              <h1>Update About Our Collaborations</h1>
            </div>
            <div className="SocietyForm">
              <input
                type="text"
                name="name"
                id=""
                placeholder="Name"
                value={collabsUpdate.name}
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
                    src={`http://localhost:5000/Collaborations/Collaborations_Image_Display/${_id}`}
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

export default CollaborationsUpdate;