import React from 'react'
import './registration.css'
import { Header, Navbar, Footer } from '../../Components'
import { Helmet } from 'react-helmet'
import { ToastContainer, toast } from 'react-toastify'
import { motion } from 'framer-motion'
import { routingAnimations } from '../../constants'

export default function Registration() {
    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            const bodyy = {
                Fname: e.target.Fname.value,
                Lname: e.target.Lname.value,
                Email: e.target.Email.value,
                MNumber: e.target.MNumber.value,
                Address: e.target.Address.value,
                AdhaarNo: e.target.AdhaarNo.value,
                Gender: e.target.Gender.value,
                course: e.target.course.value,
                Year: e.target.Year.value,
                employed: e.target.employed.value,
                placement: e.target.placement.value,
                presentOrgani: e.target.presentOrgani.value,
                CurrentDesignation: e.target.CurrentDesignation.value,
            }
            const res = await fetch(`${import.meta.env.VITE_API_URL}/Registration/Registration_Add`, {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(bodyy)
            })
            const status = res.status
            const message = await res.text()
            if (status === 200) {
                toast.success(`${message}`, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                })
            } else if (status === 500) {
                toast.error(`${message}`, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                })
            } else if (!status !== 200) {
                toast.error(`Server Error`, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                })
            }
        } catch (error) {
            toast.error(`Unknown Error`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
        }
    }
    return (
        <>
            <Helmet title='SGTBIMIT | Alumni Registration' />
            <Header />
            <Navbar />
            <ToastContainer />
            <motion.section className='grid place-items-center py-10 backgroundreg'
                viewport='viewport'
                initial='initial'
                animate='animate'
                exit='exit'
                transition='transition'
                variants={routingAnimations}
            >
                <div className="reg-container">
                    <div className="my-bold my-text-4 primary-blue text-center">Registration</div>
                    <div className="content">

                        <form action={`${import.meta.env.VITE_API_URL}/Registration/Registration_Add`} method='POST' onSubmit={(e) => { handleSubmit(e) }}>
                            <h2 className="my-bold text-[30px] my-5 primary-clr mt-11">Personal Details</h2>
                            <div className="user-details">
                                <div className="input-box">
                                    <span className="details">First Name</span>
                                    <input type="text" placeholder="Enter your name" required name='Fname' />
                                </div>
                                <div className="input-box">
                                    <span className="details">Last Name</span>
                                    <input type="text" placeholder="Enter your Last name" required name='Lname' />
                                </div>
                                <div className="input-box">
                                    <span className="details">Email</span>
                                    <input type="text" placeholder="Enter your email" required name='Email' />
                                </div>
                                <div className="input-box">
                                    <span className="details">Mobile Number</span>
                                    <input type="number" placeholder="Enter your number" required name='MNumber' />
                                </div>
                                <div className="input-box">
                                    <span className="details">Address</span>
                                    <input type="text" placeholder="Enter your Address" required name='Address' />
                                </div>
                                <div className="input-box">
                                    <span className="details">Adhaar Number</span>
                                    <input type="number" placeholder="Enter your Adhaar number" required name='AdhaarNo' />
                                </div>
                            </div>
                            <div className="gender-details">
                                <span className="gender-title">Gender</span>
                                <div className="category">
                                    <label htmlFor="dot-1">
                                        <input type="radio" name="Gender" id="dot-1" value="Male" />
                                        <span className="gender">Male</span>
                                    </label>
                                    <label htmlFor="dot-2">
                                        <input type="radio" name="Gender" id="dot-2" value="Female" />
                                        <span className="gender">Female</span>
                                    </label>
                                    <label htmlFor="dot-3">
                                        <input type="radio" name="Gender" id="dot-3" value="Not Prefer" />
                                        <span className="gender">Prefer not to say</span>
                                    </label>
                                </div>
                            </div><br />
                            <h2 className="my-bold text-[30px] my-5 primary-clr mt-11">Higher Education Details</h2>
                            <div className="edu-details">
                                <span className="details3">Higher Education</span>
                                <div className="cat">
                                    <label htmlFor="dot1">
                                        <input type="radio" name="course" id="dot1" value="BCA" />
                                        <span className="high">BCA</span>
                                    </label>
                                    <label htmlFor="dot2">
                                        <input type="radio" name="course" id="dot2" value="BBA" />
                                        <span className="high">BBA</span>
                                    </label>
                                    <label htmlFor="dot3">
                                        <input type="radio" name="course" id="dot3" value="BBA B&I" />
                                        <span className="high">BBA(B&I)</span>
                                    </label>
                                    <label htmlFor="dot4">
                                        <input type="radio" name="course" id="dot4" value="BCOM" />
                                        <span className="high">BCOM</span>
                                    </label>
                                </div>
                            </div><br />

                            <label htmlFor="Year" className="details3">Year</label>
                            <div className="input3">
                                <input type="number" placeholder="Enter Year" required name='Year' />
                            </div> <br />
                            <label htmlFor="Employed" className="Emphead">Employed </label>
                            <br /><br />
                            <div className="flex gap-5"> <br />
                                <div className='input4'>
                                    <input type="radio" id="yes" name="employed" value="Yes" />
                                    <label htmlFor="yes">YES</label>
                                </div>
                                <div className='input5'>
                                    <input type="radio" id="no" name="employed" value="No" />
                                    <label htmlFor="no">NO</label>
                                </div>
                            </div>
                            <h2 className='my-bold text-[30px] my-5 head-titles primary-clr mt-11'>Current Working Details </h2>
                            <div className='working-data' >
                                <label htmlFor="placement" className='place-head'>Placement provided by SGTBIMIT</label> <br /> <br />
                                <div className='flex gap-5'> <br />
                                    <div className='place-1'>
                                        <input type="radio" id="yes-p" name="placement" value="Yes" />
                                        <label htmlFor="yes-p">YES</label>
                                    </div>
                                    <div className='place-2'>
                                        <input type="radio" id="no-p" name="placement" value="No" />
                                        <label htmlFor="no-p">NO</label>
                                    </div> <br />
                                </div><br />
                                <label htmlFor="Organization" className='org-head'>Present Organization</label>
                                <div className="input-box">
                                    <input type="text" placeholder='Present Organization' name='presentOrgani' />
                                </div> <br />
                                <label htmlFor="Designation" className='des-head'>Current Designation</label>
                                <div className="input-box">
                                    <input type="text" placeholder='Current Designation' name='CurrentDesignation' />
                                </div>
                            </div>
                            <div className="button">
                                <input type="submit" value="Register" />
                            </div>

                        </form>
                    </div>
                </div>
            </motion.section>
            <Footer />

        </>
    )
}