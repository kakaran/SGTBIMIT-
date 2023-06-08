import React, { useState } from 'react'
import './syllabus.css'
import { Header, Navbar, Footer } from '../../Components'
import BCA from '../../Assets/BCA-SYLLABUS .pdf';
import BCOM from '../../Assets/B.com_Syllabus.pdf';
import BBABI from '../../Assets/BBA-BI-Syllabus.pdf';
import BBA from '../../Assets/BBA-SYLLABUS.pdf';
import { Helmet } from 'react-helmet';
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from 'react-icons/ai'
import { motion } from 'framer-motion';
import { routingAnimations } from '../../constants';

// File imports

import bca_sem1 from '../../Assets/bca/1st_Sem.pdf'
import bca_sem2 from '../../Assets/bca/2nd_Sem.pdf'
import bca_sem3 from '../../Assets/bca/3rd_Sem.pdf'
import bca_sem4 from '../../Assets/bca/4th_Sem.pdf'
import bca_sem5 from '../../Assets/bca/5th_Sem.pdf'
import bca_sem6 from '../../Assets/bca/6th_Sem.pdf'


import bba_sem2 from '../../Assets/bba/2nd_Sem.pdf'
import bba_sem3 from '../../Assets/bba/3rd_Sem.docx'
import bba_sem4 from '../../Assets/bba/4th_Sem.doc'
import bba_sem5 from '../../Assets/bba/5th_Sem.docx'
import bba_sem6 from '../../Assets/bba/6th_Sem.doc'

import bcom_sem1 from '../../Assets/bcom/1st_Sem.docx'
import bcom_sem2 from '../../Assets/bcom/2nd_Sem.docx'

import bba_bi_sem3 from '../../Assets/bbabi/3rd_Sem.docx'
import bba_bi_sem4 from '../../Assets/bbabi/4th_Sem.docx'
import bba_bi_sem5 from '../../Assets/bbabi/5th_Sem.docx'
import bba_bi_sem6 from '../../Assets/bbabi/6th_Sem.docx'

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
            sems: [{
                name: "Semester 1",
                file: bca_sem1,
            },
            {
                name: "Semester 2",
                file: bca_sem2,
            },
            {
                name: "Semester 3",
                file: bca_sem3,
            },
            {
                name: "Semester 4",
                file: bca_sem4,
            },
            {
                name: "Semester 5",
                file: bca_sem5,
            },
            {
                name: "Semester 6",
                file: bca_sem6,
            },
            ],
        },
        {
            name: "Bachelor of Business Administration (BBA)",
            link: BBA,
            sems: [{
                name: "Semester 2",
                file: bba_sem2,
            },
            {
                name: "Semester 3",
                file: bba_sem3,
            },
            {
                name: "Semester 4",
                file: bba_sem4,
            },
            {
                name: "Semester 5",
                file: bba_sem5,
            },
            {
                name: "Semester 6",
                file: bba_sem6,
            },

            ],
        },
        {
            name: "Bachelor of Business Administration (BBA(B&I))",
            link: BBABI,
            sems: [{
                name: "Semester 3",
                file: bba_bi_sem3,
            },
            {
                name: "Semester 4",
                file: bba_bi_sem4,
            },
            {
                name: "Semester 5",
                file: bba_bi_sem5,
            },
            {
                name: "Semester 6",
                file: bba_bi_sem6,
            },
            ],
        },
        {
            name: "Bachelor of Commerce (B.COM)",
            link: BCOM,
            sems: [{
                name: "Semester 1",
                file: bcom_sem1,
            },
            {
                name: "Semester 2",
                file: bcom_sem2,
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
