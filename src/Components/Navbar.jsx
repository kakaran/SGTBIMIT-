import React, { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import useFetch from '../useFetch'
export default function Navbar() {
  const { data: events, isPending } = useFetch(`${process.env.REACT_APP_API_URL}/Eventhandler/EventHandler_Display`)

  const arrow = require("../images/down.png")
  const { data: societies } = useFetch(`${process.env.REACT_APP_API_URL}/Society/Society_Display`)

  const myRef = useRef(null)
  useEffect(() => {
    document.querySelector(".menu").addEventListener("click", e => {
      document.querySelector("nav").style.transform = "translateX(0%)"
      document.querySelector("nav").style.visibility = "visible"
    })
    document.querySelector(".nav-close-btn").addEventListener("click", () => {
      document.querySelector("nav").style.transform = "translateX(-100%)"
      document.querySelector("nav").style.visibility = "hidden"
    })
    if (document.body.offsetWidth < 1000) {

      document.querySelectorAll(".dropdown").forEach(dropdown => {
        dropdown.style.display = "none"
      })
      document.querySelectorAll(".nav-item>*:first-child").forEach((link, i) => {
        link.addEventListener("click", e => {
          const dropdowns = document.querySelectorAll(`.dropdown`)
          dropdowns.forEach((dropdown, j) => {
            if (dropdown.dataset.index === `${i}`) {
              if (dropdown.style.display === "none") {
                dropdown.style.display = "block"
                return
              }
              dropdown.style.display = "none"
            }
          })
        })
      })
    }
  }, [])

  const handleFloatClick = (e) => {
    console.log(myRef)
    document.querySelector(".admission-dialog").classList.add("show")
    document.querySelector(".admission-bg").classList.add("show-bg")
  }

  return (
    <>
      <div className="floating-btn"
        onClick={(e) => { handleFloatClick(e) }}
      >
        ADMISSION
      </div>
      <nav>
        <div className='nav-close mobile'><img src={require("../images/cancel.png")} alt="cant load" className='nav-close-btn' /></div>
        <div className="header-btns mobile-header-btns mobile">
          <button className="admission-btn" type="button" onClick={() => {
            document.querySelector(".admission-dialog").classList.add("show")
          }}>CLICK HERE FOR ADMISSIONS</button>
          <button className="student-login-btn" type="button">STUDENT - ERP LOGIN</button>
        </div>
        <div className="nav-item" data-index="0">
          <div><NavLink to="/" className='nav-item'>HOME</NavLink></div>
        </div>
        <div className="nav-item" data-index="1">
          <div> ABOUT US<img src={arrow} alt="" /></div>
          <div className="dropdown" data-index="1">
            <NavLink to="/about/governing-body" className={({ isActive }) => isActive ? 'dropdown-active-item' : 'non-active'}>
              <div className="dropdown-item">GOVERNING BODY</div>
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'dropdown-active-item about-nav-link' : 'non-active'}>
              <div className="dropdown-item">ABOUT SGTBIMIT</div>
            </NavLink>
            <NavLink to="/about/vision-and-mission" className={({ isActive }) => isActive ? 'dropdown-active-item' : 'non-active'}>
              <div className="dropdown-item">VISION AND MISSION</div>
            </NavLink>
          </div>

        </div>
        <div className="nav-item" data-index="2">
          <div>ACADEMICS<img src={arrow} alt="" /></div>
          <div className="dropdown" data-index="2">
            <div className="dropdown-item courses-dropdown-container">
              <div className={({ isActive }) => isActive ? 'dropdown-active-item' : 'non-active'}>COURSES</div>
              <div className="dropdown courses-dropdown">
                <NavLink to="/academics/courses/bca" className={({ isActive }) => isActive ? 'dropdown-active-item' : 'non-active'}>
                  <div className="dropdown-item">BCA</div>
                </NavLink>
                <NavLink to="/academics/courses/bba" className={({ isActive }) => isActive ? 'dropdown-active-item' : 'non-active'}>
                  <div className="dropdown-item">BBA</div>
                </NavLink>
                <NavLink to="/academics/courses/bbab&i" className={({ isActive }) => isActive ? 'dropdown-active-item' : 'non-active'}>
                  <div className="dropdown-item">BBA(B&I)</div>
                </NavLink>
                <NavLink to="/academics/courses/bcom" className={({ isActive }) => isActive ? 'dropdown-active-item' : 'non-active'}>
                  <div className="dropdown-item">BCOM</div>
                </NavLink>
              </div>
            </div>
            <NavLink to="/academics/examinations" className={({ isActive }) => isActive ? 'dropdown-active-item' : 'non-active'}>
              <div className="dropdown-item">EXAMINATIONS</div>
            </NavLink>
            <NavLink to="/academics/prev-year-papers" className={({ isActive }) => isActive ? 'dropdown-active-item' : 'non-active'}>
              <div className="dropdown-item">PREVIOUS YEAR PAPERS</div>
            </NavLink>
            <NavLink to="/academics/syllabus" className={({ isActive }) => isActive ? 'dropdown-active-item' : 'non-active'}>
              <div className="dropdown-item">SYLLABUS</div>
            </NavLink>
            <NavLink to="/academics/academic-calender" className={({ isActive }) => isActive ? 'dropdown-active-item' : 'non-active'}>
              <div className="dropdown-item">ACADEMIC CALENDAR</div>
            </NavLink>
            <NavLink to="/academics/e-resources" className={({ isActive }) => isActive ? 'dropdown-active-item' : 'non-active'}>
              <div className="dropdown-item">E-RESOURCES</div>
            </NavLink>
            <NavLink to="/academics/research" className={({ isActive }) => isActive ? 'dropdown-active-item' : 'non-active'}>
              <div className="dropdown-item">RESEARCH & DEVELOPMENT</div>
            </NavLink>
            <NavLink to="/academics/faculty" className={({ isActive }) => isActive ? 'dropdown-active-item' : 'non-active'}>
              <div className="dropdown-item">FACULTY MEMBERS</div>
            </NavLink>
          </div>

        </div>
        <div className="nav-item" data-index="3">
          <div>ADMISSION<img src={arrow} alt="" /></div>
          <div className="dropdown" data-index="3">
            <NavLink to="/admission/fees" className={({ isActive }) => isActive ? 'dropdown-active-item' : 'non-active'}>
              <div className="dropdown-item">FEES</div>
            </NavLink>
            <NavLink to="/admission/courses-eligibility" className={({ isActive }) => isActive ? 'dropdown-active-item' : 'non-active'}>
              <div className="dropdown-item">COURSES ELIGIBILITY</div>
            </NavLink>
            <NavLink to="/admission/notices" className={({ isActive }) => isActive ? 'dropdown-active-item' : 'non-active'}>
              <div className="dropdown-item">NOTICES</div>
            </NavLink>
          </div>

        </div>
        <div className="nav-item" data-index="4">
          <div>ALUMINI<img src={arrow} alt="" /></div>
          <div className="dropdown" data-index="4">
            <NavLink to="/alumini/alumini-meet" className={({ isActive }) => isActive ? 'dropdown-active-item' : 'non-active'}>
              <div className="dropdown-item">ALUMINI MEET</div>
            </NavLink>
            <NavLink to="/alumini/testimonials" className={({ isActive }) => isActive ? 'dropdown-active-item' : 'non-active'}>
              <div className="dropdown-item">TESTIMONIALS</div>
            </NavLink>
            <NavLink to="/alumini/gallery" className={({ isActive }) => isActive ? 'dropdown-active-item' : 'non-active'}>
              <div className="dropdown-item">GALLERY</div>
            </NavLink>
            <NavLink to="/alumini/registration" className={({ isActive }) => isActive ? 'dropdown-active-item' : 'non-active'}>
              <div className="dropdown-item">REGISTRATION</div>
            </NavLink>
          </div>

        </div>
        {/* <div className="nav-item" data-index="5">
          <div>SOCIETY<img src={arrow} alt="" /></div>
          <div className="dropdown" data-index="5">
            {societies && societies.map((society) => {
              return (
                <NavLink to={`/society/${society._id}`} className={({ isActive }) => isActive ? 'dropdown-active-item' : 'non-active'} key={society._id}>
                  <div className="dropdown-item">{society.title}</div>
                </NavLink>
              )
            })}
          </div>

        </div> */}
        <div className="nav-item" data-index="6">
          <div>SOCIETY & CLUB<img src={arrow} alt="" /></div>
          <div className="dropdown" data-index="6">
            {events && events.map((event, i) => (
              <NavLink to={`/events/${event._id}`} className={({ isActive }) => isActive ? 'dropdown-active-item' : 'non-active'}>
                <div className="dropdown-item" style={{textTransform: "uppercase"}}> {event.name} </div>
              </NavLink>
            ))}
          </div>

        </div>
        <div className="nav-item" data-index="7">
          <div>INDUSTRY INTERFACE<img src={arrow} alt="" /></div>
          <div className="dropdown" data-index="7">
            <NavLink to="/industry/industrial-visit" className={({ isActive }) => isActive ? 'dropdown-active-item' : 'non-active'}>
              <div className="dropdown-item">INDUSTRIAL VISIT</div>
            </NavLink>
            <NavLink to="/industry/placements" className={({ isActive }) => isActive ? 'dropdown-active-item' : 'non-active'}>
              <div className="dropdown-item">PLACEMENTS</div>
            </NavLink>
            <NavLink to="/industry/summer-internship" className={({ isActive }) => isActive ? 'dropdown-active-item' : 'non-active'}>
              <div className="dropdown-item">SUMMER INTERNSHIP</div>
            </NavLink>
            <NavLink to="/industry/corporate-speak" className={({ isActive }) => isActive ? 'dropdown-active-item' : 'non-active'}>
              <div className="dropdown-item">CORPORATE SPEAK</div>
            </NavLink>
          </div>

        </div>
        {/* <div className="nav-item" data-index="8">
          <div>NAAC<img src={arrow} alt="" /></div>
          <div className="dropdown left-dropdown" data-index="8">
            <NavLink to="/naac/r&d" className={({ isActive }) => isActive ? 'dropdown-active-item' : 'non-active'}>
              <div className="dropdown-item">R&D</div>
            </NavLink>
            <NavLink to="/naac/iqac" className={({ isActive }) => isActive ? 'dropdown-active-item' : 'non-active'}>
              <div className="dropdown-item">IQAC</div>
            </NavLink>
            <NavLink to="/naac/student-welfare" className={({ isActive }) => isActive ? 'dropdown-active-item' : 'non-active'}>
              <div className="dropdown-item">STUDENT WELFARE</div>
            </NavLink>
            <NavLink to="/naac/edic" className={({ isActive }) => isActive ? 'dropdown-active-item' : 'non-active'}>
              <div className="dropdown-item">EDIC</div>
            </NavLink>
            <NavLink to="/academics/co-po-mapping" className={({ isActive }) => isActive ? 'dropdown-active-item' : 'non-active'}>
              <div className="dropdown-item">CO-PO MAPPING</div>
            </NavLink>
          </div>
        </div> */}
      </nav>
    </>
  )
}
