import React from 'react'
import './syllabus.css'
import { Header, Navbar, Footer } from '../../Components'
import BCA from '../../Assets/BCA-SYLLABUS .pdf';
import BCOM from '../../Assets/B.com_Syllabus.pdf';
import BBABI from '../../Assets/BBA-BI-Syllabus.pdf';
import BBA from '../../Assets/BBA-SYLLABUS.pdf';
import { Helmet } from 'react-helmet';

export default function Syllabus() {

    const s=[
        {
            course: "BCA",
            link: BCA
        },
        {
            course: "BBA",
            link: BBA
        },
        {
            course: "BBA(B&I)",
            link: BBABI
        },
        {
            course: "B.COMM",
            link: BCOM
        },
    ]

    const sub1=[
        {
            course:"BBA",
            s1:"Management",
            s2:"Mathematics",
            s3:"Accounting",
            s4:"Economics",
            s5:"Marketing,etc." 
        },
        {
            course:"BCA",
            s1:"Programming Languages",
            s2:"Mathematics",
            s3:"Physics,Accounting",
            s4:"Management",
            s5:"Computers,Networks,etc." 
        },
    ]

    const sub2=[
        {
            course:"BBA(B&I)",
            s1:"Management",
            s2:"Mathematics",
            s3:"Accounting",
            s4:"Economics",
            s5:"Insurance,Law,etc." 
        },
        {
            course:"BCOM",
            s1:"Management",
            s2:"Mathematics,Statistics",
            s3:"Accounting",
            s4:"Economics",
            s5:"Marketing,IT,etc." 
        },
    ]

    return (
        <>
        <Helmet title="SGTBIMIT | Syllabus" />
            <Header />
            <Navbar />
                <div className="syllabus">
                    <h1>SYLLABUS</h1>
                    <div className="imptop">
                        <table>
                            <tr>
                                <th>COURSES</th>
                                <th>IMPORTANT SUBJESTS</th>
                            </tr>
                            {sub1.map((v,k)=>{
                                return(
                                    <tr key={k}>
                                        <th>{v.course}</th>
                                        <td>
                                            <p>Subjects you would be learning majorly:
                                                <ul>
                                                    <li>{v.s1}</li>
                                                    <li>{v.s2}</li>
                                                    <li>{v.s3}</li>
                                                    <li>{v.s4}</li>
                                                    <li>{v.s5}</li>
                                                </ul>
                                            </p>
                                        </td>
                                    </tr>
                                )
                            })}
                        </table>
                        <table>
                            <tr>
                                <th>COURSES</th>
                                <th>IMPORTANT SUBJESTS</th>
                            </tr>
                            {sub2.map((v,k)=>{
                                return(
                                    <tr key={k}>
                                        <th>{v.course}</th>
                                        <td>
                                            <p>Subjects you would be learning majorly:
                                                <ul>
                                                    <li>{v.s1}</li>
                                                    <li>{v.s2}</li>
                                                    <li>{v.s3}</li>
                                                    <li>{v.s4}</li>
                                                    <li>{v.s5}</li>
                                                </ul>
                                            </p>
                                        </td>
                                    </tr>
                                )
                            })}
                        </table>
                    </div>
                    <div className="t">
                        <table>
                            <tr>
                                <th>COURSES</th>
                                <th>PDF (DOWNLOAD)</th>
                            </tr>
                            {s.map((v,k)=>{
                                return(
                                    <tr key={k}>
                                        <td>{v.course}</td>
                                        <td><a href={v.link} download>PDF</a></td>
                                    </tr>
                                )
                            })}
                        </table>
                    </div>
                </div>
            <Footer />
        </>
     )
}
