import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import imageCompression from "browser-image-compression";
import axios from "axios";
import "../../Society/Society_Add/Society_Add.css";
import "../../Testimonials/Testimonials_ADD/Testimonials_ADD";
import AdminHeader from "../../../Components/AdminHeader/AdminHeader";
import AdminMenu from "../../../Components/AdminMenu/AdminMenu";
import { Helmet } from "react-helmet";

const NoticeUpdate = () => {
  const [noticeUpdate, setNoticeUpdate] = useState({
    Name: "",
    Detail: "",
    Categories: "",
  });
  const { _id } = useParams();

  const [filedata, setFileData] = useState();

  const Onchagetesdetail = (e) => {
    setNoticeUpdate({ ...noticeUpdate, [e.target.name]: e.target.value });
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
            `${process.env.REACT_APP_API_URL}/Notice/Notice_File_Display/${_id}`
          )
        ).data;
        setNoticeUpdate({
          Name: data?.Name,
          Detail: data?.Detail,
          Categories: data?.Categories,
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
      //let Imagefile = await compresFile()
      //formData.append("file", Imagefile, filedata.name);
      formData.append("Name", noticeUpdate.Name);
      formData.append("Detail", noticeUpdate.Detail);
      formData.append("Categories", noticeUpdate.Categories);
      const data1 = (
        await axios.post(
          `${process.env.REACT_APP_API_URL}/Notice/Notice_Update/${_id}`,
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
  console.log(noticeUpdate);
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
              <h1>Update Notice</h1>
            </div>
            <div className="SocietyForm">
              <input
                type="text"
                name="Name"
                id=""
                placeholder="Name"
                value={noticeUpdate?.Name}
                onChange={Onchagetesdetail}
              />
              <input
                type="text"
                name="Categories"
                id=""
                placeholder="Categories"
                value={noticeUpdate?.Categories}
                onChange={Onchagetesdetail}
              />
              <textarea
                name="Detail"
                id=""
                cols="15"
                rows="5"
                placeholder="Detail"
                value={noticeUpdate?.Detail}
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
                {/* {filedata ? (
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
                )} */}
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

export default NoticeUpdate;
