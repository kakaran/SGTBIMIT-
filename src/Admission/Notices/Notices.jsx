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

    const fetchData = async () => {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/Notice/Notice_Data_Display`)
        const data = await res.json()
        setNotices(data)
        setOptions(_.uniqBy(data, obj => obj.Categories))
    }
    const handleOptionChange = (e) => {
        if (e.target.value) {
            console.log(e.target.value);
            setSearched(notices.filter(notice => notice.Categories === e.target.value))
            setSearch(true)
        } else {
            console.log("hi");
            setSearch(false)
            console.log(search);
        }
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
                            <option value="">All Notices</option>
                            {options?.map(opt => (
                                <option value={opt.Categories}>{opt.Categories}</option>
                            ))}
                        </select>
                    </div>
                    {!notices && <Loader />}
                    <div className="notices-grid">
                        {!search && notices.map((notice) => (
                            <div className="notice-card" key={notice._id}>
                                <h1>{notice.Name}</h1>
                                <p> {notice.Detail} </p>
                                <div className="notice-file">
                                    <Link to={`/admission/notices/${notice._id}`} target="_blank" className="flex justify-center items-center gap-4 hover:text-white hover:bg-[var(--secondary-clr)]">
                                        <span className="my-bold">Read More</span>
                                    </Link>
                                </div>
                            </div>
                        )).reverse()}
                        {search && searched.map((notice) => (
                            <div className="notice-card" key={notice._id}>
                                <h1>{notice.Name}</h1>
                                <p className="text-gray-700"> {notice.Detail} </p>
                                <div className="notice-file">
                                    <Link to={`/admission/notices/${notice._id}`} target="_blank" className="flex justify-center items-center gap-4 hover:text-white hover:bg-[var(--secondary-clr)]">
                                        <span className="my-bold">Read More</span>
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
