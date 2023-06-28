import React, { useEffect, useState } from "react";
import AdminHeader from "../../../Components/AdminHeader/AdminHeader";
import AdminMenu from "../../../Components/AdminMenu/AdminMenu";
import "../../Society/Society_Add/Society_Add.css";
import "../../Testimonials/Testimonials_ADD/Testimonials_ADD";
import axios from "axios";
import imageCompression from 'browser-image-compression';
import { Helmet } from "react-helmet";
import { ToastContainer, toast } from "react-toastify";


const RDAdd = () => {

    const [societUpdate, setSocieUpdate] = useState({
        Detail: "",
        Date: "",
        category: "",
        heading: "",
        index: "",
    });
    const [filedata, setFileData] = useState();
    const [otherimage, setOtherImage] = useState()
    const [eventData, setEventData] = useState([])
    const eventGet = async () => {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/Eventhandler/EventHandler_Display`)
        setEventData(await res.json())
    }

    const Onchagetesdetail = (e) => {
        setSocieUpdate({ ...societUpdate, [e.target.name]: e.target.value });
    };

    const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 1920,
        useWebWorker: true,
    }
    async function handleFileInputChange(event) {
        const files = event.target.files;
        const newImages = [];

        if (files.length) {
            for (let i = 0; i < files.length; i++) {
                const compressedFile = await imageCompression(files[i], options);

                newImages.push(compressedFile);
            }

            setOtherImage(newImages);
        } else {
            setOtherImage(files);
        }
    }



    const SocietyAdd = async () => {
        try {
            let formData = new FormData();
            const compressedFile = await imageCompression(filedata, options);
            formData.append("mainImage", compressedFile, filedata.name);
            formData.append("Detail", societUpdate.Detail);
            formData.append("Date", societUpdate.Date);
            formData.append("category", societUpdate.category);
            formData.append("heading", societUpdate.heading);
            formData.append("index", societUpdate.index);

            console.log(otherimage);
            if (otherimage.length) {
                for (let i = 0; i < otherimage.length; i++) {
                    const compressedFile = await imageCompression(otherimage[i], options);
                    console.log(`${compressedFile} ${i}`);
                    formData.append("Images", compressedFile, otherimage[i]?.name);
                }
            } else {
                const compressedFile = await imageCompression(otherimage, options);
                formData.append("Images", compressedFile, otherimage?.name);
            }
            console.log("hi");
            const data1 = (
                await axios.post(
                    `${import.meta.env.VITE_API_URL}/Research_Development/Research_Development_Add`,
                    formData,
                    {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    }
                )
            ).data;
            toast.success(`Added Successfully`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
            // console.log(data1);
        } catch (error) {
            toast.error(`Error`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
            console.log(error);
        }
    };
    useEffect(() => {
        eventGet();
    }, []);
    return (
        <>
            <Helmet title="Add R&D" />
            <ToastContainer />
            <div className="societyAddConatiner">
                <div className="SideBar">
                    <AdminMenu />
                </div>
                <div className="SocietyDetailContainer">
                    <AdminHeader />
                    <div className="SocietyFormContainer">
                        <div className="Society_Heading">
                            <h1>Create a new R&D Event</h1>
                        </div>
                        <div className="SocietyForm">
                            <label htmlFor="Date" className="my-bold text-lg">Date: </label>
                            <input
                                type="date"
                                name="Date"
                                id="Date"
                                placeholder="Date"
                                onChange={Onchagetesdetail}
                            />
                            <label htmlFor="Detail" className="my-bold text-lg">Detail:</label>
                            <textarea
                                name="Detail"
                                id="Detail"
                                cols="15"
                                rows="5"
                                placeholder="Detail"
                                onChange={Onchagetesdetail}
                            ></textarea>
                            <label htmlFor="category" className="my-bold text-lg">Category:</label>
                            <input
                                type="text"
                                name="category"
                                id="category"
                                placeholder="Category"
                                onChange={Onchagetesdetail}
                            />
                            <label htmlFor="heading" className="my-bold text-lg">Heading:</label>
                            <input
                                type="text"
                                name="heading"
                                id="heading"
                                placeholder="Heading"
                                onChange={Onchagetesdetail}
                            />
                            <label htmlFor="index" className="my-bold text-lg">Index:</label>
                            <input
                                type="text"
                                name="index"
                                id="index"
                                placeholder="Index"
                                onChange={Onchagetesdetail}
                            />
                            <label htmlFor="imageUpload" className="my-bold text-lg">Add the Main Image:</label>
                            <input
                                type="file"
                                name="image"
                                id="ImageUpload"
                                onChange={(e) => {
                                    setFileData(e.target.files[0]);
                                }}
                                style={{ width: "200px", height: "150px" }}
                            />
                            <label htmlFor="ImagesUpload" className="my-bold text-lg">Add Other Images:</label>
                            <input
                                type="file"
                                name="file"
                                id="ImagesUpload"
                                multiple
                                onChange={handleFileInputChange}
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

export default RDAdd;
