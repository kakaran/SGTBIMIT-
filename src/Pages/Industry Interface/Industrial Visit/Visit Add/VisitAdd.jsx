import React, { useState } from "react";
import AdminHeader from "../../../../Components/AdminHeader/AdminHeader";
import AdminMenu from "../../../../Components/AdminMenu/AdminMenu";
import "../../../Society/Society_Display/Society_Display.css";
import axios from "axios";
import imageCompression from 'browser-image-compression';
import { Helmet } from "react-helmet";


const VisitAdd = () => {
    const [societUpdate, setSocieUpdate] = useState({
        name: "",
        about: "",
    });
    const [filedata, setFileData] = useState();

    const Onchagetesdetail = (e) => {
        setSocieUpdate({ ...societUpdate, [e.target.name]: e.target.value });
    };

    const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 1920,
        useWebWorker: true,
    }

    const SocietyAdd = async () => {
        try {
            let formData = new FormData();
            const compressedFile = await imageCompression(filedata, options);
            console.log(compressedFile);
            formData.append("image", compressedFile, filedata.name);
            formData.append("companyImage", compressedFile, filedata.companyImage);
            formData.append("name", societUpdate.name);
            formData.append("about", societUpdate.about);
            const data1 = (
                await axios.post(
                    `${import.meta.env.VITE_API_URL}/IndustrialVisits/IndustrialVisits_Add`,
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
            <Helmet title="Add Visit" />
            <div className="societyAddConatiner">
                <div className="SideBar">
                    <AdminMenu />
                </div>
                <div className="SocietyDetailContainer">
                    <AdminHeader />
                    <div className="SocietyFormContainer">
                        <div className="Society_Heading">
                            <h1>Create a new Industrial Visit </h1>
                        </div>
                        <div className="SocietyForm">
                            <input
                                type="text"
                                name="name"
                                id=""
                                placeholder="Name"
                                onChange={Onchagetesdetail}
                            />
                            <textarea
                                name="about"
                                id=""
                                cols="15"
                                rows="5"
                                placeholder="About"
                                onChange={Onchagetesdetail}
                            ></textarea>
                            <span>Image: </span><input
                                type="file"
                                name="image"
                                id="ImageUpload"
                                onChange={(e) => {
                                    setFileData(e.target.files[0]);
                                }}
                                style={{ width: "200px", height: "150px" }}
                            />
                            <span>Company Image:</span><input
                                type="file"
                                name="companyImage"
                                id="ImageUpload"
                                onChange={(e) => {
                                    setFileData(e.target.files[0]);
                                }}
                                style={{ width: "200px", height: "150px" }}
                            />

                            <button
                                className="button-19"
                                onClick={() => {
                                    SocietyAdd();
                                }}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default VisitAdd;
