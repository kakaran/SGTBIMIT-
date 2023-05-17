import React from 'react'
import './registration.css'
import { Header, Navbar, Footer } from '../../Components'
import { Helmet } from 'react-helmet'

export default function Registration() {
    return (
        <>
            <Helmet title='SGTBIMIT | Alumini Registeration' />
            <Header />
            <Navbar />
            <div className="container">
                <div className="title">Registration</div>
                <div className="content">

                    <form>
                        <div className="title2">PERSONAL DETAILS</div>
                        <div className="user-details">
                            <div className="input-box">
                                <span className="details">First Name</span>
                                <input type="text" placeholder="Enter your name" required></input>
                            </div>
                            <div className="input-box">
                                <span className="details">Last Name</span>
                                <input type="text" placeholder="Enter your Last name" required></input>
                            </div>
                            <div className="input-box">
                                <span className="details">Email</span>
                                <input type="text" placeholder="Enter your email" required></input>
                            </div>
                            <div className="input-box">
                                <span className="details">Mobile Number</span>
                                <input type="text" placeholder="Enter your number" required></input>
                            </div>
                            <div className="input-box">
                                <span className="details">Address</span>
                                <input type="text" placeholder="Enter your Address" required></input>
                            </div>
                            <div className="input-box">
                                <span className="details">Adhaar Number</span>
                                <input type="text" placeholder="Enter your Adhaar number" required></input>
                            </div>
                        </div>
                        <div className="gender-details">
                            <input type="radio" name="gender" id="dot-1"></input>
                            <input type="radio" name="gender" id="dot-2"></input>
                            <input type="radio" name="gender" id="dot-3"></input>
                            <span className="gender-title">Gender</span>
                            <div className="category">
                                <label for="dot-1">
                                    <span className="dot one"></span>
                                    <span className="gender">Male</span>
                                </label>
                                <label for="dot-2">
                                    <span className="dot two"></span>
                                    <span className="gender">Female</span>
                                </label>
                                <label for="dot-3">
                                    <span className="dot three"></span>
                                    <span className="gender">Prefer not to say</span>
                                </label>
                            </div>
                        </div><br />
                        <div className="title2">HIGHER EDUCATION DETAILS</div>
                        <div className="edu-details">
                            <input type="radio" name="high" id="dot1" />
                            <input type="radio" name="high" id="dot2" />
                            <input type="radio" name="high" id="dot3" />
                            <input type="radio" name="high" id="dot4" />
                            <span className="details3">Higher Education</span>
                            <div className="cat">
                                <label for="dot1">
                                    <span className="dot one"></span>
                                    <span className="high">BCA</span>
                                </label>
                                <label for="dot2">
                                    <span className="dot two"></span>
                                    <span className="high">BBA</span>
                                </label>
                                <label for="dot3">
                                    <span className="dot three"></span>
                                    <span className="high">BBA(B&I)</span>
                                </label>
                                <label for="dot4">
                                    <span className="dot four"></span>
                                    <span className="high">BCOMM</span>
                                </label>
                            </div>
                        </div><br />

                        <label for="Year" className="details3">Year</label>
                        <div className="input3">
                            <input type="text" placeholder="Enter Year" required></input>
                        </div>
                        <label for="Employed">Employed</label>
                        <div>
                            <div>
                                <input type="radio" id="yes" name="employed" value="Yes" />
                                <label for="yes">YES</label>
                                </div>
                                <div>
                                <input type="radio" id="no" name="employed" value="no" />
                                <label for="no">NO</label>
                                </div>
                        </div>  
                        <div className='title2'>CURRENT WORKING DETAILS </div>
                        <div className='working-data' >
                            <label for="placement">Placement provided by SGTBIMIT</label>
                            <div>
                                <div>
                                    <input type="radio" id="yes-p" name="Placement" value="yes" />
                                    <label for="yes-p">YES</label>
                                </div>
                                <div>
                                    <input type="radio" id="no-p" name="Placement" value="no" />
                                    <label for="no-p">NO</label>
                                </div>
                            </div>
                            <label for="Organization">Present Organization</label>
                            <input type="text" /> <br/>
                            <label for= "Designation">Current Designation</label>
                            <input type="text" />     
                        </div>                          
                                <div className="button">
                                    <input type="submit" value="Register"></input>
                                </div>
                            </form>
                        </div>
                </div>
                <Footer />
            </>
            )
}
