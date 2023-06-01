import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'
import { IoMdExit, IoMdSchool } from 'react-icons/io'


const MobileNav = () => {
    const [society, setSociety] = useState([])

    const [aboutToggle, setAboutToggle] = useState(false)
    const [academicsToggle, setAcademicsToggle] = useState(false)
    const [coursesToggle, setCoursesToggle] = useState(false)
    const [admissionToggle, setAdmissionToggle] = useState(false)
    const [alumniToggle, setAlumniToggle] = useState(false)
    const [societyToggle, setSocietyToggle] = useState(false)
    const [industryToggle, setIndustryToggle] = useState(false)
    const navigate = useNavigate()

    const navItemStyle = 'rounded-md bg-red-200 p-4 primary-clr cursor-pointer my-text-2'
    const textstyle = "my-bold px-4 py-1 my-3"
    const btnStyle = 'gap-2 flex items-center px-4 py-2 primary-bg-clr text-white my-text-2 rounded-md'

    useEffect(() => {
        const fetchSociety = async () => {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/Eventhandler/EventHandler_Display`)
            const data = await res.json()
            setSociety(data)
        }
        fetchSociety()
    }, [])

    const borderStyle = {
        borderBottom: "1px solid var(--primary-clr)"
    }



    return (
        <nav className="flex flex-col gap-4 justify-between bg-red-100 p-4 rounded-lg">
            <div className="flex justify-between gap-2">
                <button onClick={() => {
                    document.querySelector(".admission-dialog").classList.add("show")
                    document.querySelector(".admission-bg").classList.add("show-bg")
                }} type="button" className={btnStyle}><IoMdSchool /><span className='my-bold'>Enroll for Admissions</span></button>
                <button type="button" className={btnStyle}><IoMdExit /><span className='my-bold'>Student - ERP Login</span></button>
            </div>
            <div className={navItemStyle} onClick={() => { navigate('/') }}>
                <div className='my-bold' onClick={() => { navigate("/") }}>Home</div>
            </div>
            <div className={navItemStyle}>
                <div className='flex justify-between items-center' onClick={() => { setAboutToggle(!aboutToggle) }}>
                    <div className="my-bold">About Us</div>
                    {aboutToggle ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />}
                </div>
                <div className={`grid ${aboutToggle ? "grid-show" : "grid-hide"} transition-all`}>
                    <div className='overflow-hidden'>
                        <div className={textstyle} onClick={() => { navigate('/about/governing-body') }} style={borderStyle}>
                            Governing Body
                        </div>
                        <div className={textstyle} onClick={() => { navigate('/about') }} style={borderStyle}>
                            About Us
                        </div>
                        <div className={textstyle} onClick={() => { navigate('/about/vision-and-mission') }} style={borderStyle}>
                            Vission and Mission
                        </div>
                    </div>
                </div>
            </div>

            <div className={navItemStyle}>
                <div className='flex justify-between items-center' onClick={() => { setAcademicsToggle(!academicsToggle) }}>
                    <div className="my-bold">Academics</div>
                    {academicsToggle ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />}
                </div>
                <div className={`grid ${academicsToggle ? "grid-show" : "grid-hide"} transition-all`}>
                    <div className='overflow-hidden'>
                        <div className='flex justify-between items-center px-4 py-1 mt-3' onClick={() => { setCoursesToggle(!coursesToggle) }} style={borderStyle}>
                            <div className="my-bold">Courses</div>
                            {coursesToggle ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />}
                        </div>
                        <div className={`grid ${coursesToggle ? "grid-show" : "grid-hide"} transition-all`}>
                            <div className='overflow-hidden'>
                                <div typeof='button' className='my-bold mx-4 my-3' onClick={() => { navigate('/academics/courses/bca') }} style={borderStyle}>
                                    BCA
                                </div>
                                <div className='my-bold mx-4 my-3' onClick={() => { navigate('/academics/courses/bba') }} style={borderStyle}>
                                    BBA
                                </div>
                                <div className='my-bold mx-4 my-3' onClick={() => { navigate('/academics/courses/bbab&i') }} style={borderStyle}>
                                    BBA(B&I)
                                </div>
                                <div className='my-bold mx-4 my-3' onClick={() => { navigate('/academics/courses/bcom') }} style={borderStyle}>
                                    BCOM
                                </div>
                            </div>
                        </div>
                        <div className={textstyle} onClick={() => { navigate('/academics/examinations') }} style={borderStyle}>
                            Examinations
                        </div>
                        <div className={textstyle} onClick={() => { navigate('/academics/prev-year-papers') }} style={borderStyle}>
                            Previous Year Papers
                        </div>
                        <div className={textstyle} onClick={() => { navigate('/academics/syllabus') }} style={borderStyle}>
                            Syllabus
                        </div>
                        <div className={textstyle} onClick={() => { navigate('/academics/academic-calender') }} style={borderStyle}>
                            Academic Calender
                        </div>
                        <div className={textstyle} onClick={() => { navigate('/academics/e-resources') }} style={borderStyle}>
                            E-Resources
                        </div>
                        <div className={textstyle} onClick={() => { navigate('/academics/prev-year-papers') }} style={borderStyle}>
                            Research & Development
                        </div>
                        <div className={textstyle} onClick={() => { navigate('/academics/faculty') }} style={borderStyle}>
                            Faculty Members
                        </div>
                    </div>
                </div>
            </div>

            <div className={navItemStyle}>
                <div className='flex justify-between items-center' onClick={() => { setAdmissionToggle(!admissionToggle) }}>
                    <div className="my-bold">Admission</div>
                    {admissionToggle ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />}
                </div>
                <div className={`grid ${admissionToggle ? "grid-show" : "grid-hide"} transition-all`}>
                    <div className='overflow-hidden'>
                        <div className={textstyle} onClick={() => { navigate('/admission/fees') }} style={borderStyle}>
                            Fees
                        </div>
                        <div className={textstyle} onClick={() => { navigate('/admission/courses-eligibility') }} style={borderStyle}>
                            Courses Eligibility
                        </div>
                        <div className={textstyle} onClick={() => { navigate('/admission/notices') }} style={borderStyle}>
                            Notices
                        </div>
                    </div>
                </div>
            </div>

            <div className={navItemStyle}>
                <div className='flex justify-between items-center' onClick={() => { setAlumniToggle(!alumniToggle) }}>
                    <div className="my-bold">Alumni</div>
                    {alumniToggle ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />}
                </div>
                <div className={`grid ${alumniToggle ? "grid-show" : "grid-hide"} transition-all`}>
                    <div className='overflow-hidden'>
                        <div className={textstyle} onClick={() => { navigate('/alumini/alumini-meet') }} style={borderStyle}>
                            Alumni Meet
                        </div>
                        <div className={textstyle} onClick={() => { navigate('/alumini/testimonials') }} style={borderStyle}>
                            Testimonials
                        </div>
                        <div className={textstyle} onClick={() => { navigate('/alumini/gallery') }} style={borderStyle}>
                            Gallery
                        </div>
                        <div className={textstyle} onClick={() => { navigate('/alumini/registration') }} style={borderStyle}>
                            Registeration
                        </div>
                    </div>
                </div>
            </div>

            <div className={navItemStyle}>
                <div className='flex justify-between items-center' onClick={() => { setSocietyToggle(!societyToggle) }}>
                    <div className="my-bold">Societies & Clubs</div>
                    {societyToggle ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />}
                </div>
                <div className={`grid ${societyToggle ? "grid-show" : "grid-hide"} transition-all`}>
                    <div className='overflow-hidden'>
                        {society.map(soc => (
                            <div key={soc._id} className={textstyle} onClick={() => { navigate(`/events/${soc._id}`) }} style={borderStyle}>
                                {soc.name}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className={navItemStyle}>
                <div className='flex justify-between items-center' onClick={() => { setIndustryToggle(!industryToggle) }}>
                    <div className="my-bold">Industry Interface</div>
                    {industryToggle ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />}
                </div>
                <div className={`grid ${industryToggle ? "grid-show" : "grid-hide"} transition-all`}>
                    <div className='overflow-hidden'>
                        <div className={textstyle} onClick={() => { navigate('/industry/industrial-visit') }} style={borderStyle}>
                            Industrial Visit
                        </div>
                        <div className={textstyle} onClick={() => { navigate('/industry/placements') }} style={borderStyle}>
                            Placements
                        </div>
                        <div className={textstyle} onClick={() => { navigate('/industry/summer-internship') }} style={borderStyle}>
                            Summer Internship
                        </div>
                        <div className={textstyle} onClick={() => { navigate('/industry/corporate-speak') }} style={borderStyle}>
                            Corporate Speak
                        </div>
                    </div>
                </div>
            </div>

        </nav>
    )
}

export default MobileNav