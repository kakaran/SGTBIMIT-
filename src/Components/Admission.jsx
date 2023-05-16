import React, { useState } from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';


export default function Admission() {
    const [admissionFormDetail, setAdmissionFormDetail] = useState({
        Name : "",
        Email : "",
        PNumber :"",
        Course : ""
    });
    const closeHandle = (e) => {
        e.target.parentElement.classList.remove("show")
        document.querySelector(".admission-bg").classList.remove("show-bg")
        setAdmissionFormDetail({
            Name : "",
            Email : "",
            PNumber :"",
            Course : ""
        })
    }


    const AdmissionDataGet = (e) =>{
        setAdmissionFormDetail({...admissionFormDetail, [e.target.name] : e.target.value});
    }

    const AdmissionDataSubmit = async () =>{
        try {
            const data = (await axios.post(`${process.env.REACT_APP_API_URL}/Admission/Request`,{Name : admissionFormDetail.Name,
        Email: admissionFormDetail.Email,
        PNumber : admissionFormDetail.PNumber,
        Course : admissionFormDetail.Course})).data
        if(data.status === "success"){
            toast.success(`${data.message}`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }else {
            toast.warn(`${data.message}`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    // console.log(admissionFormDetail);

    return (
        <>
            <div className="admission-bg"></div>
            <div className='admission-dialog'>

                <img src={require("../images/cancel.png")} alt="cant load" className='close-btn' onClick={(e) => closeHandle(e)} />
                <h1 className='admission-title'>ADMISSION FORM</h1>
                <div className='hurry'>Hurry, Fill your Admission Form right now</div>
                <div className="admission-form">
                    <input type="text" placeholder='Name' className="admission-name" name='Name' onChange={AdmissionDataGet} value={admissionFormDetail.Name}/>
                    <input type="email" placeholder='Email Address' className="admission-email" name='Email'onChange={AdmissionDataGet} value={admissionFormDetail.Email}/>
                    <input type="text" placeholder='Phone Number' className="admission-number" name='PNumber' onChange={AdmissionDataGet} value={admissionFormDetail.PNumber}/>
                    <label htmlFor="courses">Course interested in:</label>
                    <div className="AdmissionRadiobuttonsContainer">
                        <span className="AdmisRadioButton">
                        <input type="radio" name="Course" id="BCA" value="BCA" onChange={AdmissionDataGet}/>
                        <label htmlFor="BCA">BCA</label>
                        </span>
                        <span className="AdmisRadioButton">
                        <input type="radio" name="Course" id="BBA" value="BBA" onChange={AdmissionDataGet}/>
                        <label htmlFor="BBA">BBA</label>
                        </span>
                        <span className="AdmisRadioButton">
                        <input type="radio" name="Course" id="BBAI" value="BBA B&I" onChange={AdmissionDataGet}/>
                        <label htmlFor="BBAI">BBA B&I</label>
                        </span>
                        <span className="AdmisRadioButton">
                        <input type="radio" name="Course" id="BCOM" value="BCOM" onChange={AdmissionDataGet}/>
                        <label htmlFor="BCOM">BCOM</label>
                        </span>
                    </div>
                    <input type="submit" value="SUBMIT" onClick={(e) => {AdmissionDataSubmit();closeHandle(e);}} />
                </div>
                <ToastContainer />
            </div>
        </>
    )
}
