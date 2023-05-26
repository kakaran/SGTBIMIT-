import React, { useState } from 'react'
import './ForgetPassword.css'
import axios from 'axios';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const ForgetPassword = () => {
    const [code, setCode] = useState();
    const [password, setPassword] = useState();
    const { email } = useParams();
    const re = /^[0-9\b]+$/;
    const navigate = useNavigate()

    const PasswordChange = async () => {
        try {
            if (!re.test(code)) {
                toast.warn('Otp Input box only Number ', {
                    position: "top-right",
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                console.log("error");
            } else {
                const data = await axios.post(`${import.meta.env.VITE_API_URL}/Admin/forgetpassword/${email}`, { code, password })
                if (data.status) {
                    toast.success(`${data.message}`, {
                        position: "top-right",
                        autoClose: 1500,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    navigate("/login")
                }
            }


        } catch (error) {
            console.log(error);
        }
    }

    const handleForgetpassword = async () => {
        try {
            if (email) {
                const data = (await axios.post(`${import.meta.env.VITE_API_URL}/Admin/EmailCheck/${email}`)).data
                if (data.status) {
                    toast.success(`${data.message}`, {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                }
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className="forgetPasswordContainer">
                <div>
                    <span className='inputDeatil'>
                        <label htmlFor="otp">OTP : </label>
                        <input type="text" name="code" id="otp" onChange={(e) => { setCode(e.target.value) }} maxLength="4" />
                    </span>
                    <span className='inputDeatil'>
                        <label htmlFor="password">Password : </label>
                        <input type="text" name="password" id="password" onChange={(e) => { setPassword(e.target.value) }} maxLength="20" />
                    </span>
                    <span><button onClick={PasswordChange} className='button-80'>Password Change</button> <button className='button-80' onClick={handleForgetpassword}>Resend OTP</button></span>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default ForgetPassword