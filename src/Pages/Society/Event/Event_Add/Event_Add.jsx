import React, { useEffect, useState } from "react";
import AdminHeader from "../../../../Components/AdminHeader/AdminHeader";
import AdminMenu from "../../../../Components/AdminMenu/AdminMenu";
import "../../Society_Add/Society_Add.css";
import "../../../Testimonials/Testimonials_ADD/Testimonials_ADD";
import axios from "axios";
import imageCompression from 'browser-image-compression';
import { Helmet } from "react-helmet";


const EventAdd = () => {

    const [societUpdate, setSocieUpdate] = useState({
        name: "",
        year: "",
        eventHandler: "",
        detail: "",
    });
    const [filedata, setFileData] = useState();
    const [otherimage, setOtherImage] = useState()
    const [eventData, setEventData] = useState([])
    const eventGet = async () => {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/Eventhandler/EventHandler_Display`)
        setEventData(await res.json())
    }

    const Onchagetesdetail = (e) => {
        setSocieUpdate({ ...societUpdate, [e.target.name]: e.target.value });
    };

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


    const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 1920,
        useWebWorker: true,
    }

    const SocietyAdd = async () => {
        try {
            let formData = new FormData();
            const compressedFile = await imageCompression(filedata, options);
            formData.append("mainImage", compressedFile, filedata.name);
            formData.append("name", societUpdate.name);
            formData.append("year", societUpdate.year);
            formData.append("eventHandler", societUpdate.eventHandler);
            formData.append("detail", societUpdate.detail);

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
                    `${process.env.REACT_APP_API_URL}/Event/Event_Add`,
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
    useEffect(() => {
        eventGet();
    }, []);
    return (
        <>
            <Helmet title="Add Event" />
            <div className="societyAddConatiner">
                <div className="SideBar">
                    <AdminMenu />
                </div>
                <div className="SocietyDetailContainer">
                    <AdminHeader />
                    <div className="SocietyFormContainer">
                        <div className="Society_Heading">
                            <h1>Create a new Event</h1>
                        </div>
                        <div className="SocietyForm">
                            <label htmlFor="name" className="my-bold text-lg">Name: </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Name"
                                onChange={Onchagetesdetail}
                            />
                            <label htmlFor="year" className="my-bold text-lg">Year:</label>
                            <input
                                type="text"
                                name="year"
                                id="year"
                                placeholder="Year"
                                onChange={Onchagetesdetail}
                            />
                            {/* <input
                                type="text"
                                name="eventHandler"
                                id=""
                                placeholder="Event Handler"
                                onChange={Onchagetesdetail}
                            /> */}
                            <label htmlFor="eventHandler" className="my-bold text-lg">Event Handler: </label>
                            <select name="eventHandler" id="eventHandler" placeholder="Event Handler" onChange={Onchagetesdetail}>
                                {eventData && eventData.map(event => (
                                    <option value={event.name}>{event.name}</option>
                                ))}
                            </select>
                            <label htmlFor="detail" className="my-bold text-lg">Detail:</label>
                            <textarea
                                name="detail"
                                id="detail"
                                cols="15"
                                rows="5"
                                placeholder="Detail"
                                onChange={Onchagetesdetail}
                            ></textarea>
                            {/* <span style={{ fontFamily: "'Abel', sans-serif", fontSize: "18px" }}>
                                Enter the Main Image:
                            </span> */}
                            <label htmlFor="imageUpload" className="my-bold text-lg">Enter the Main Image:</label>
                            <input
                                type="file"
                                name="image"
                                id="ImageUpload"
                                onChange={(e) => {
                                    setFileData(e.target.files[0]);
                                }}
                                style={{ width: "200px", height: "150px" }}
                            />
                            {/* <span style={{ fontFamily: "'Abel', sans-serif", fontSize: "18px" }}>
                                Enter Other Images:
                            </span> */}
                            <label htmlFor="ImagesUpload" className="my-bold text-lg">Enter Other Images:</label>
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

export default EventAdd;
