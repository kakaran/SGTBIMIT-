import React from 'react'
import './eresources.css'
import { Link } from 'react-router-dom'
import { Header, Navbar, Footer, Loader } from '../../Components'
import useFetch from '../../useFetch'
import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion'
import { routingAnimations } from '../../constants'

export default function EResources() {

    const { data: eResources, isPending } = useFetch(`${import.meta.env.VITE_API_URL}/E_Resources/EResources_Display`)
    return (
        <>
            <Helmet title="SGTBIMIT | E-Resources" />
            <Header />
            <Navbar />
            <motion.section className='e-resources'
                viewport='viewport'
                initial='initial'
                animate='animate'
                exit='exit'
                transition='transition'
                variants={routingAnimations}>
                <div className="e-resources-container">
                    <h1>SGTBIMIT DIGITAL LIBRARY (E-RESOURCES)</h1>
                    <div className="e-resources-flex">
                        <div className="resources-headings">
                            <div className="publisher-heading">
                                Publisher
                            </div>
                            <div className="url-heading">
                                URL
                            </div>
                        </div>
                        {isPending && <Loader />}
                        {eResources && eResources.map((x, i) => {
                            return (
                                <div className="e-resources-item" key={i}>
                                    <div className="publisher-item">
                                        {x.name}
                                    </div>
                                    <div className="url-item">
                                        <Link to={x.url}>{x.url}</Link>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </motion.section>
            <Footer />
        </>
    )
}
