import React from 'react'
import './courses.css'
import AdditionalDiploma from './AdditionalDiploma'
import { Header, Navbar, Footer } from '../../Components'
import { Helmet } from 'react-helmet'

export default function Bcom() {
    return (
        <>
            <Helmet title="SGTBIMIT | Bcom" />
            <Header></Header>
            <Navbar></Navbar>
            <section className="courses-section">
                <div className='courses'>
                    <img src={require("../../images/bcom.png")} alt="cant load" />
                    <h1>Bachelors of Commerce</h1>
                    <p>
                        The three-year, full-time Bachelor of Commerce (B.Com) programme at Sri
                        Guru Tegh Bahadur Institute of Management and Information Technology
                        is certified by GGSIP University. It started out with the goal of
                        offering pupils a holistic education that included both academic
                        and extracurricular activities. Its goal is to give readers a thorough
                        understanding of taxation, accounting, finance, law, and management.
                        The students participate in internship programmes, research projects,
                        and courses that improve their skills, preparing them for the corporate
                        sector. The students will acquire the theoretical and practical abilities
                        needed to handle real-life scenarios and develop into young, aspiring
                        entrepreneurs in the demanding, globalised world. The department offers
                        the programmes which help in pursuing the professional courses in future
                        like C.A, C.S., I.C.W.A., C.F.A, M.B.A.,etc.
                    </p>
{/*                     <AdditionalDiploma /> */}
                </div>
            </section>
            <Footer></Footer>
        </>
    )
}
