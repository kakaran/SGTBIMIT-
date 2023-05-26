import React, { useState } from "react";
import AdminHeader from "../../../../Components/AdminHeader/AdminHeader";
import AdminMenu from "../../../../Components/AdminMenu/AdminMenu";
import "../../Society_Add/Society_Add.css";
import "../../../Testimonials/Testimonials_ADD/Testimonials_ADD";
import axios from "axios";
import imageCompression from 'browser-image-compression';
import { Helmet } from "react-helmet";


const EventHAdd = () => {
    const [societUpdate, setSocieUpdate] = useState({
        name: "",
        detail: "",
        year: "",
        Events: "",
    });
    const [filedata, setFileData] = useState();

    const Onchagetesdetail = (e) => {
        setSocieUpdate({ ...societUpdate, [e.target.name]: e.target.value });
    };

    function handleFileInputChange(event) {
        const files = event.target.files;
        const newImages = [];

        if (files.length) {
            for (let i = 0; i < files.length; i++) {
                newImages.push(files[i]);
            }

            setFileData(newImages);
        } else {
            setFileData(files);
        }
    }

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
            formData.append("name", societUpdate.name);
            formData.append("detail", societUpdate.detail);
            formData.append("year", societUpdate.year);
            formData.append("Events", societUpdate.Events);


            if (filedata.length) {

                for (let i = 0; i < filedata.length; i++) {
                    const compressedFile = await imageCompression(filedata[i], options);
                    formData.append("images", compressedFile, filedata[i]?.name);
                }
            } else {
                const compressedFile = await imageCompression(filedata, options);
                formData.append("images", compressedFile, filedata?.name);
            }
            const data1 = (
                await axios.post(
                    `${import.meta.env.VITE_API_URL}/Eventhandler/EventHandler_Add`,
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
            <Helmet title="Add Event Handler" />
            <div className="societyAddConatiner">
                <div className="SideBar">
                    <AdminMenu />
                </div>
                <div className="SocietyDetailContainer">
                    <AdminHeader />
                    <div className="SocietyFormContainer">
                        <div className="Society_Heading">
                            <h1>Create a new Event Handler</h1>
                        </div>
                        <div className="SocietyForm">
                            <input
                                type="text"
                                name="name"
                                id=""
                                placeholder="Name"
                                onChange={Onchagetesdetail}
                            />
                            <span style={{ fontFamily: "'Abel', sans-serif", fontSize: "18px" }}>
                                Enter the Main Image:
                            </span>
                            <input
                                type="file"
                                name="image"
                                id="ImageUpload"
                                onChange={(e) => {
                                    setFileData(e.target.files[0]);
                                }}
                                style={{ width: "200px", height: "150px" }}
                            />
                            <textarea
                                name="detail"
                                id=""
                                cols="15"
                                rows="5"
                                placeholder="Detail"
                                onChange={Onchagetesdetail}
                            ></textarea>
                            <span style={{ fontFamily: "'Abel', sans-serif", fontSize: "18px" }}>
                                Enter Other Images:
                            </span>
                            <input
                                type="file"
                                name="file"
                                id="ImageUpload"
                                multiple
                                onChange={handleFileInputChange}
                                style={{ width: "200px", height: "150px" }}
                            />
                            <input
                                type="text"
                                name="year"
                                id=""
                                placeholder="Year"
                                onChange={Onchagetesdetail}
                            />
                            <input
                                type="text"
                                name="Events"
                                id=""
                                placeholder="Events"
                                onChange={Onchagetesdetail}
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

export default EventHAdd;
