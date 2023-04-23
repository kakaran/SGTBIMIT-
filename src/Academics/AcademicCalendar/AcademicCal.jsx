import React from 'react'
import './academiccal.css'
import { Header, Navbar, Footer, Loader } from '../../Components'
import useFetch from '../../useFetch'
import { Helmet } from 'react-helmet'

export default function AcademicCal() {
    const { data: calendar, isPending } = useFetch(`${process.env.REACT_APP_API_URL}/Calendar/CalendarDisplay`)
    console.log(calendar && calendar)

    return (
        <>
            <Helmet title="SGTBIMIT | Acamdeic Calendar" />
            <Header />
            <Navbar />

            <section className='acad-cal'>
                <h1>Academic Calendar</h1>
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
            </section>
            <Footer />
        </>
    )
}
