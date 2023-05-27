import React from 'react'
import './faculty.css'
import useFetch from '../../useFetch'
import { Header, Navbar, Footer, Loader } from '../../Components'
import { Helmet } from 'react-helmet'
import _ from 'lodash'
import { motion } from 'framer-motion'
import { routingAnimations } from '../../constants'

export default function Faculty() {
    const { data: facultyData, isPending } = useFetch(`${import.meta.env.VITE_API_URL}/Faculty/Faculty_Display`)

    return (
        <>
            <Helmet title="SGTBIMIT | Faculty" />
            <Header />
            <Navbar />
            <motion.section className='faculty'
                viewport='viewport'
                initial='initial'
                animate='animate'
                exit='exit'
                transition='transition'
                variants={routingAnimations}
            >
                <div className="w-[min(1500px,98%)] mx-auto">
                    <h1 className="my-bold text-[min(4rem,8vw)] text-[var(--primary-blue)] text-center">Core Faculty</h1>
                    <p className="text-gray-800 leading-[2em] text-[min(2rem,4vw)]">SGTBIMIT has very diversified and experienced faculties of their domains that works day in day out for their students to make them industry ready</p>
                    {isPending && <div className='flex justify-center items-center'> <Loader /> </div>}
                    <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-5 place-items-center">
                        {facultyData && facultyData.map(({ _id, name, post, detail, Department }, i) => (
                            <div className="flex flex-col items-center p-5 shadow-2xl bg-white w-[70%] h-full rounded-3xl">
                                <img src={`${import.meta.env.VITE_API_URL}/Faculty/Faculty_Image_Display/${_id}`} alt="cant load" className='w-[85%] mx-auto rounded-md' />
                                <div className='mt-auto'>
                                    <h2 className="my-bold text-[min(2.5rem,5vw)] mt-3 mb-0 text-center">{_.startCase(_.toLower(name)).replace("Dr ", "Dr. ")}</h2>
                                    <p className='text-[var(--primary-clr)] leading-[2em] text-[min(1.5rem,2vw)] m-0 text-center'>{post}</p>
                                </div>
                                <div className='h-1 rounded-full w-[70%] bg-[#004180]'></div>
                                <div className='fac-details'>
                                    <p className="text-gray-800 leading-[2em] text-xl text-center">{detail}</p>
                                    <p className="text-lg text-center">
                                        <span className='my-bold '>
                                            {"Department: "}
                                        </span>
                                        <span className='text-gray-800 leading-[2em]'>
                                            {Department}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        )
                        )}
                    </div>
                </div>
            </motion.section>
            <Footer />
        </>
    )
}
