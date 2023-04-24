import React from 'react'
import './eresources.css'
import { Link } from 'react-router-dom'
import { Header, Navbar, Footer, Loader } from '../../Components'
import useFetch from '../../useFetch'
import { Helmet } from 'react-helmet'


export default function EResources() {

    const { data: eResources, isPending } = useFetch(`${process.env.REACT_APP_API_URL}/E_Resources/EResources_Display`)
    return (
        <>
        <Helmet title="SGTBIMIT | E-Resources" />
            <Header />
            <Navbar />
            <section className='e-resources'>
                <div className="e-resources-container">
                    <h1>SGTBIMIT Digital Library (E-Resources)</h1>
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
            </section>
            <Footer />
        </>
    )
}
