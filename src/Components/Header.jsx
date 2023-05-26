import React, { useEffect } from 'react'
import Admission from './Admission'
import "./components.css"
import useFetch from '../useFetch'
import { Link } from 'react-router-dom'
import { IoMdSchool, IoMdExit } from 'react-icons/io'
import logo from '../images/sgtbimit.png'
import menuImg from '../images/menu.png'

export default function Header() {
  const { data: notices } = useFetch(`${import.meta.env.VITE_API_URL}/Notice/Notice_Data_Display`)
  const filteredNotices = notices ? notices.filter((notice) => (
    notice.Categories === "Important"
  )) : null

  useEffect(() => {
    document.querySelector(".admission-btn").addEventListener("click", (e) => {
      document.querySelector(".admission-dialog").classList.add("show")
      document.querySelector(".admission-bg").classList.add("show-bg")
    })
  }, [])

  const buttonStyle = {
    display: "flex",
    justifyContent: "space-between",
    width: "210px",
    margin: "auto",
    alignItems: "center",
  }

  return (


    <header>
      <script src="//code.tidio.co/djv7qpldihqart98bhpeazlxworceabc.js" async></script>
      <Admission />
      <div className="header-top">
        <div className="logo">
          <img src={logo} alt="" />
        </div>

        <div className="clg-heading-wrapper">
          <p className="clg-heading">SRI GURU TEGH BAHADUR INSTITUTE OF MANAGEMENT AND INFORMATION TECHNOLOGY</p>
          <p className="clg-sub-heading">
            (AFFILIATED TO GURU GOBIND SINGH INDRAPRASTHA UNIVERSITY)
          </p>
          <p className="clg-committee">
            (UNDER THE MANAGEMENT OF DELHI SIKH GURUDWARA MANAGEMENT COMMITTEE)
          </p>
        </div>
        <div className="desktop header-btns">
          <button className="admission-btn" type="button"><span style={buttonStyle}><IoMdSchool />Enroll for Admissions</span></button>
          <button className="student-login-btn" type="button"><span style={buttonStyle}><IoMdExit />Student - ERP Login</span></button>
        </div>
        <div className="mobile">
          <img src={menuImg} alt="" height={"50px"} className="menu" />
        </div>
      </div>
      <div className="header-news">
        <marquee direction="left">
          {notices && filteredNotices.map((notice) => (
            <span key={notice._id}>
              <Link
                to={`/admission/notices/${notice._id}`}
                target='_blank'
                className='text-[20px]'
              >
                {` ${notice.Name} ||`}
              </Link>
            </span>
          ))}
        </marquee>
      </div>
    </header>
  )
}
