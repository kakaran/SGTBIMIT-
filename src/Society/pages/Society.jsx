import React from 'react'
import { useParams } from 'react-router-dom'
import { Header, Navbar, Footer, Loader } from '../../Components'
import useFetch from '../../useFetch'
import '../society.css'
import { Helmet } from 'react-helmet'
export default function Society() {
    const { id } = useParams()
    const { data: society } = useFetch(`${process.env.REACT_APP_API_URL}/Society/Single_Society_Display/${id}`)
    return (
        <>
            <Helmet title={society?.title} />
            <Header />
            <Navbar />
            {!society && <Loader />}
            {society && <div className='society'>
                <h1>
                    {society.title}
                </h1>
                <img src={`${process.env.REACT_APP_API_URL}/Society/Society_Image_Display/${society._id}`} alt="cant load" />
                <pre className='society-sub-heading'>
                    {society.subdetail}
                </pre>
                <pre className='society-p'>
                    {society.detail}
                </pre>
            </div>
            }
            <Footer />
        </>
    )
}
