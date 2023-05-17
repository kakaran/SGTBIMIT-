import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminHeader from "../../../../Components/AdminHeader/AdminHeader";
import AdminMenu from "../../../../Components/AdminMenu/AdminMenu";
import "../../../Society/Society_Add/Society_Add.css";
// import "../../../QuestionPaper/QuestionPaperAdd/QuestionPaperAdd.css";
import "../../../Testimonials/Testimonials_ADD/Testimonials_ADD";
import axios from "axios";
import imageCompression from 'browser-image-compression';

const AGalleryAdd = () => {
    const [societUpdate, setSocieUpdate] = useState({
        category: "",
    });

    const [filedata, setFileData] = useState([]);
    const [singleFiledata,setSingleFiledata] = useState()

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

    const Onchagetesdetail = (e) => {
        setSocieUpdate({ ...societUpdate, [e.target.name]: e.target.value });
    };

    const SocietyAdd = async () => {
        try {
            let formData = new FormData();
            if (filedata.length) {
                
                for (let i = 0; i < filedata.length; i++) {
                    const compressedFile = await imageCompression(filedata[i], options);
                    formData.append("images", compressedFile,filedata[i]?.name);
                }
            } else {
                const compressedFile = await imageCompression(filedata, options);
                formData.append("images", compressedFile,filedata?.name);
            }

            const compressedFile = await imageCompression(singleFiledata, options);
            console.log(compressedFile);
            formData.append("image", compressedFile, filedata?.name);
            formData.append("category", societUpdate.category);
            const data1 = (
                await axios.post(`${process.env.REACT_APP_API_URL}/Alumini/gallery/aluminiAddImage`, formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                })
            ).data;
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
    console.log(filedata);

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
                            <h1>Add Alumni Gallery</h1>
                        </div>
                        <div className="SocietyForm">
                            <span style={{fontFamily: "'Abel', sans-serif", fontSize:"18px"}} >
                                Enter Main Image: 
                            </span>
                            <input
                                type="file"
                                name="image"
                                id="ImageUpload"
                                onChange={(e) => {
                                    setSingleFiledata(e.target.files[0]);
                                }}
                                style={{ width: "200px", height: "150px" }}
                            />
                            <input
                                type="text"
                                name="category"
                                id=""
                                placeholder="Category"
                                onChange={Onchagetesdetail}
                            />
                            <span style={{fontFamily: "'Abel', sans-serif", fontSize:"18px"}} >
                                Enter Other Images: 
                            </span>
                            <div className="Message_image">
                                <input
                                    type="file"
                                    name="file"
                                    id="ImageUpload"
                                    multiple
                                    onChange={handleFileInputChange}
                                    style={{ width: "200px", height: "150px" }}
                                />
                            </div>
                            <button
                                className="button-19"
                                onClick={async () => {
                                    SocietyAdd();
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

export default AGalleryAdd;
