import React from "react"
import { Header, Navbar, Footer, Loader } from '../../Components'
import "./Notices.css"
import useFetch from "../../useFetch"
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet"
import { motion } from "framer-motion"
import { routingAnimations } from "../../constants"
import {SlArrowDown} from "react-icons/sl"

export default function Notice() {

    const { data: notices, isPending } = useFetch(`${process.env.REACT_APP_API_URL}/Notice/Notice_Data_Display`)

    return (
        <>
            <Helmet title="SGTBIMIT | Notices" />
            <Header />
            <Navbar />
            <>
                <motion.section className="notices-section"
                    viewport='viewport'
                    initial='initial'
                    animate='animate'
                    exit='exit'
                    transition='transition'
                    variants={routingAnimations}
                >
                    <h1>NOTICES</h1>

                <div className="drop">
                    <select>
                        {/* <option value="categories">Select a Category</option> */}
                        <option value="academics">ACADEMICS</option>
                        <option value="admission">ADMISSION</option>
                        <option value="others">OTHERS</option>
                    </select>
                </div>
                    {isPending && <Loader />}
                    <div className="notices-grid">
                        {notices && notices.map((notice) => (
                            <div className="notice-card" key={notice._id}>
                                <h1>{notice.Name}</h1>
                                <p> {notice.Detail} </p>
                                <div className="notice-file">
                                    <Link to={`/admission/notices/${notice._id}`} target="_blank">
                                        Read More <SlArrowDown />
                                    </Link>
                                </div>
                            </div>

                        )).reverse()}
                    </div>
                </motion.section>
            </>
            <Footer />
        </>
    )
}
