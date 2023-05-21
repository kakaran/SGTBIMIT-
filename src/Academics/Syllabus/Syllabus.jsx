import React, { useState } from 'react'
import './syllabus.css'
import { Header, Navbar, Footer } from '../../Components'
import BCA from '../../Assets/BCA-SYLLABUS .pdf';
import BCOM from '../../Assets/B.com_Syllabus.pdf';
import BBABI from '../../Assets/BBA-BI-Syllabus.pdf';
import BBA from '../../Assets/BBA-SYLLABUS.pdf';
import { Helmet } from 'react-helmet';

export default function Syllabus() {
    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if (selected === i) {
            setSelected(null)
            return
        }
        setSelected(i)

    }

    const courses = [
        {
            name: "Bachelor of Computer Applications (BCA)",
            link: BCA,
            subjects: ["Programming Languages", "Mathematics", "Physics, Accounting", "Management", "Computers, Networks, etc."],
        },
        {
            name: "Bachelor of Business Administration (BBA)",
            link: BBA,
            subjects: ["Management", "Mathematics", "Accounting", "Economics", "Marketing, etc."],
        },
        {
            name: "Bachelor of Business Administration (BBA(B&I))",
            link: BBABI,
            subjects: ["Management", "Mathematics", "Accounting", "Economics", "Insurance, Law, etc."],
        },
        {
            name: "Bachelor of Commerce (B.COM)",
            link: BCOM,
            subjects: ["Management", "Mathematics, Statistics", "Accounting", "Economics", "Marketing, IT, etc."],
        },
    ]

    /* const sub1 = [
        {
            course: "BBA",
            s1: "Management",
            s2: "Mathematics",
            s3: "Accounting",
            s4: "Economics",
            s5: "Marketing,etc."
        },
        {
            course: "BCA",
            s1: "Programming Languages",
            s2: "Mathematics",
            s3: "Physics,Accounting",
            s4: "Management",
            s5: "Computers,Networks,etc."
        },
    ]

    const sub2 = [
        {
            course: "BBA(B&I)",
            s1: "Management",
            s2: "Mathematics",
            s3: "Accounting",
            s4: "Economics",
            s5: "Insurance,Law,etc."
        },
        {
            course: "BCOM",
            s1: "Management",
            s2: "Mathematics,Statistics",
            s3: "Accounting",
            s4: "Economics",
            s5: "Marketing,IT,etc."
        },
    ] */

    return (
        <>
            <Helmet title="SGTBIMIT | Syllabus" />
            <Header />
            <Navbar />
            {/* <div className="syllabus">
                    <h1>SYLLABUS</h1>
                    <div className="imptop">
                        <table>
                            <tr>
                                <th>COURSES</th>
                                <th>IMPORTANT SUBJESTS</th>
                            </tr>
                            {sub1.map((v,k)=>{
                                return(
                                    <tr key={k}>
                                        <th>{v.course}</th>
                                        <td>
                                            <p>Subjects you would be learning majorly:
                                                <ul>
                                                    <li>{v.s1}</li>
                                                    <li>{v.s2}</li>
                                                    <li>{v.s3}</li>
                                                    <li>{v.s4}</li>
                                                    <li>{v.s5}</li>
                                                </ul>
                                            </p>
                                        </td>
                                    </tr>
                                )
                            })}
                        </table>
                        <table>
                            <tr>
                                <th>COURSES</th>
                                <th>IMPORTANT SUBJESTS</th>
                            </tr>
                            {sub2.map((v,k)=>{
                                return(
                                    <tr key={k}>
                                        <th>{v.course}</th>
                                        <td>
                                            <p>Subjects you would be learning majorly:
                                                <ul>
                                                    <li>{v.s1}</li>
                                                    <li>{v.s2}</li>
                                                    <li>{v.s3}</li>
                                                    <li>{v.s4}</li>
                                                    <li>{v.s5}</li>
                                                </ul>
                                            </p>
                                        </td>
                                    </tr>
                                )
                            })}
                        </table>
                    </div>
                    <div className="t">
                        <table>
                            <tr>
                                <th>COURSES</th>
                                <th>PDF (DOWNLOAD)</th>
                            </tr>
                            {s.map((v,k)=>{
                                return(
                                    <tr key={k}>
                                        <td>{v.course}</td>
                                        <td><a href={v.link} download>PDF</a></td>
                                    </tr>
                                )
                            })}
                        </table>
                    </div>
                </div> */}

            <section className="syllabus">
                <div className="w-[min(1200px,100%)] flex flex-col gap-5 mx-auto">
                    {courses.map((course, i) => (
                        <div className="flex flex-col transition-all" key={i}>
                            <div className="flex justify-between  items-center bg-[#004180] rounded-full p-8 text-white cursor-pointer my-bold text-[min(1.25rem,2.5vw)]" onClick={(e) => { toggle(i) }}>
                                <h2 className='m-0'>{course.name}</h2>
                                <span>{selected === i ? "-" : "+"}</span>
                            </div>
                            <div className={`grid transition-all ${selected === i ? "grid-show" : "grid-hide"}`}>
                                <div>
                                    {course.subjects.map((subject, i) => (
                                        <div>{subject}</div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </>
    )
}
