import React from 'react'
import './academiccal.css'
import { Header, Navbar, Footer, Loader } from '../../Components'
import useFetch from '../../useFetch'
import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion'
import { routingAnimations } from '../../constants'
import { details } from './Calinfo'

export default function AcademicCal() {
    const { data: calendar, isPending } = useFetch(`${import.meta.env.VITE_API_URL}/Calendar/CalendarDisplay`)
    console.log(calendar && calendar)

    return (
        <>
            <Helmet title="SGTBIMIT | Academic Calendar" />
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
                {/* {isPending && <Loader />}
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
                </div> */}

                <div className='gradient-bg'></div>

                {/* <div className='w-[min(1500px,100%)] p-4 mx-auto grid gap-10'>
                    <div>
                        <h1 className='orange_gradient my-bold my-text-4'>Odd Semester</h1>
                        {details.oddSem.map((item, index) => {
                            return (
                                <div className='my-10'>
                                    <h2 className='blue_gradient my-bold text-3xl'>{item.name}</h2>
                                    <div className='ml-10'>
                                        <div className='text-gray-700 my-bold text-lg'>From : {item.from}</div>
                                        <div className='text-gray-700 my-bold text-lg'>To : {item.to}</div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div>
                        <h1 className='orange_gradient my-bold my-text-4'>Even Semester</h1>
                        {details.evenSem.map((item, index) => {
                            return (
                                <div className='my-10'>
                                    <h2 className='blue_gradient my-bold text-3xl'>{item.name}</h2>
                                    <div className='ml-10'>
                                        <div className='text-gray-700 my-bold text-lg'>From : {item.from}</div>
                                        <div className='text-gray-700 my-bold text-lg'>To : {item.to}</div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div> */}
                <div className='flex justify-between items-center w-[min(1500px,100%)] p-4 mx-auto gap-10'>
                    <h1 className='my-bold blue_gradient my-text-2'>
                        Academic Calendar - All Programmes (2022-2023)
                    </h1>
                    <button
                        type='button'
                        className='my-bold text-2xl px-6 py-2 h-max primary-blue-bg-clr rounded-md'
                        onClick={() => {
                            window.open(`http://www.ipu.ac.in/DAA/acadcalendar/Academic%20Calendar%20for%20All%20prorammes%202022-23.pdf`)
                        }}
                    >
                        <span className='text-white'> PDF </span>
                    </button>
                </div>
            </motion.section>
            <Footer />
        </>
    )
}
