import React from "react";
import { Header, Navbar, Footer } from "../../Components";
import "./Fees.css";
import { Helmet } from "react-helmet";

export default function Fees() {

    return (
        <>
            <Helmet title="SGTBIMIT | Fees" />
            <Header />
            <Navbar />
            <div className="Fees">
                <h1>FEES STRUCTURE</h1>
                <div className="structure">
                    <div className="box">
                        <div className="icon">
                            <h1>BCA</h1>
                        </div>
                        <div className="info">
                            <h3>Bachelor of Computer Applications</h3>
                            <p>
                                Fees :<b> Rs. 1,24,600/- </b><br />
                                Duration : 3 Years And 120 seats in both shifts<br />
                                Fee Noted : The mentioned fee structure is subject to change.
                            </p>
                        </div>
                        <div>
                            <button onClick={(e) => {
                                window.location.href = "./courses-eligibility";
                            }} className="more">Learn More</button>
                        </div>
                    </div>

                    <div className="box">
                        <div className="icon">
                            <h1>BBA(G)</h1>
                        </div>
                        <div className="info">
                            <h3>Bachelor of Business Administration</h3>
                            <p>
                                Fees :<b> Rs. 1,26,300/-</b><br />
                                Duration : 3 Years And 60 seats in both shifts<br />
                                Fee Noted : The mentioned fee structure is subject to change.
                            </p>
                        </div>
                        <div>
                            <button onClick={(e) => {
                                window.location.href = "./courses-eligibility";
                            }} className="more">Learn More</button>
                        </div>
                    </div>

                    <div className="box">
                        <div className="icon">
                            <h1>BBA(B&I)</h1>
                        </div>
                        <div className="info">
                            <h3>Bachelor of Business Administration(B & I)</h3>
                            <p>
                                Fees :<b> Rs. 1,26,300/-</b><br />
                                Duration : 3 Years And 120 seats in both shifts<br />
                                Fee Noted : The mentioned fee structure is subject to change.
                            </p>
                        </div>
                        <div className="less">
                            <button onClick={(e) => {
                                window.location.href = "./courses-eligibility";
                            }} className="more">Learn More</button>
                        </div>
                    </div>

                    <div className="box">
                        <div className="icon">
                            <h1>B.COM(H)</h1>
                        </div>
                        <div className="info">
                            <h3>Bachelor of Commerce (Honours)</h3>
                            <p>
                                Fees :<b> Rs. 1,21,800/-</b><br />
                                Duration : 3 Years And 60 seats in 1st Shift<br />
                                Fee Noted : The mentioned fee structure is subject to change.
                            </p>
                        </div>
                        <div>
                            <button onClick={(e) => {
                                window.location.href = "./courses-eligibility";
                            }} className="more">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}