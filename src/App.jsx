import React from 'react'
import { AnimatePresence } from 'framer-motion'
import Home from './Home/Home.jsx'
import { Routes, Route, useLocation } from 'react-router-dom'
import './styles.css'
import AdminisCarousel from './About/GoverningBody/AdminisCarousel.jsx'
import About from './About/About'
import Vision from './About/Vision/Vision'
import DirectorReadMore from './DirectorReadMore/DirectorReadMore'
import Society from './Society/pages/Society.jsx'
import Faculty from './Academics/Faculty/Faculty'
import EResources from './Academics/EResources/EResources.jsx'
import Examination from './Academics/Examination/Examination'
import Syllabus from './Academics/Syllabus/Syllabus.jsx'
import Fees from './Admission/Fees/Fees'
import Eligibility from './Admission/Course-Eligibility/Eligibility.jsx'
import Notice from './Admission/Notices/Notices.jsx'
import Bba from './Academics/Courses/Bba'
import BbaBI from './Academics/Courses/BbaBI'
import Bca from './Academics/Courses/Bca'
import Bcom from './Academics/Courses/Bcom'
import AcademicCal from './Academics/AcademicCalendar/AcademicCal.jsx'
import AlumniMeet from './Alumni/AlumniMeet/AlumniMeet.jsx'
import TestimonialsAL from './Alumni/Testimonials/TestimonialsAL.jsx'
import Events from './Events/Events.jsx'
import Gallery from './Alumni/Gallery/Gallery.jsx'
import Placements from './Industry Interface/Placements/Placements.jsx'
import Research from './Academics/Research/Research.jsx'
import NoticePDF from './Admission/Notices/NoticePDF.jsx'
import Registration from './Alumni/Registration/Registration.jsx'
import CommitteePDF from './Home/Committees/CommitteePDF.jsx'
import QuestionPaper from './Academics/QuestionPaperDisplay/QuestionPaper.jsx'

/* Admin imports */


