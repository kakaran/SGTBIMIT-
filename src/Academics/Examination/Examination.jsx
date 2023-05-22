import React from 'react'
import './examination.css'
import { Header, Navbar, Footer } from '../../Components'
import { Helmet } from 'react-helmet'
import _ from 'lodash'

const tips = [
  {
    id: 1,
    title: "Attend Company’s Presentation Talk",
    desc: "This is the first and foremost thing to do during campus placement drive. You should never miss Company’s pre-placement talks and presentations. The reason you attend these sessions because most of the times questions in HR interview are asked directly from what was conveyed during company’s pre-placement talk during campus placement drive. It gives you a background of what company is doing, the domain in which company is working and most importantly, the technology that company is working on. This helps you in identifying if this is the right company for you. You should note down the points that are being conveyed during the presentation such as Annual Turn Over of the company, details about CEO and other important people in Company and their employee strength, locations and product details. Never show a disinterest in the points that are conveyed during introduction sessions in placement drive. In case there is no pre-placement presentation it is highly recommended that one should do research regarding the organization’s profile and see their profile on the internet.",
  },
  {
    id: 2,
    title: "Prepare a fresh Curriculum Vitae (CV)",
    desc: "Curriculum Vitae (CV) is your first impression before the recruiters during a campus placement drive. You must have a fresh CV for every campus placement drive as different recruiters have different requirements. Your CV should highlight your strength and all the strong points effectively and make it at most of two pages. Keep your Curriculum Vitae (CV) and other important documents in a professional document folder. You can carry two-three copies of CV with yourself and never make a mistake of showing a Xerox copy of your CV during campus placement drive. Carry extra copies of all documents and have extra photographs as well. You must have read your CV thoroughly before sitting in placement drive.",
  },
  {
    id: 3,
    title: "Dress Code",
    desc: "Your dress will define your professionalism before the recruiters. So, never come in casual/party wear during campus placement drive. You must be in proper formals during campus placement drive. Apart from proper formals, you must also take care of your color matching. Get yourself a proper haircut and have a clean shave before sitting in a campus placement drive. You can also use a mild deodorant but in a proper quantity.",
  },
  {
    id: 20,
    title: "Men's Interview Attire",
    desc: ["Suit (solid colour – navy or dark grey)", "Long sleeve shirt (white or coordinated with the suit)", "Belt and Tie", "Dark socks, conservative leather shoes", "Little or no jewellery", "Neat, professional hairstyle", "Limit the aftershave", "Neatly trimmed nails", "Portfolio or briefcase",],
  },
  {
    id: 21,
    title: "Women's Interview Attire",
    desc: ["Solid colour, conservative suit", "Coordinated blouse", "Moderate shoes", "Limited jewellery", "Neat, professional hairstyle", "Sparse make-up & perfume", "Manicured nails", "Portfolio or briefcase"],
  },
  {
    id: 4,
    title: "Interview Etiquettes",
    desc: "Once you have passed all the drills and called for interview during campus placement drive, make sure you seek permission from the interviewer before entering the room. Another thing to consider before entering is keeping your mobile phone switched off. You’re sitting posture also defines your personality. Sit with a positive gesture and a confident smile on your face. It is important to be heard by your interviewer, so speak in a clean and firm voice but don’t shout on and cross-question the interviewer. Make sure you never indulge in any type of argument with the interviewer or any company official in campus placement drive. Also, keep an eye contact with the interviewer but don’t overdo it. Try not to give a wrong answer to any question that you don’t know about and never inquire about the salary details until initiated by the interviewer. You should also analyze what role they are offering you and then take your decisions keeping growth and development in mind. Once the interview comes to an end, thank the interviewer and place the chair back to the original position making sure it’s done without any noise."
  },
  {
    id: 5,
    title: "You should know everything about your college, Be Positive & stay Confident in Interview",
    desc: "One should know everything about his \ her college that includes history and information about the governing body of the college. As you are the part of college people expect from you that you know each and everything about your college. Keeping these points into consideration during campus placement drive will help you crack any campus placement drive successfully. However, your skills and knowledge of the concepts are must for cracking placement drive.",
  },
  {
    id: 6,
    title: "Mock Interview / Test Preparation",
    desc: "As with every skill you’ve ever learned, you have to learn the techniques and then practice, practice, practice. A mock interview is an indispensable tool in preparing for an actual interview, and, when done well, closely monitors what you could expect during your actual interview. However, a mock interview will only be as good as the participants make it. Do your best to recreate actual interview conditions by being as formal and professional as possible. The mock interviewer should stay in character throughout the interview and the interviewee must act as though s/he is in an actual interview. By preparing in advance of the interview, candidates can develop a stronger sense of self-confidence. Mock interviews can additionally uncover problems, mistakes or mishaps for the job seeker long before the actual interview occurs. In this way, the candidate is able to work to correct these issues during the practice period, and therefore elevate his or her performance during the actual interview.",
  },
  {
    id: 7,
    title: "Some Preparation Tips",
    desc: "Prepare for the session by researching your company/industry of interest. Investigate and identify the most common industry traits sought (analytical skills, communication skills, business knowledge and problem-solving). Script answers to demonstrate your experience with these factors as well as answers to behavioural interview questions, such as “Walk me through your resume”, “What made you choose to major in your Degree Program…..”, “What sort of position are you looking for”….? , “Where do you see yourself in two, five or ten years….”?",
  },
  {
    id: 8,
    title: "Human Resource (HR) Interview",
    desc: "HR Interviews can be a source of stress and anxiety when you are looking for a job. HR interview is your chance to make a good impression on your potential employer and ultimately, get the job. How you present yourself, what you wear, how you answer difficult questions and your general attitude all play key roles in HR interviews. All interviews are not the same and HR interviews are often times a screening process that can earn you a follow-up or selection interview within the company. If an individual passes the selection interview, he may be required to participate in a group interview for final analysis. The key to success in HR interviews is to be yourself while respecting your employer. Always highlight your strengths in HR interview and do not talk of weaknesses. Never show your faults, and never share regret with an interviewer.",
  },
  {
    id: 9,
    title: "Be prepared",
    desc: "Preparation boosts confidence. Practice with your friends or relatives. Read your resume before your interview. It will keep your answers fresh.",
  },
  {
    id: 10,
    title: "Be positive and smile",
    desc: "Keep in mind that there is only one chance to make a first impression. Every company wants employees who are goal-oriented, career-driven, enthusiastic and motivated. Be the employee as they want. End the interview on a positive note. The hiring official needs to know that you are interested, enthusiastic and excited about the position and the company.",
  },
  {
    id: 11,
    title: "Don’t discuss pay too early",
    desc: "Questions about pay in the first interview from anyone other than a temporary applicant are always bothersome. Unless the subject comes up, don’t wade into the issue of the pay in the first interview.",
  },
  {
    id: 12,
    title: "Talk technically to techies only",
    desc: "Feel free to discuss what you know, but remember: If you are talking to a nontechnical manager or human resources representative, you are not going to impress them with talk about life in the trenches. Answer questions about your education and work briefly and keep the tech comments to a minimum until you know the history of the company and the people involved in the hiring process. If you have questions about the technology in use at the site, keep your questions specific and relevant to the position for which you are applying.",
  },
  {
    id: 13,
    title: "Electronic interruption: Not welcomed",
    desc: "Cellular phone etiquette might seem a trivial thing, especially if the human resources representative has a low tolerance for personal digital devices. Store your electronic devices in pocket, purse, or briefcase in silent mode.",
  },
  {
    id: 14,
    title: "Remember to say thank you",
    desc: "Beyond thanking your interviewers for their time as you leave, it’s vital that you follow up in written form. If the competition for a position is tight, a follow-up thank you note can mean a lot. If the manager is slow to hire, the arrival of a thank-you note can serve as a reminder about the candidate who’s awaiting the manager’s next move. Just after you have completed the interview, take note of anything specific you discussed and make a point of referencing it in your thank you letter.",
  },

]

