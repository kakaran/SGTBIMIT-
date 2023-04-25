import React from "react";
import { Header, Navbar, Footer } from "../../Components";
import "./Eligibility.css";
import { Helmet } from "react-helmet";

export default function Eligibility() {

    return (
        <>
            <Helmet title="SGTBIMIT | Courses Eligibility" />
            <Header />
            <Navbar />
            <section className="eli-section">
                <div className="eli_container">
                    <h1>ELIGIBILITY FOR COURSES</h1>
                    <div className="btns">
                        <h2>BCA</h2>
                        <div className="infos">
                            <h3>BCA Eligibility Criteria:</h3>
                            <p>
                                <li>Pass in 12th Class of 10+2 of CBSE or equivalent with a minimum of
                                    50% marks in aggregate* with pass in English (core or elective or
                                    functional).</li>
                                <li>Mathematics or (Computer Science / Informatics Practice /
                                    Computer Applications / Multimedia & Web Technology / Data
                                    Management Application / Web Application as compulsory subject of
                                    non-vocational stream with 50 theory and 50 practical ratio).</li>
                                <b>OR</b><br />
                                <li>Three year Diploma in a branch of Engineering from a polytechnic
                                    duly approved by All India Council for Technical Education and
                                    affiliated to a recognized examining body with a minimum of 50%
                                    marks in aggregate.</li>
                            </p>
                            <h3>BCA Admission Criteria:</h3>
                            <p>
                                <li> Admission shall be on the basis of the merit of the
                                    written test CET/CUET.</li>
                            </p>
                        </div>

                        <h2>BBA(G)</h2>
                        <div className="infos">
                            <h3>BBA(G) Eligibility Criteria:</h3>
                            <p>
                                <li>Pass in 12th Class of 10+2 of CBSE or equivalent with a minimum of
                                    50% marks in aggregate* and must also have passed English (core or
                                    elective or functional) as a subject.</li>
                            </p>
                            <h3>BBA(G) Admission Criteria:</h3>
                            <p>
                                <li>Admission shall be on the basis of the merit of the
                                    written test CET/CUET.</li>
                            </p>
                        </div>

                        <h2>BBA(B&I)</h2>
                        <div className="infos">
                            <h3>BBA(B&I) Eligibility Criteria:</h3>
                            <p>
                                <li>Pass in 12th Class of 10+2 of CBSE or equivalent with a minimum of
                                    50% marks in aggregate* and must also have passed English (core or
                                    elective or functional) as a subject.</li>
                            </p>
                            <h3>BBA(B&I) Admission Criteria:</h3>
                            <p>
                                <li>Admission shall be on the basis of the merit of the
                                    written test CET/CUET.</li>
                            </p>
                        </div>

                        <h2>B.COM</h2>
                        <div className="infos">
                            <h3>B.Com Eligibility Criteria:</h3>
                            <p>
                                <li>50% in aggregate in 10+2 examination / senior school certificate
                                    examination of C.B.S.E. as minimum marks for admission to B.Com
                                    with pass in five subjects (One language and four elective subjects) or
                                    an examination recognized as equivalent to that.</li>
                                (i) Pre-University Examination (Two years after ten years of
                                schooling) of an Indian school / college.
                                <br /><b>OR</b><br />
                                <li>Intermediate Examination of an Indian University / Board or an
                                    Examination recognized as equivalent to that (Pass in Five written
                                    subjects)</li>
                                (ii) Indian School Certificate Examination (12 years) conducted by the
                                Council for the Indian School Certificate Examination, New Delhi
                                (Pass in Five written subjects).<br />
                                (iii) Examination of a foreign University / Board which is recognized
                                as equivalent to 10+2 CBSE examination/or Indian university.
                            </p>
                            <h3>B.Comm Admission Criteria:</h3>
                            <p>
                                <li>Admission shall be on the basis of the merit of the
                                    written test CET/CUET.</li>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}