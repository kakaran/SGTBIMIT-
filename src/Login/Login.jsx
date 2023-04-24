import React, { useState } from 'react'
import './login.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useAuth } from '../Context/auth';
import { ToastContainer, toast } from 'react-toastify';


export default function Login() {

    const [email, setEamil] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();
    const [auth, setAuth] = useAuth();


    const handleLogin = async () => {
        try {

            const data = (await axios.post("http://localhost:5000/Admin/Login", { email, password })).data;
            console.log(data);
            if (data.token) {
                setAuth({
                    ...auth,
                    _id: data.admin._id,
                    token: data.token,
                })
                localStorage.setItem("auth", JSON.stringify(data));

                navigate("/dashboard/admin")

            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleForgetpassword = async () => {
        try {
            if (email) {
                const data = (await axios.post(`http://localhost:5000/Admin/EmailCheck/${email}`)).data
                console.log(data);
                if (data.status) {
                    navigate(`/admin/forgetPassword/${data.user_id}/${email}/${data.status}`)
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
            } else {
                toast.warn('Enter please Email', {
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

        } catch (error) {
            console.log(error);
        }
    }


    return (
        <>
            (  <section className="login-section">
                <img className="login-logo" src={require("../images/sgtbimit.png")} alt="" />
                <div className="form-container">
                    <p className="login-title">Login</p>
                    <div className="form" >
                        <div className="input-group">
                            <label for="email">Email</label>
                            <input type="email" name="email" id="email" placeholder="" onChange={(e) => {
                                setEamil(e.target.value);
                            }}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label for="password">Password</label>
                            <input type="password" name="password" id="password" placeholder="" onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                                maxLength="12"
                            />
                            <div className="forgot">
                                <a rel="noopener noreferrer" onClick={handleForgetpassword}>Forgot Password ?</a>
                            </div>
                        </div>
                        <button className="sign" onClick={handleLogin}>Sign in</button>
                    </div>
                </div>
            </section>)
            <ToastContainer />
        </>
    )
}