import Dashboard from './Login/Dashboard.jsx'
import TestimonialUpdate from './Pages/Testimonials/Testimonial_Update/Testimonial_Update.jsx'
import SocietyUpdate from './Pages/Society/Society_Update/Society_Update.jsx'
import FacultyAdd from './Pages/Faculty/Faculty_Add/FacultyAdd.jsx'
import FacultyDisplay from './Pages/Faculty/Faculty_Display/FacultyDisplay.jsx'
import FacultyUpdate from './Pages/Faculty/Faculty_Update/FacultyUpdate.jsx'
import AdministrationAdd from './Pages/Administration/Administration_Add/AdministrationAdd.jsx'
import AdministrationDisplay from './Pages/Administration/Administration_Display/AdministrationDisplay.jsx'
import AdministrationUpdate from "./Pages/Administration/Administration_Update/AdministrationUpdate.jsx"
import TestimonialsADD from './Pages/Testimonials/Testimonials_ADD/Testimonials_ADD.jsx'
import TestimonialDisplay from './Pages/Testimonials/Testimonials_Display/Testimonial_Display.jsx'
import SocietyAdd from "./Pages/Society/Society_Add/Society_Add.jsx"
import SocietyDisplay from './Pages/Society/Society_Display/Society_Display.jsx'
import PlacementDisplay from './Pages/Placement and Internship/Placement_Display/Placement_Display.jsx'
import PlacementUpdate from './Pages/Placement and Internship/Placement_Update/Placement_Update.jsx'
import PlacementAdd from './Pages/Placement and Internship/Placement_Add/Placement_Add.jsx'
import RecruitersAdd from './Pages/Recruiters/Recruiters_Add/Recruiters_Add.jsx'
import RecruitersDisplay from './Pages/Recruiters/Recruiters_Display/Recruiters_Display.jsx'
import RecruitersUpdate from './Pages/Recruiters/Recruiters_Update/Recruiters_Update.jsx'
import EResourcesAdd from './Pages/E_Resources/E_Resources_Add/E_Resources_Add.jsx'
import EResourcesDisplay from './Pages/E_Resources/E_Resources_Display/E_Resources_Display.jsx'
import EResourcesUpdate from './Pages/E_Resources/E_Resources_Update/E_Resources_Update.jsx'
import QuestionPaperDisplay from './Pages/QuestionPaper/QuestionPaperDisplay/QuestionPaperDisplay.jsx'
import QuestionPaperAdd from './Pages/QuestionPaper/QuestionPaperAdd/QuestionPaperAdd.jsx'
import QuestionPaperPDFDisplay from './Pages/QuestionPaper/QuestionPaperDisplay/QuestionPaperPDFDisplay.jsx'
import CalenderAdd from './Pages/Academic Calender/Calender_Add/Calender_Add.jsx'
import CalenderDisplay from './Pages/Academic Calender/Calender_Display/Calender_Display.jsx'
import CalenderUpdate from './Pages/Academic Calender/Calender_Update/Calender_Update.jsx'
import Login from './Login/Login.jsx'
import QuestionPaperUpdate from './Pages/QuestionPaper/QuestionPaperUpdate/QuestionPaperUpdate.jsx'
import PrivateRouter from './Routes/Private.jsx'
import NoticeAdd from './Pages/Notice/Notice_Add/Notice_Add.jsx'
import CollaborationsAdd from './Pages/Collabrations/Collab_Add/Collab_Add.jsx'
import CollaborationsDisplay from './Pages/Collabrations/Collab_Display/Collab_Display.jsx'
import ForgetPassword from './Login/ForgetPassword.jsx'
import NoticeDisplay from './Pages/Notice/Notice_Display/Notice_Display.jsx'
import AlumniTestiAdd from './Pages/Alumni/Testimonials/Testi_Add/Testi_Add.jsx'
import AlumniTestiDisplay from './Pages/Alumni/Testimonials/Testi_Display/Testi_Display.jsx'
import AlumniTestiUpdate from './Pages/Alumni/Testimonials/Testi_Update/Testi_Update.jsx'
import StarsAdd from './Pages/Industry Interface/Featured Stars/Star_Add/Star_Add.jsx'
import StarsDisplay from './Pages/Industry Interface/Featured Stars/Star_Display/Star_Display.jsx'
import StarsUpdate from './Pages/Industry Interface/Featured Stars/Star_Update/Star_Update.jsx'
import RegistrationAdd from './Pages/Alumni/Registration/Registration_Add/Registration_Add.jsx'
import RegistrationDisplay from './Pages/Alumni/Registration/Registration_Display/Registration_Display.jsx'
import AGalleryAdd from './Pages/Alumni/Gallary/Gallary_Add/Gallary_Add.jsx'
import GallaryDisplay from './Pages/Alumni/Gallary/Gallary_Display/Gallary_Display.jsx'
import EventAdd from './Pages/Society/Event/Event_Add/Event_Add.jsx'
import EventDisplay from './Pages/Society/Event/Event_Display/Event_Display.jsx'
import EventUpdate from './Pages/Society/Event/Event_Update/Event_Update.jsx'
import EventHAdd from './Pages/Society/Event_Handler/EventHandler_Add/EventH_Add.jsx'
import NoticeUpdate from './Pages/Notice/Notice_Update/Notice_Update.jsx'
import PTeamAdd from './Pages/Industry Interface/Placement Team/PlacementTeam_Add/PlacementTeam_Add.jsx'
import PTeamDisplay from './Pages/Industry Interface/Placement Team/PlacementTeam_Display/PlacementTeam_Display.jsx'
import PStatsAdd from './Pages/Industry Interface/Placement Statics/PlacementStats_Add/PlacementStats_Add.jsx'
import PStatsDisplay from './Pages/Industry Interface/Placement Statics/PlacementStats_Display/PlacementStats_Display.jsx'

