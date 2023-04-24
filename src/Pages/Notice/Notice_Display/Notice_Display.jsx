import React, { useEffect, useState } from 'react'
import AdminMenu from '../../../Components/AdminMenu/AdminMenu'
import AdminHeader from '../../../Components/AdminHeader/AdminHeader'
import axios from 'axios';
import { Card } from 'antd';


const Notice_Display = () => {
    const[NoticeDataDisplay, setNoticeDataDisplay] = useState();
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
    }, [])

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
                                        title={value?.Name}
                                        bordered={true}
                                        style={{
                                            width: 400,
                                            // fontSize : "20px"
                                        }}
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