import React from 'react'
import './alumnimeet.css'
import { Header, Navbar, Footer } from '../../Components'
import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion'
import { routingAnimations } from '../../constants'

const AlumniMeet = () => {
    return (
        <>
            <Helmet title='SGTBIMIT | Alumni Meet' />
            <Header />
            <Navbar />
            <motion.section viewport='viewport'
                initial='initial'
                animate='animate'
                exit='exit'
                transition='transition'
                variants={routingAnimations}
                className="alumini-meet-section"
            >
                <div className='alumnimeet'>
                    <h1 className='primary-clr text-center my-text-4'>ALUMNI MEET</h1>
                    <div className='rounded-2xl bg-[#D1E9FF] w-[90%] mx-auto'>
                        <h1 className='primary-blue w-max' style={{ transform: "translate(-20%, -40%)" }}>
                            <span className='text-[min(5rem,10vw)] my-bold'>A</span>
                            <span className='text-[min(3rem,6vw)] my-bold'>bout us</span>
                        </h1>
                        <p className='px-10 pb-10 -mt-10 text-[24px]'>The Alumni Association of Sri Guru Tegh Bahadur Institute of Management and Information Technology evolved to bridge the wide chasm existing between college and career life. It is committed to all youngsters who graduate and face challenges of the competitive, professional world to remain a part of their alma mater. The idea took shape and the formation of the Alumni Association turned into reality. The reputation of an educational institution lies within its students – Past and Present. Faculty and staff also play a vital role. The reputation grows when it keeps producing successful graduates continuously – intelligent, innovative and effective in their respective fields.</p>
                    </div>
                    <h3>Our Mission</h3>
                    <ul>
                        <li>To reunite the students with their alma mater.</li>

                        <li> To build a bridge between college life and career life, so as to introduce present students to the professional world and to make them proactive to face the challenges that may emerge in their path.</li>

                        <li>To provide job opportunities to fresh bachelors through references of professionals.</li>

                        <li>To conduct orientation and training programs for students on various topics to enhance their skills.</li>

                        <li>To create awareness among students about the scope of their subject in the professional world.</li>

                        <li>To provide a platform for students to develop their qualities.</li>

                        <li>To participate in social welfare activities for social accountability.</li>

                    </ul>
                    <h3> Plan of Action </h3>
                    <ul>
                        <li>Conducting training sessions on industry practices and professional approaches by industry professionals.</li>
                        <li>Conducting personality development trainings, interview answering skills and confidence-building programs.</li>
                        <li>Interacting with unemployed ex-students to find the probability of employment with the reference of professionals.</li>
                        <li>Conducting social welfare activities such as blood donation, health awareness programs, plantation and cleanliness drives.</li>
                        <li>Re-unions of ex-students.</li>
                        <li>Felicitation of achievers.</li>
                    </ul>
                    <h3>Events</h3>
                    <p className='text-2xl'>Alumni Committee along with teachers-in-charge of all departments and the Principal took upon itself the task of holding the ‘Annual Alumni Meet.’ A Series of meetings were held and finally, 17th March was fixed for the ‘Alumni Meet 2019’. A registration link was uploaded on the college website which helped us to prepare a database of alumni that had passed out long back and recently. We also roped in office bearers of the Alumni Association to carry out the various activities related to the programme. Approximately 400 alumni turned up for the meet and they all were welcomed with souvenirs. Once they settled down in the auditorium, the committee convenor welcomed them officially and highlighted the need for continuous interaction between the graduated and present generation of students and how various workshops and seminars could be organized in the future to help the latter in placement. A diary was circulated among the alumni to know their feedback and suggestions as to how they can contribute to the college. <br /> <br />
                        Various cultural, creative and fun activities had been planned for them. They thoroughly enjoyed performances which included Bharatnatyam, poetry, band performance. Danish Hilal, Delhi Gharana Sufi singer also captivated the audience with his melodious voice. Before they left they all also enjoyed a grand dinner. The convenor is thankful to Subham and Neha, pass-out of 2015, for their wonderful anchoring of the programme. A special thanks to all teachers-in-charge and their representatives for working on every minute detail meticulously and making it a roaring success. Our non-teaching staff has been very cooperative and they deserve appreciation. This programme would have not been possible without the guidance of the Principal and Mr. Shashi Shekhar Prasad Singh, Secretary, Staff Council. The convenor wishes to create a regular platform for continuous interaction between alumni and their alma mater, and promote ‘Satyawatian’ as a brand name in times to come. </p>
                </div>
            </motion.section>
            <Footer />
        </>
    )
}

export default AlumniMeet