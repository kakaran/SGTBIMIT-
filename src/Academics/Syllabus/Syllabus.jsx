import React, { useState } from 'react'
import './syllabus.css'
import { Header, Navbar, Footer } from '../../Components'
import { Helmet } from 'react-helmet';
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from 'react-icons/ai'
import { motion } from 'framer-motion';
import { routingAnimations } from '../../constants';

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
            link: "/assets/BCA-SYLLABUS.pdf",
            sems: [{
                name: "Semester 1",
                file: "/assets/bca/1st_Sem.pdf",
            },
            {
                name: "Semester 2",
                file: "/assets/bca/2nd_Sem.pdf",
            },
            {
                name: "Semester 3",
                file: "/assets/bca/3rd_Sem.pdf",
            },
            {
                name: "Semester 4",
                file: "/assets/bca/4th_Sem.pdf",
            },
            {
                name: "Semester 5",
                file: "/assets/bca/5th_Sem.pdf",
            },
            {
                name: "Semester 6",
                file: "/assets/bca/6th_Sem.pdf",
            },
            ],
        },
        {
            name: "Bachelor of Business Administration (BBA)",
            link: "/assets/BBA-SYLLABUS.pdf",
            sems: [{
                name: "Semester 2",
                file: "/assets/bba/2nd_Sem.pdf",
            },
            {
                name: "Semester 3",
                file: "/assets/bba/3rd_Sem.docx",
            },
            {
                name: "Semester 4",
                file: "/assets/bba/4th_Sem.doc",
            },
            {
                name: "Semester 5",
                file: "/assets/bba/5th_Sem.docx",
            },
            {
                name: "Semester 6",
                file: "/assets/bba/6th_Sem.doc",
            },

            ],
        },
        {
            name: "Bachelor of Business Administration (BBA(B&I))",
            link: "/assets/BBA-BI-Syllabus.pdf",
            sems: [{
                name: "Semester 3",
                file: "/assets/bbabi/3rd_Sem.docx",
            },
            {
                name: "Semester 4",
                file: "/assets/bbabi/4th_Sem.docx",
            },
            {
                name: "Semester 5",
                file: "/assets/bbabi/5th_Sem.docx",
            },
            {
                name: "Semester 6",
                file: "/assets/bbabi/6th_Sem.docx",
            },
            ],
        },
        {
            name: "Bachelor of Commerce (B.COM)",
            link: "/assets/B.com_Syllabus.pdf",
            sems: [{
                name: "Semester 1",
                file: "/assets/bcom/1st_Sem.docx",
            },
            {
                name: "Semester 2",
                file: "/assets/bcom/2nd_Sem.docx",
            },
            ],
        },
    ]

    return (
        <>
            <Helmet title="SGTBIMIT | Syllabus" />
            <Header />
            <Navbar />

            <motion.section className="syllabus"
                viewport='viewport'
                initial='initial'
                animate='animate'
                exit='exit'
                transition='transition'
                variants={routingAnimations}
            >
                <h1 className='primary-blue my-text-4 text-center my-bold'>SYLLABUS</h1>
                <div className="w-[min(1200px,100%)] flex flex-col gap-5 mx-auto">
                    {courses.map((course, i) => (
                        <div className="flex flex-col transition-all" key={i}>
                            <div className="flex justify-between  items-center bg-[#004180] rounded-lg p-8 text-white cursor-pointer  text-[min(1.25rem,2.5vw)]" onClick={(e) => { toggle(i) }}>
                                <h2 className='m-0 my-bold'>{course.name}</h2>
                                <span className='my-bold text-[min(3rem,5vw)]'>{selected === i ? <AiOutlineMinusSquare /> : <AiOutlinePlusSquare />}</span>
                            </div>
                            <div className={`grid transition-all ${selected === i ? "grid-show" : "grid-hide"}`}>
                                <div className='overflow-hidden'>
                                    <div className='flex flex-col p-7 my-5 primary-blue-bg-clr text-white rounded-lg text-[min(2rem,4vw)]'>
                                        <div className='flex flex-col gap-2'>
                                            <h1 className='my-bold my-2 pb-2' style={{ borderBottom: "2px solid white" }}>Semesters</h1>
                                            <div className='flex flex-col gap-4 m-4'>
                                                {course.sems?.map((sem, i) => (
                                                    <div className='my-md flex justify-between'>
                                                        <div>
                                                            {sem.name}
                                                        </div>
                                                        <div>
                                                            <a href={sem.file} className='text-white no-underline primary-clr px-8 py-2 rounded-full my-md oran' download>
                                                                Download PDF
                                                            </a>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.section>

            <Footer />
        </>
    )
}
