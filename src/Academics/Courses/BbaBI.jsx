import React from 'react'
import './courses.css'
import { Header, Navbar, Footer } from '../../Components'
import AdditionalDiploma from './AdditionalDiploma'
import { Helmet } from 'react-helmet'


export default function BbaBI() {
  return (
    <>
      <Helmet title="SGTBIMIT | BBA (B&I)" />
      <Header />
      <Navbar />
      <section className="courses-section">
        <div className='courses'>
          <img src={require("../../images/bba.jpg")} alt="cant load" />
          <h1>BACHELORS OF BUSINESS ADMINISTRATION (BANKING & INSURANCE)</h1>
          <p>
          BBA (B&I) is a prestigious program offered by Sri Guru Tegh Bahadur Institute of 
          Management and Information Technology (SGTBIMIT). The program aims to equip 
          students with a strong foundation in business and management principles, with 
          a particular focus on Banking and Insurance. The BBA (B&I) program at SGTBIMIT 
          is designed to develop students' analytical, problem-solving, and communication 
          skills, which are essential for success in the field of business. 
          <br/><br/>
          The curriculum is a well-balanced mix of theoretical and practical learning, with an emphasis 
          on case studies, projects, and real-world applications. The program provides a 
          comprehensive understanding of banking and insurance operations, including their 
          regulatory framework, financial products and services, and risk management practices. 
          Students learn about various aspects of business, including accounting, finance, 
          marketing, and human resources management, in addition to specialized courses 
          related to banking and insurance.
          <br/><br/>
          The faculty at SGTBIMIT is highly experienced and dedicated to providing students 
          with quality education. The institute offers state-of-the-art facilities and resources, 
          including a well-stocked library, modern computer labs, and access to industry experts.
          <br/><br/>
          Upon completion of the BBA (B&I) program, students are well-equipped to pursue exciting 
          careers in the banking and insurance sectors or pursue further studies in related fields. 
          The program offers a solid foundation for future success in the field of business and management.
          </p>
{/*           <AdditionalDiploma /> */}
        </div>
      </section>
      <Footer />
    </>
  )
}
