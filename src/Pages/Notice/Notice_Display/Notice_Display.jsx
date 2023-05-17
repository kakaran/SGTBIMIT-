import React, { useEffect, useState } from 'react'
import AdminMenu from '../../../Components/AdminMenu/AdminMenu'
import AdminHeader from '../../../Components/AdminHeader/AdminHeader'
import axios from 'axios';
import { Card } from 'antd';
import { RiDeleteBin6Line } from "react-icons/ri";


const Notice_Display = () => {
    const[NoticeDataDisplay, setNoticeDataDisplay] = useState();
    const [render, setRender] = useState(0);

    useEffect(() => {
        const NoticeDataGet = async () => {
            try {
                const Data = (await axios.get(`${process.env.REACT_APP_API_URL}/Notice/Notice_Data_Display`)).data
                setNoticeDataDisplay(Data)
                console.log(Data);
            } catch (error) {
                console.log(error);
            }
        }
        NoticeDataGet()
    }, [render])

    const NoticeDelete = async (value) => {
        try {
          const _id = value;
          await axios.post(`${process.env.REACT_APP_API_URL}/Notice/Notice_Delete`, {
            _id,
          });
          setRender(1)
        } catch (error) {
          console.log(error);
        }
      };
    
    const detailStyle = {
        fontFamily: "'Abel', sans-serif",
      };

    return (
        <>
            <div className="SocietyDisplayContainer">
                <div className="SideBar">
                    <AdminMenu />
                </div>
                <div className="Testimonial_DetailContainer">
                    <AdminHeader />
                    <div className="NoticeDisplayContainer" style={{ padding: '30px' }}>
                        <h1 className='AllHeading'>Notice Display</h1>
                        <div className="NoticeDisplayCards" style={{display : "flex", flexWrap : "wrap", gap : "20px" , justifyContent : "space-between"}}>
                            {NoticeDataDisplay?.map((value) => {
                                return (
                                    <Card
                                        title={value.Name}
                                        bordered={false}
                                        extra={
                                            <RiDeleteBin6Line
                                            className="TestBin"
                                            onClick={() => {
                                                NoticeDelete(value._id);
                                            }}
                                            style={{ color: "#d00000" }}
                                            />
                                        }
                                        style={{ width: 400, marginTop: 16, detailStyle }}
                                        >
                                        <p>{value?.Detail}</p>
                                    </Card>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Notice_Display