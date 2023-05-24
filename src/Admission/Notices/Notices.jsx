import React, { useEffect, useState } from "react"
import { Header, Navbar, Footer, Loader } from '../../Components'
import "./Notices.css"
import useFetch from "../../useFetch"
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet"
import { motion } from "framer-motion"
import { routingAnimations } from "../../constants"
import { SlArrowDown } from "react-icons/sl"
import _ from 'lodash'



export default function Notice() {

    const [notices, setNotices] = useState([])
    const [options, setOptions] = useState([])
    const [searched, setSearched] = useState([])
    const [search, setSearch] = useState(false)

    const handleOptionChange = (e) => {
        if (e.target.value) {
            setSearched(notices.filter(notice => notice.Categories === e.target.value))
            setSearch(true)
        } else {
            setSearch(false)
        }
    }

    const fetchData = async () => {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/Notice/Notice_Data_Display`)
        const data = await res.json()
        setNotices(data)
        setOptions(_.uniqBy(data, obj => obj.Categories))
        console.log(options);
    }
    useEffect(() => {
        fetchData()
    }, [])
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
                        <select onChange={handleOptionChange}>
                            <option value={null}>All Notices</option>
                            {options?.map(opt => (
                                <option value={opt.Categories}>{opt.Categories}</option>
                            ))}
                        </select>
                    </div>
                    {!notices && <Loader />}
                    <div className="notices-grid">
                        {(notices && !search) && notices.map((notice) => (
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
                        {(searched && search) && searched.map((notice) => (
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