function App() {
  const location = useLocation()

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route index element={<Home />}></Route>
        <Route path="/about" element={<About />} />
        <Route path='/about/governing-body' element={<AdminisCarousel />} />
        <Route path="/about/vision-and-mission" element={<Vision />} />
        <Route path="/director-readmore" element={<DirectorReadMore />} />
        <Route path='/society/:id' element={<Society />} />
        <Route path='/academics/faculty' element={<Faculty />} />
        <Route path='/academics/e-resources' element={<EResources />} />
        <Route path='/academics/examinations' element={<Examination />} />
        <Route path='/admission/fees' element={<Fees />} />
        <Route path='/academics/syllabus' element={<Syllabus />} />
        <Route path='/admission/courses-eligibility' element={<Eligibility />} />
        <Route path='/admission/notices' element={<Notice />} />
        <Route path='/admission/notices/:id' element={<NoticePDF />} />
        <Route path='/alumini/gallery' element={<Gallery />} />
        <Route path='/academics/courses/bba' element={<Bba />} />
        <Route path='/academics/courses/bbab&i' element={<BbaBI />} />
        <Route path='/academics/courses/bca' element={<Bca />} />
        <Route path='/academics/courses/bcom' element={<Bcom />} />
        <Route path='/academics/prev-year-papers' element={<QuestionPaper />} />
        <Route path='/academics/academic-calender' element={<AcademicCal />} />
        <Route path='/academics/research' element={<Research />} />
        <Route path='/alumini/alumini-meet' element={<AlumniMeet />} />
        <Route path='/alumini/testimonials' element={<TestimonialsAL />} />
        <Route path="/events/:id" element={<Events />} />
        <Route path='/committees/:id' element={<CommitteePDF />}></Route>
        <Route path='/alumini/registration' element={<Registration />} />
        <Route path='/industry/placements' element={<Placements />} />

        {/* Admin Routes */}

        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<PrivateRouter />} >
          <Route path='admin' element={<Dashboard />} />
          <Route path='admin/Testimonials_Add' element={<TestimonialsADD />} />
          <Route path='admin/Testimonials_Display' element={<TestimonialDisplay />} />
          <Route path='admin/Testimonials_Update/:id' element={<TestimonialUpdate />} />
          <Route path='admin/Society_Add' element={<SocietyAdd />} />
          <Route path='admin/Society_Display' element={<SocietyDisplay />} />
          <Route path='admin/Society_Update/:_id' element={<SocietyUpdate />} />
          <Route path='admin/Faculty_Add' element={<FacultyAdd />} />
          <Route path='admin/Faculty_Display' element={<FacultyDisplay />} />
          <Route path='admin/Faculty_Update/:_id' element={<FacultyUpdate />} />
          <Route path='admin/Administration_Add' element={<AdministrationAdd />} />
          <Route path='admin/Administration_Display' element={<AdministrationDisplay />} />
          <Route path='admin/Administration_Update/:_id' element={<AdministrationUpdate />} />
          <Route path='admin/Placement_Add' element={<PlacementAdd />} />
          <Route path='admin/Placement_Display' element={<PlacementDisplay />} />
          <Route path='admin/Placement_Update/:_id' element={<PlacementUpdate />} />
          <Route path='admin/Recruiters_Add' element={<RecruitersAdd />} />
          <Route path='admin/Recruiters_Display' element={<RecruitersDisplay />} />
          <Route path='admin/Recruiters_Update/:_id' element={<RecruitersUpdate />} />
          <Route path='admin/Collaborations_Add' element={<CollaborationsAdd />} />
          <Route path='admin/Collaborations_Display' element={<CollaborationsDisplay />} />
          <Route path='admin/EResources_Add' element={<EResourcesAdd />} />
          <Route path='admin/EResources_Display' element={<EResourcesDisplay />} />
          <Route path='admin/EResources_Update/:_id' element={<EResourcesUpdate />} />
          <Route path='admin/Calender_Add' element={<CalenderAdd />} />
          <Route path='admin/Calender_Display' element={<CalenderDisplay />} />
          <Route path='admin/Calender_Update/:id' element={<CalenderUpdate />} />
          <Route path='admin/Prev_Year_Paper_Dislay' element={<QuestionPaperDisplay />} />
          <Route path='admin/Prev_Year_Paper_Add' element={<QuestionPaperAdd />} />
          <Route path='admin/Prev_Year_Paper_Update/:course/:Year/:Semester/:_id' element={<QuestionPaperUpdate />} />
          <Route path='admin/Notice_Add' element={<NoticeAdd />} />
          <Route path='admin/Notice_Display' element={<NoticeDisplay />} />
          <Route path='admin/Notice_Update/:id' element={<NoticeUpdate />} />
          <Route path='admin/alumini_Testimonial_Add' element={<AlumniTestiAdd />} />
          <Route path='admin/alumini_Testimonial_Display' element={<AlumniTestiDisplay />} />
          <Route path='admin/alumini_Testimonial_Update/:id' element={<AlumniTestiUpdate />} />
          <Route path='admin/PlacementFeature_Add' element={<StarsAdd />} />
          <Route path='admin/PlacementFeature_Display' element={<StarsDisplay />} />
          <Route path='admin/PlacementFeature_Update/:id' element={<StarsUpdate />} />
          <Route path='admin/Placement_Team_Add' element={<PTeamAdd />} />
          <Route path='admin/Placement_Team_Display' element={<PTeamDisplay />} />
          <Route path='admin/placement_Statics_Add' element={<PStatsAdd />} />
          <Route path='admin/placement_Statics_Display' element={<PStatsDisplay />} />
          <Route path='admin/Registration_Add' element={<RegistrationAdd />} />
          <Route path='admin/Registration_Display' element={<RegistrationDisplay />} />
          <Route path='admin/Alumini/gallery/aluminiAddImage' element={<AGalleryAdd />} />
          <Route path='admin/Alumini/gallery/aluminiDisplay' element={<GallaryDisplay />} />

          <Route path='admin/Event_Add' element={<EventAdd />} />
          <Route path='admin/Event_Display' element={<EventDisplay />} />
          <Route path='admin/Event_Update/:id' element={<EventUpdate />} />
          <Route path='admin/EventHandler_Add' element={<EventHAdd />} />
        </Route>
        <Route path='/admin/forgetPassword/:_id/:email/:status' element={<ForgetPassword />} />
        <Route path="/Prev_Year_Paper_PDF_Display/:_id/:index" element={<QuestionPaperPDFDisplay />} />
        {/* <Route path='/admin/login' element={<Login />} /> */}


      </Routes>
    </AnimatePresence>

  );
}

export default App;