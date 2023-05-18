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
           
            <div className='grid place-items-center py-10 backgroundreg'>
                <div className="reg-container">
                    <div className="title my-bold text-[50px]">Registration</div>
                    <div className="content">

                        <form>
                            <div className="my-bold text-[30px] text-center my-5">PERSONAL DETAILS</div>
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



                                <span className="gender-title">Gender</span>
                                <div className="category">
                                    <label htmlFor="dot-1">
                                        <input type="radio" name="gender" id="dot-1"></input>
                                        <span className="gender">Male</span>
                                    </label>
                                    <label htmlFor="dot-2">
                                        <input type="radio" name="gender" id="dot-2"></input>
                                        <span className="gender">Female</span>
                                    </label>
                                    <label htmlFor="dot-3">
                                        <input type="radio" name="gender" id="dot-3"></input>
                                        <span className="gender">Prefer not to say</span>
                                    </label>
                                </div>
                            </div><br />
                            <div className="my-bold text-[30px] text-center my-5">HIGHER EDUCATION DETAILS</div>
                            <div className="edu-details">




                                <span className="details3">Higher Education</span>
                                <div className="cat">
                                    <label htmlFor="dot1">
                                        <input type="radio" name="high" id="dot1" />
                                        <span className="high">BCA</span>
                                    </label>
                                    <label htmlFor="dot2">
                                        <input type="radio" name="high" id="dot2" />
                                        <span className="high">BBA</span>
                                    </label>
                                    <label htmlFor="dot3">
                                        <input type="radio" name="high" id="dot3" />
                                        <span className="high">BBA(B&I)</span>
                                    </label>
                                    <label htmlFor="dot4">
                                        <input type="radio" name="high" id="dot4" />
                                        <span className="high">BCOMM</span>
                                    </label>
                                </div>
                            </div><br />

                            <label htmlFor="Year" className="details3">Year</label>
                            <div className="input3">
                                <input type="text" placeholder="Enter Year" required></input>
                            </div> <br/>
                            <label htmlFor="Employed">Employed</label>
                            <div>
                                <div>
                                    <input type="radio" id="yes" name="employed" value="Yes" />
                                    <label htmlFor="yes">YES</label>
                                </div>
                                <div>
                                    <input type="radio" id="no" name="employed" value="no" />
                                    <label htmlFor="no">NO</label>
                                </div>
                            </div>
                            <div className='my-bold text-[30px] text-center my-5'>CURRENT WORKING DETAILS </div>
                            <div className='working-data' >
                                <label htmlFor="placement">Placement provided by SGTBIMIT</label>
                                <div>
                                    <div>
                                        <input type="radio" id="yes-p" name="Placement" value="yes" />
                                        <label htmlFor="yes-p">YES</label>
                                    </div>
                                    <div>
                                        <input type="radio" id="dot2" name="Placement" value="no" />
                                        <label htmlFor="dot2">NO</label>
                                    </div> <br/>
                                </div>
                                <label htmlFor="Organization">Present Organization</label>
                                <div className="input-box">
                                    <input type="text" placeholder='Present Organization'/>
                                </div> <br />
                                <label htmlFor="Designation">Current Designation</label>
                                <div className="input-box">
                                    <input type="text" placeholder='Current Designation' />
                                </div>
                            </div>
                            <div className="button">
                                <input type="submit" value="Register"></input>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}