import React from 'react'
import './courses.css'
import { Header, Navbar, Footer } from '../../Components'
import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion'
import { routingAnimations } from '../../constants'

export default function BbaBI() {
  return (
    <>
      <Helmet title="SGTBIMIT | BBA (B&I)" />
      <Header />
      <Navbar />
      <motion.section className="courses-section"
        viewport='viewport'
        initial='initial'
        animate='animate'
        exit='exit'
        transition='transition'
        variants={routingAnimations}
      >
        <div className='courses'>
          <img src="/images/bba.jpg" alt="cant load" />
          <h1>BACHELORS OF BUSINESS ADMINISTRATION <br /> (BANKING & INSURANCE)</h1>
          <p>
            Bachelor of Business Administration (Banking and Insurance) is one of the most sought bachelor's degree
            programmes after the 12th standard. This course provides an insight on several of
            managerial roles. Management is the art of making workplaces efficient and accountable.
            With good managerial skills, students can excel in the corporate world.

            <h2>DESCRIPTION OF DEGREE</h2>

            Bachelor of Business Administration(Banking and Insurance) (BBA B&I) programs feature classes in general economic
            theory as well as opportunities to explore specific fields of study in more depth.
            These concentrations range from Accounting and Marketing to Finance and Human resources.
            An undergraduate degree in Business Administration will give you a firm understanding
            of principles at work in today's dynamic economy. You will also have the chance to
            build skills widely towards success in your chosen area of expertise.

            <h2>SKILLS OBTAINED</h2>

            To give you a well-rounded business education, Bachelor of Business Administration
            programs feature courses in a wide range of subjects. This gives you a chance to learn
            practical knowledge while honing leadership, communications and team-building abilities.
            Students in BBA(B&I) programs also pursue individual interests through concentrated study in
            areas such as Accounting, Finance, Marketing, Operations and Information Management,
            Human Resources, Management and Business Law.

            <h2>HIGHER EDUCATIONAL PLAN</h2>

            The Master of Business Administration is also one of the most popular graduate degrees.
            Students from a wide range of backgrounds apply to MBA programs to stay competitive in
            a crowded job market.

            <h2>CAREER OPTIONS</h2>

            Students who graduate with a degree in Business administration(banking and insurance) may work in a wide range
            of environments. From accountants to marketing staff and human resource managers to IT
            administrators, the work of these business professionals is important to the success of
            organizations throughout the world. Regardless of the concentrations, you choose to
            pursue in business administration, you can expect to make a vital contribution in the workplace.

            <h2>WRAP UP</h2>

            A degree in Business Administration(Banking and Insurance) can give you a decided advantage in an increasingly
            competitive job market. Graduates are needed in virtually every industry, and they are
            qualified to land eagerly sought positions from the nation's top employers. Effectively
            in demand within every sector of the economy, graduates with Business Administrations
            degrees can expect a healthy future in the job market.
          </p>
          {/*           <AdditionalDiploma /> */}
        </div>
      </motion.section>
      <Footer />
    </>
  )
}
