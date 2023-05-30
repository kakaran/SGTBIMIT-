import React, { useEffect, useState } from "react";
import AdminMenu from "../../../../Components/AdminMenu/AdminMenu";
import AdminHeader from "../../../../Components/AdminHeader/AdminHeader";
import axios from "axios";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const EventHDisplay = () => {
    const [render, setRender] = useState(0);
    const [eventH, setEventH] = useState([]);
    const navigator = useNavigate();

    useEffect(() => {
        const eventHData = async () => {
            try {
                const data = (
                    await axios.get(
                        `${import.meta.env.VITE_API_URL}/Eventhandler/EventHandler_Display`
                    )
                ).data;
                setEventH(data);
                setRender(0);
            } catch (error) {
                console.log(error);
            }
        };
        eventHData();
        ImagesGet();
    }, [render]);

    const ImagesGet = (value) => {
        return (
            <img
                src={`${import.meta.env.VITE_API_URL}/Eventhandler/EventHandleR_Heder_Image/${value}`}
                alt=""
                style={{ width: "400px", height: "450px" }}
            />
        );
    };

    const EventHDelete = async (value) => {
        try {
            const _id = value;
            console.log(_id);
            await axios.post(
                `${import.meta.env.VITE_API_URL}/Eventhandler/EventHandler_Delete/${_id}`
            );
            setRender(1);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <Helmet title="Display Administration" />
            <div className="SocietyDisplayContainer">
                <div className="SideBar">
                    <AdminMenu />
                </div>
                <div className="Testimonial_DetailContainer">
                    <AdminHeader />
                    <div className="TesHeaderCard">
                        <div className="TesDisplayHeading">
                            <h1>Socities (Event Handlers)</h1>
                        </div>
                        <div className="TesDisplayCardContainer">
                            {eventH?.map((value) => {
                                return (
                                    <div className="Society_Card" key={value.name}>
                                        <h3>
                                            {value.name}
                                            <span
                                                style={{
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                }}
                                            >
                                                <BiEditAlt
                                                    style={{
                                                        paddingRight: "10px",
                                                        width: "32px",
                                                        color: "#adb5bd",
                                                    }}
                                                    onClick={() => {
                                                        navigator(
                                                            `/dashboard/admin/EventHandler_Update/${value._id}`
                                                        );
                                                    }}
                                                />
                                                <RiDeleteBin6Line
                                                    className="TestBin"
                                                    onClick={() => {
                                                        EventHDelete(value._id);
                                                    }}
                                                    style={{ color: "#d00000" }}
                                                />
                                            </span>
                                        </h3>
                                        <div className="Society_Card_ImageDescription">
                                            <div className="AdministImageContainer">
                                                {ImagesGet(value?._id)}
                                            </div>
                                            <div className="Society_Describe">
                                                <p>{value?.detail}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EventHDisplay;
