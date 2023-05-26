import React, { useState } from 'react'
import './director.css'
import Navbar from '../Components/Navbar.jsx'
import Header from '../Components/Header.jsx'
import Footer from '../Components/Footer.jsx'
import useFetch from '../useFetch'
import Loader from '../Components/Loader'
export default function DirectorReadMore() {
    const { data, isPending } = useFetch(`${import.meta.env.VITE_API_URL}/Administration/Administration_Display`)
    let directorData = null
    data && (directorData = data.filter((adminis) => (
        adminis._id === "6425708bc6a54569d1944242"
    )))
    console.log(directorData)
    return (
        <>
            <Header></Header>
            <Navbar></Navbar>
            {isPending && <Loader />}
            {directorData &&
                <section className='dir-readmore'>
                    {directorData.map(director => (
                        <>
                            <div className='cont'>
                                <img src={`${import.meta.env.VITE_API_URL}/Administration/AdministrationImageDisplay/${director._id}`} alt="cant load" />
                                <div className='title'>{director.name}
                                    <div className="dir-position">{director.position}</div>
                                </div>

                            </div>
                            <h2>WAHEGURU JI KA KHALSA, WAHEGURU JI KI FATEH!!</h2>
                            <h3>{director.shortNote}<br /> Sri Guru Granth Saheb Ji</h3>
                            <p> {director.longNote} </p>
                        </>
                    ))}
                </section>
            }
            <Footer></Footer>
        </>
    )
}
