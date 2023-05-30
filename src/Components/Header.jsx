import React, { useEffect, useState } from 'react'
import Admission from './Admission'
import "./components.css"
import useFetch from '../useFetch'
import { Link } from 'react-router-dom'
import { IoMdSchool, IoMdExit } from 'react-icons/io'
import logo from '../images/sgtbimit.png'
import menuImg from '../images/menu.png'
import MobileNav from './MobileNav'

export default function Header() {
  const [mobileToggle, setMobileToggle] = useState(false)
  const { data: notices } = useFetch(`${import.meta.env.VITE_API_URL}/Notice/Notice_Data_Display`)
  const filteredNotices = notices ? notices.filter((notice) => (
    notice.Categories === "Important"
  )) : null

  useEffect(() => {
    document.querySelector(".admission-btn").addEventListener("click", (e) => {
      document.querySelector(".admission-dialog").classList.add("show")
      document.querySelector(".admission-bg").classList.add("show-bg")
    })
    // window.addEventListener("resize", () => {
    //   if (window.innerWidth > 1024) {
    //     setMobileToggle(false)
    //   }
    // })
  }, [])

  const buttonStyle = {
    display: "flex",
    justifyContent: "center",
    margin: "auto",
    alignItems: "center",
    gap: "1rem"
  }

  return (


    <header>
      <script src="//code.tidio.co/djv7qpldihqart98bhpeazlxworceabc.js" async></script>
      <Admission />
      <div className="header-top">
        <div className="logo">
          <img src={logo} alt="" />
        </div>

        <div className="clg-heading-wrapper max-lg:hidden">
          <p className="clg-heading">
            SRI GURU TEGH BAHADUR INSTITUTE OF MANAGEMENT AND INFORMATION TECHNOLOGY
          </p>
          <p className="clg-sub-heading">
            (AFFILIATED TO GURU GOBIND SINGH INDRAPRASTHA UNIVERSITY)
          </p>
          <p className="clg-committee">
            (UNDER THE MANAGEMENT OF DELHI SIKH GURUDWARA MANAGEMENT COMMITTEE)
          </p>
        </div>
        <div className="header-btns max-lg:hidden">
          <button className="admission-btn" type="button"><span style={buttonStyle}><IoMdSchool />Enroll for Admissions</span></button>
          <button className="student-login-btn" type="button"><span style={buttonStyle}><IoMdExit />Student - ERP Login</span></button>
        </div>
        <div className="hidden max-lg:block p-5">
          <img src={menuImg} alt="" height={"50px"} className="menu" onClick={() => { setMobileToggle(!mobileToggle) }} />
        </div>
      </div>
      <div className={`grid ${mobileToggle ? "grid-show" : "grid-hide"} transition-all lg:hidden`}>
        <div className='overflow-hidden'>
          <MobileNav />
        </div>
      </div>
      <div className="header-news">
        <marquee direction="left">
          {notices && filteredNotices.map((notice) => (
            <span key={notice._id}>
              <Link
                to={`/admission/notices/${notice._id}`}
                target='_blank'
                className='text-[20px] uppercase text-blue-700 hover:text-red-700'
              >
                {` ${notice.Name}`}
              </Link>
              <span> ||</span>
            </span>
          ))}
        </marquee>
      </div>
    </header>
  )
}
