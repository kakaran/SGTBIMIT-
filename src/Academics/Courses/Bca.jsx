import React from 'react'
import './courses.css'
import AdditionalDiploma from './AdditionalDiploma'
import { Header, Navbar, Footer } from '../../Components'
import { Helmet } from 'react-helmet'

export default function Bca() {

  return (
    <>
      <Helmet title='SGTBIMIT | BCA' />
      <Header />
      <Navbar />
      <section className="courses-section">
        <div className='courses'>
          <img src={require("../../images/bca.jpg")} alt="cant load" />
          <h1>Bachelors of Computer Applications</h1>
          <p>
            The three-year full-time Bachelor of Computer Applications (BCA) programme at
            Sri Guru Tegh Bahadur Institute of Management and Information Technology is
            licensed by GGSIP University. The goal of this course's design and management
            is to give students a dynamically engaging atmosphere where they can develop
            into highly qualified IT specialists. The curriculum has been created to provide
            students with a thorough understanding of a range of topics linked to information
            technology as well as the fundamentals of management. The BCA Program at SGTBIMIT
            aims to create exceptional IT professionals who can put their academic knowledge
            into practise in real-world settings and create their own stand-alone live projects.
            The method is more practical since it offers a variety of value-added clubs and labs
            in addition to traditional classroom instruction. The curriculum is made more dynamic
            by the advancement of teaching style used at SGTBIMIT, which includes not only learning
            through lectures but also applying the concepts with the use of role plays, case studies,
            and other creative exercises. With a focus on industrial exposure, this undergraduate
            curriculum gives students a thorough understanding of technological topics.
            The curriculum for the course was created following a thorough review of the requests
            from industry stakeholders, with an emphasis on what the industry expects of IT workers.
            The Program's credit-based methodology also provides a tonne of flexibility and
            learning opportunities.
            The program's standout elements include a focus on developing students' soft skills and
            giving them the best possible industry interaction through a variety of projects.
          </p>
{/*           <AdditionalDiploma /> */}
        </div>
      </section>
      <Footer />
    </>
  )
}
