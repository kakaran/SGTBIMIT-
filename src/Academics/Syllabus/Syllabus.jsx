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
                <div className="w-[min(1200px,100%)] flex flex-col gap-5 mx-auto">
                    {courses.map((course, i) => (
                        <div className="flex flex-col transition-all" key={i}>
                            <div className="flex justify-between  items-center bg-[#004180] rounded-lg p-8 text-white cursor-pointer  text-[min(1.25rem,2.5vw)]" onClick={(e) => { toggle(i) }}>
                                <h2 className='m-0 my-bold'>{course.name}</h2>
                                <span className='my-bold text-[min(3rem,5vw)]'>{selected === i ? <AiOutlineMinusSquare /> : <AiOutlinePlusSquare />}</span>
                            </div>
                            <div className={`grid transition-all ${selected === i ? "grid-show" : "grid-hide"}`}>
                                <div className='overflow-hidden'>
                                    <div className='flex flex-col p-7 my-5 bg-[var(--primary-blue)] text-white rounded-lg text-[min(2rem,4vw)]'>
                                        <div className='flex flex-col gap-2'>
                                            <h1 className='my-bold my-2 pb-2' style={{ borderBottom: "2px solid white" }}>Subjects</h1>
                                            <div className='flex flex-col gap-4 m-4'>
                                                {course.subjects.map((subject, i) => (
                                                    <div className='my-md'>{subject}</div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className='mx-auto'>
                                            <a href={course.link} className='text-white no-underline bg-[var(--primary-clr)] px-8 py-2 rounded-full my-md' download>
                                                Download PDF
                                            </a>
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