export default function Examination() {
  return (
    <>
      <Helmet title="SGTBIMIT | Examination" />
      <Header />
      <Navbar />
      <section className="examination-section">
        <h1 className='my-bold text-[min(4rem,8vw)] text-[var(--primary-blue)] text-center'>
          Tips for Students
        </h1>
        <div className='w-full max-w-[1500px] mx-auto'>
          <h1 className='my-bold text-[var(--primary-clr)] text-[min(3rem,6vw)]'>
            {_.capitalize(_.toLower("IMPORTANT TIPS TO BE KEPT IN MIND BEFORE/DURING CAMPUS PLACEMENT DRIVE"))}
          </h1>
          <p className='text-gray-500 text-[min(1.5rem,4vw)] leading-[min(2rem,5vw)] text-justify'>
            Most of you are undergoing professional courses like B-Tech, MCA and MBA. In this competitive world, these professional courses are looked upon as an assurance of getting a good job. These courses provide opportunities to participate in campus placement drives. Nowadays, companies conducting placement drive are willing to take all the skilled and talented students at first hand. So, they generally visit the campus at the earliest to select skilled students. However, most of the students don’t have the exposure and experience of campus placement drive and the bound to feel nervous. We bring you some important tips that you should keep in mind during a campus placement drive.
          </p>
          <div className='flex flex-col gap-5'>
            {tips.map((tip, i) => {
              if (!(i === 3 || i === 4)) {
                return (
                  <div className="grid grid-flow-col gap-5 max-lg:grid-flow-row">
                    <div className="rounded-full bg-[var(--primary-blue)] text-white flex justify-center items-center w-16 h-16 text-2xl mt-3" key={tip.id}>
                      {tip.id}.
                    </div>
                    <div>
                      <h1 className='text-[var(--primary-blue)] m-0'>
                        <span className='my-bold text-[min(4rem,8vw)]'>
                          {tip.title.split("")[0]}
                        </span>
                        <span className='my-bold text-[min(2rem,4vw)]'>
                          {tip.title.split("").slice(1).join("")}
                        </span>
                      </h1>
                      <p className='text-[min(1.5rem,4vw)] leading-[min(2rem,5vw)] text-gray-600 text-justify'>
                        {tip.desc}
                      </p>
                    </div>
                  </div>
                )
              } else {
                return (
                  <div className="flex gap-5 ml-28 max-lg:ml-0">
                    {/* <div className="rounded-full bg-[var(--primary-blue)] text-white flex justify-center items-center w-16 h-16 text-2xl mt-3 opacity-0 ml-5" key={tip.id}>
                      {tip.id}.
                    </div> */}
                    <div>
                      <h1 className='text-[var(--primary-blue)] m-0 my-bold text-[min(2rem,5vw)]'>
                        {tip.title}
                      </h1>
                      <div className=''>
                        {tip.desc.map(dress => (
                          <p className='text-[min(1.5rem,4vw)] leading-[min(2rem,4vw)] text-gray-600 ml-5'>
                            <span className='text-[var(--primary-blue)]'>→</span> {dress}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              }
            })}
          </div>
        </div>
































        {/* <div className='examination'>

          <h2>IMPORTANT TIPS TO BE KEPT IN MIND BEFORE/DURING CAMPUS PLACEMENT DRIVE </h2>
          <p>
            Most of you are undergoing professional courses like B-Tech, MCA and MBA. In this competitive world, these professional courses are looked upon as an assurance of getting a good job. These courses provide opportunities to participate in campus placement drives. Nowadays, companies conducting placement drive are willing to take all the skilled and talented students at first hand. So, they generally visit the campus at the earliest to select skilled students. However, most of the students don’t have the exposure and experience of campus placement drive and the bound to feel nervous. We bring you some important tips that you should keep in mind during a campus placement drive.
          </p>

          <h3>
            Attend Company’s Presentation Talk
          </h3>

          <p>
            This is the first and foremost thing to do during campus placement drive. You should never miss Company’s pre-placement talks and presentations. The reason you attend these sessions because most of the times questions in HR interview are asked directly from what was conveyed during company’s pre-placement talk during campus placement drive. It gives you a background of what company is doing, the domain in which company is working and most importantly, the technology that company is working on. This helps you in identifying if this is the right company for you. You should note down the points that are being conveyed during the presentation such as Annual Turn Over of the company, details about CEO and other important people in Company and their employee strength, locations and product details. Never show a disinterest in the points that are conveyed during introduction sessions in placement drive. In case there is no pre-placement presentation it is highly recommended that one should do research regarding the organization’s profile and see their profile on the internet.
          </p>

          <h3>
            Prepare a fresh Curriculum Vitae (CV)
          </h3>
          <p>
            Curriculum Vitae (CV) is your first impression before the recruiters during a campus placement drive. You must have a fresh CV for every campus placement drive as different recruiters have different requirements. Your CV should highlight your strength and all the strong points effectively and make it at most of two pages. Keep your Curriculum Vitae (CV) and other important documents in a professional document folder. You can carry two-three copies of CV with yourself and never make a mistake of showing a Xerox copy of your CV during campus placement drive. Carry extra copies of all documents and have extra photographs as well. You must have read your CV thoroughly before sitting in placement drive.
          </p>

          <h3>
            Dress Code
          </h3>
          <p>
            Your dress will define your professionalism before the recruiters. So, never come in casual/party wear during campus placement drive. You must be in proper formals during campus placement drive. Apart from proper formals, you must also take care of your color matching. Get yourself a proper haircut and have a clean shave before sitting in a campus placement drive. You can also use a mild deodorant but in a proper quantity.
          </p>

          <h2
          >MEN'S INTERVIEW ATTIRE
          </h2>
          <p>
            <ul>
              <li>Suit (solid colour – navy or dark grey)</li>
              <li>Long sleeve shirt (white or coordinated with the suit)</li>
              <li> Belt and Tie</li>
              <li>Dark socks, conservative leather shoes</li>
              <li>Little or no jewellery</li>
              <li>Neat, professional hairstyle</li>
              <li>Limit the aftershave</li>
              <li>Neatly trimmed nails</li>
              <li>Portfolio or briefcase</li>
            </ul>
          </p>

          <h2>
            WOMEN'S INTERVIEW ATTIRE
          </h2>
          <p>
            <ul>
              <li>Solid colour, conservative suit</li>
              <li> Coordinated blouse</li>
              <li> Moderate shoes</li>
              <li>Limited jewellery</li>
              <li> Neat, professional hairstyle</li>
              <li>Sparse make-up & perfume</li>
              <li>Manicured nails</li>
              <li>Portfolio or briefcase</li>
            </ul>
          </p>

          <h2>INTERVIEW ETIQUETTES</h2>
          <p>Once you have passed all the drills and called for interview during campus placement drive, make sure you seek permission from the interviewer before entering the room. Another thing to consider before entering is keeping your mobile phone switched off. You’re sitting posture also defines your personality. Sit with a positive gesture and a confident smile on your face. It is important to be heard by your interviewer, so speak in a clean and firm voice but don’t shout on and cross-question the interviewer. Make sure you never indulge in any type of argument with the interviewer or any company official in campus placement drive. Also, keep an eye contact with the interviewer but don’t overdo it. Try not to give a wrong answer to any question that you don’t know about and never inquire about the salary details until initiated by the interviewer. You should also analyze what role they are offering you and then take your decisions keeping growth and development in mind. Once the interview comes to an end, thank the interviewer and place the chair back to the original position making sure it’s done without any noise.</p>

          <h3>You should know everything about your college, Be Positive & stay Confident in Interview</h3>
          <p>One should know everything about his \ her college that includes history and information about the governing body of the college. As you are the part of college people expect from you that you know each and everything about your college. Keeping these points into consideration during campus placement drive will help you crack any campus placement drive successfully. However, your skills and knowledge of the concepts are must for cracking placement drive.</p>

          <h3>Mock Interview \Test Preparation</h3>
          <p>As with every skill you’ve ever learned, you have to learn the techniques and then practice, practice, practice. A mock interview is an indispensable tool in preparing for an actual interview, and, when done well, closely monitors what you could expect during your actual interview. However, a mock interview will only be as good as the participants make it. Do your best to recreate actual interview conditions by being as formal and professional as possible. The mock interviewer should stay in character throughout the interview and the interviewee must act as though s/he is in an actual interview. By preparing in advance of the interview, candidates can develop a stronger sense of self-confidence. Mock interviews can additionally uncover problems, mistakes or mishaps for the job seeker long before the actual interview occurs. In this way, the candidate is able to work to correct these issues during the practice period, and therefore elevate his or her performance during the actual interview.</p>

          <h2>SOME PREPARATION TIPS</h2>
          <p>Prepare for the session by researching your company/industry of interest. Investigate and identify the most common industry traits sought (analytical skills, communication skills, business knowledge and problem-solving). Script answers to demonstrate your experience with these factors as well as answers to behavioural interview questions, such as “Walk me through your resume”, “What made you choose to major in your Degree Program…..”, “What sort of position are you looking for”….? , “Where do you see yourself in two, five or ten years….”?</p>

          <h3>Human Resource (HR) Interview</h3>
          <p>HR Interviews can be a source of stress and anxiety when you are looking for a job. HR interview is your chance to make a good impression on your potential employer and ultimately, get the job. How you present yourself, what you wear, how you answer difficult questions and your general attitude all play key roles in HR interviews. All interviews are not the same and HR interviews are often times a screening process that can earn you a follow-up or selection interview within the company. If an individual passes the selection interview, he may be required to participate in a group interview for final analysis. The key to success in HR interviews is to be yourself while respecting your employer. Always highlight your strengths in HR interview and do not talk of weaknesses. Never show your faults, and never share regret with an interviewer.</p>

          <h3>Be prepared</h3>
          <p>Preparation boosts confidence. Practice with your friends or relatives. Read your resume before your interview. It will keep your answers fresh.</p>

          <h3>Be polite</h3>
          <p>Do not interrupt to the interviewer. Listen carefully to the questions being asked and then anticipate. If the interview is being conducted in a restaurant, mind your table manners. If the interviewers are serious and soft-spoken, then you should be same as the interviewee. Avoid loud laughter during the interview.</p>

          <h3>Be positive and smile</h3>
          <p>Keep in mind that there is only one chance to make a first impression. Every company wants employees who are goal-oriented, career-driven, enthusiastic and motivated. Be the employee as they want. End the interview on a positive note. The hiring official needs to know that you are interested, enthusiastic and excited about the position and the company.</p>

          <h3>Don’t discuss pay too early</h3>
          <p>Questions about pay in the first interview from anyone other than a temporary applicant are always bothersome. Unless the subject comes up, don’t wade into the issue of the pay in the first interview.</p>

          <h3>Talk technically to techies only</h3>
          <p>Feel free to discuss what you know, but remember: If you are talking to a nontechnical manager or human resources representative, you are not going to impress them with talk about life in the trenches. Answer questions about your education and work briefly and keep the tech comments to a minimum until you know the history of the company and the people involved in the hiring process. If you have questions about the technology in use at the site, keep your questions specific and relevant to the position for which you are applying.</p>

          <h3>Electronic interruption: Not welcomed</h3>
          <p>Cellular phone etiquette might seem a trivial thing, especially if the human resources representative has a low tolerance for personal digital devices. Store your electronic devices in pocket, purse, or briefcase in silent mode.</p>

          <h3>Remember to say thank you</h3>
          <p>Beyond thanking your interviewers for their time as you leave, it’s vital that you follow up in written form. If the competition for a position is tight, a follow-up thank you note can mean a lot. If the manager is slow to hire, the arrival of a thank-you note can serve as a reminder about the candidate who’s awaiting the manager’s next move. Just after you have completed the interview, take note of anything specific you discussed and make a point of referencing it in your thank you letter.</p>



        </div> */}
      </section>
      <Footer />
    </>


  )
}
