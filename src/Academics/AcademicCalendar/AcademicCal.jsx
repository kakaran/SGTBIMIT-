import React from 'react'
import './academiccal.css'
import { Header, Navbar, Footer, Loader } from '../../Components'
import useFetch from '../../useFetch'
import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion'
import { routingAnimations } from '../../constants'

export default function AcademicCal() {
    const { data: calendar, isPending } = useFetch(`${import.meta.env.VITE_API_URL}/Calendar/CalendarDisplay`)
    console.log(calendar && calendar)

    return (
        <>
            <Helmet title="SGTBIMIT | Acamdeic Calendar" />
            <Header />
            <Navbar />

            <motion.section className='acad-cal'
                viewport='viewport'
                initial='initial'
                animate='animate'
                exit='exit'
                transition='transition'
                variants={routingAnimations}
            >
                <h1>ACADEMIC CALENDAR</h1>
                {isPending && <Loader />}
                <div className="cal-container">
                    <div className="cal-grid heading">
                        <div className="cal-date">
                            Proposed Date
                        </div>
                        <div className="cal-event">
                            Event
                        </div>
                    </div>
                    {calendar && calendar.map((cal) => {
                        return (
                            <div className="cal-grid">
                                <div className="cal-date">
                                    {cal.Date}

                                </div>
                                <div className="cal-event">
                                    {cal.Event}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </motion.section>
            <Footer />
        </>
    )
}
