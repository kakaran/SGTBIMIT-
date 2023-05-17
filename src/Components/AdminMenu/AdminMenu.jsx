import React, { useState } from "react";
import { ImBoxAdd } from "react-icons/im";
import { IoIosArrowDown } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import "./AdminMenu.css";
const AdminMenu = () => {
  const [isHomeActive, setIsHomeActive] = useState(false);
  const [isSUBTestimonialActive, setIsSUBTestimonialActive] = useState(false);
  const [isSUBSocietyActive, setIsSUBSocietyActive] = useState(false);
  const [isSUBEventsActive, setIsSUBEventsActive] = useState(false);
  const [isSUBEgalleryActive, setIsSUBEgalleryActive] = useState(false);
  const [isSUBEhandlerActive, setIsSUBEhandlerActive] = useState(false);
  const [isSUBFacultyActive, setIsSUBFacultyActive] = useState(false);
  const [isSUBPlacementActive, setIsSUBPlacementActive] = useState(false);
  const [isSUBRecruitersActive, setIsSUBRecruitersActive] = useState(false);
  const [isSUBCollabsActive, setIsSUBCollabsActive] = useState(false);
  const [isSUBAdministrationActive, setIsSUBAdministrationActive] =
    useState(false);
  const [isAdmissionActive, setIsAdmissionActive] = useState(false);
  const[isSUBNoticeActive, setIsSUBNoticeActive] = useState(false);
  const [isSUBAgalleryActive, setIsSUBAgalleryActive] = useState(false);
  const [isSUBRegistrationActive, setIsSUBRegistrationActive] = useState(false);
  const [isSUBAtestimonialsActive, setIsSUBAtestimonialsActive] = useState(false);
  const [isSUBStarsActive, setIsSUBStarsActive] = useState(false);
  const [isAboutActive, setIsAboutActive] = useState(false);
  const [isAlumniActive, setIsAlumniActive] = useState(false);
  const [isInterfaceActive, setIsInterfaceActive] = useState(false);
  const [isSocietiesActive, setIsSocietiesActive] = useState(false);
  const [isAcademicsActive, setIsAcademicsActive] = useState(false);
  const [isSUBEresourcesActive, setIsSUBEresourcesActive] = useState(false);
  const [isQuestionPaperActive, setIsQuestionPaperActive] = useState(false);
  const [isCalenderActive, setIsCalenderActive] = useState(false);

  const navigate = useNavigate();

  return (
    <>
      <div className="AdminMenuContainer">
        <div
          className="Categories"
          onClick={() => {
            navigate("/dashboard/admin");
          }}
        >
          <span className="categories_Header">
            <span>
              <MdDashboard className="CatHeadIcons" />
              <h3>Dashboard</h3>
            </span>
          </span>
        </div>
        <div className="Categories">
          <span
            className="categories_Header"
            onClick={() => {
              setIsHomeActive(!isHomeActive);
            }}
          >
            <span>
              <ImBoxAdd className="CatHeadIcons" />
              <h3>Home</h3>
            </span>
            <IoIosArrowDown className="CatHeadIcons" />
          </span>
          {isHomeActive && (
            <div className="Categoriesdropdown">
              <span>
                <p
                  onClick={() => {
                    setIsSUBTestimonialActive(!isSUBTestimonialActive);
                  }}
                  style={{
                    backgroundColor: "#e0e1dd",
                  }}
                >
                  TESTIMONIALS <IoIosArrowDown className="CatHeadIcons" />
                </p>
                {isSUBTestimonialActive && (
                  <div className="Categoriesdropdown">
                    <span>
                      <p
                        onClick={() => {
                          navigate("/dashboard/admin/Testimonials_Add");
                        }}
                      >
                        TESTIMONIAL ADD
                      </p>
                      <p
                        onClick={() => {
                          navigate("/dashboard/admin/Testimonials_Display");
                        }}
                      >
                        TESTIMONIALS DISPLAY
                      </p>
                    </span>
                  </div>
                )}

                <p
                  onClick={() => {
                    setIsSUBFacultyActive(!isSUBFacultyActive);
                  }}
                  style={{
                    backgroundColor: "#e0e1dd",
                  }}
                >
                  FACULTY <IoIosArrowDown className="CatHeadIcons" />
                </p>
                {isSUBFacultyActive && (
                  <div className="Categoriesdropdown">
                    <span>
                      <p
                        onClick={() => {
                          navigate("/dashboard/admin/Faculty_Add");
                        }}
                      >
                        FACULTY ADD
                      </p>
                      <p
                        onClick={() => {
                          navigate("/dashboard/admin/Faculty_Display");
                        }}
                      >
                        FACULTY DISPLAY
                      </p>
                    </span>
                  </div>
                )}

                <p
                  onClick={() => {
                    setIsSUBPlacementActive(!isSUBPlacementActive);
                  }}
                  style={{
                    backgroundColor: "#e0e1dd",
                  }}
                >
                  PLACEMENT AND INTERNSHIPS <IoIosArrowDown className="CatHeadIcons" />
                </p>
                {isSUBPlacementActive && (
                  <div className="Categoriesdropdown">
                    <span>
                      <p
                        onClick={() => {
                          navigate("/dashboard/admin/Placement_Add");
                        }}
                      >
                        PLACEMENT ADD
                      </p>
                      <p
                        onClick={() => {
                          navigate("/dashboard/admin/Placement_Display");
                        }}
                      >
                        PLACEMENT DISPLAY
                      </p>
                    </span>
                  </div>
                )}

                <p
                  onClick={() => {
                    setIsSUBCollabsActive(!isSUBCollabsActive);
                  }}
                  style={{
                    backgroundColor: "#e0e1dd",
                  }}
                >
                  COLLABORATIONS <IoIosArrowDown className="CatHeadIcons" />
                </p>
                {isSUBCollabsActive && (
                  <div className="Categoriesdropdown">
                    <span>
                      <p
                        onClick={() => {
                          navigate("/dashboard/admin/Collaborations_Add");
                        }}
                      >
                        COLLABORATIONS ADD
                      </p>
                      <p
                        onClick={() => {
                          navigate("/dashboard/admin/Collaborations_Display");
                        }}
                      >
                        COLLABORATIONS DISPLAY
                      </p>
                    </span>
                  </div>
                )}

                <p
                  onClick={() => {
                    setIsSUBRecruitersActive(!isSUBRecruitersActive);
                  }}
                  style={{
                    backgroundColor: "#e0e1dd",
                  }}
                >
                  RECRUITERS <IoIosArrowDown className="CatHeadIcons" />
                </p>
                {isSUBRecruitersActive && (
                  <div className="Categoriesdropdown">
                    <span>
                      <p
                        onClick={() => {
                          navigate("/dashboard/admin/Recruiters_Add");
                        }}
                      >
                        RECRUITERS ADD
                      </p>
                      <p
                        onClick={() => {
                          navigate("/dashboard/admin/Recruiters_Display");
                        }}
                      >
                        RECRUITERS DISPLAY
                      </p>
                    </span>
                  </div>
                )}
              </span>
            </div>
          )}
        </div>
        <div className="Categories">
          <span
            className="categories_Header"
            onClick={() => {
              setIsAboutActive(!isAboutActive);
            }}
          >
            <span>
              <ImBoxAdd className="CatHeadIcons" />
              <h3>ABOUT US</h3>
            </span>
            <IoIosArrowDown className="CatHeadIcons" />
          </span>
          {isAboutActive && (
            <div className="Categoriesdropdown">
              <span>
                <p
                  onClick={() => {
                    setIsSUBAdministrationActive(!isSUBAdministrationActive);
                  }}
                  style={{
                    backgroundColor: "#e0e1dd",
                  }}
                >
                  GOVERNING BODY <IoIosArrowDown className="CatHeadIcons" />
                </p>
                {isSUBAdministrationActive && (
                  <div className="Categoriesdropdown">
                    <span>
                      <p
                        onClick={() => {
                          navigate("/dashboard/admin/Administration_Add");
                        }}
                      >
                        GOVERNING BODY ADD
                      </p>
                      <p
                        onClick={() => {
                          navigate("/dashboard/admin/Administration_Display");
                        }}
                      >
                        GOVERNING BODY DISPLAY
                      </p>
                    </span>
                  </div>
                )}
              </span>
            </div>
          )}
        </div>

        <div className="Categories">
          <span
            className="categories_Header"
            onClick={() => {
              setIsSocietiesActive(!isSocietiesActive);
            }}
          >
            <span>
              <ImBoxAdd className="CatHeadIcons" />
              <h3>SOCITIES AND CLUBS</h3>
            </span>
            <IoIosArrowDown className="CatHeadIcons" />
          </span>
          {isSocietiesActive && (
            <div className="Categoriesdropdown">
              <span>
                <p
                  onClick={() => {
                    setIsSUBSocietyActive(!isSUBSocietyActive);
                  }}
                  style={{
                    backgroundColor: "#e0e1dd",
                  }}
                >
                  SOCIETIES <IoIosArrowDown className="CatHeadIcons" />
                </p>
                {isSUBSocietyActive && (
                  <div className="Categoriesdropdown">
                    <span>
                      <p
                        onClick={() => {
                          navigate("/dashboard/admin/Society_Add");
                        }}
                      >
                        SOCIETY ADD
                      </p>
                      <p
                        onClick={() => {
                          navigate("/dashboard/admin/Society_Display");
                        }}
                      >
                        SOCIETY DISPLAY
                      </p>
                    </span>
                  </div>
                )}
                <p
                  onClick={() => {
                    setIsSUBEventsActive(!isSUBEventsActive);
                  }}
                  style={{
                    backgroundColor: "#e0e1dd",
                  }}
                >
                  EVENTS <IoIosArrowDown className="CatHeadIcons" />
                </p>
                {isSUBEventsActive && (
                  <div className="Categoriesdropdown">
                    <span>
                      <p
                        onClick={() => {
                          navigate("/dashboard/admin/Society_Add");
                        }}
                      >
                        EVENTS ADD
                      </p>
                      <p
                        onClick={() => {
                          navigate("/dashboard/admin/Society_Display");
                        }}
                      >
                        EVENTS DISPLAY
                      </p>
                    </span>
                  </div>
                )}
                <p
                  onClick={() => {
                    setIsSUBEgalleryActive(!isSUBEgalleryActive);
                  }}
                  style={{
                    backgroundColor: "#e0e1dd",
                  }}
                >
                  EVENTS GALLERY <IoIosArrowDown className="CatHeadIcons" />
                </p>
                {isSUBEgalleryActive && (
                  <div className="Categoriesdropdown">
                    <span>
                      <p
                        onClick={() => {
                          navigate("/dashboard/admin/Society_Add");
                        }}
                      >
                        EVENTS GALLERY ADD
                      </p>
                      <p
                        onClick={() => {
                          navigate("/dashboard/admin/Society_Display");
                        }}
                      >
                        EVENTS GALLERY DISPLAY
                      </p>
                    </span>
                  </div>
                )}
                <p
                  onClick={() => {
                    setIsSUBEhandlerActive(!isSUBEhandlerActive);
                  }}
                  style={{
                    backgroundColor: "#e0e1dd",
                  }}
                >
                  EVENT HANDLER <IoIosArrowDown className="CatHeadIcons" />
                </p>
                {isSUBEhandlerActive && (
                  <div className="Categoriesdropdown">
                    <span>
                      <p
                        onClick={() => {
                          navigate("/dashboard/admin/Society_Add");
                        }}
                      >
                        EVENT HANDLER ADD
                      </p>
                      <p
                        onClick={() => {
                          navigate("/dashboard/admin/Society_Display");
                        }}
                      >
                        EVENT HANDLER DISPLAY
                      </p>
                    </span>
                  </div>
                )}
              </span>
            </div>
          )}
        </div>

        <div className="Categories">
          <span
            className="categories_Header"
            onClick={() => {
              setIsAcademicsActive(!isAcademicsActive);
            }}
          >
            <span>
              <ImBoxAdd className="CatHeadIcons" />
              <h3>ACADEMICS</h3>
            </span>
            <IoIosArrowDown className="CatHeadIcons" />
          </span>
          {isAcademicsActive && (
            <div className="Categoriesdropdown">
              <span>
                <p
                  onClick={() => {
                    setIsSUBEresourcesActive(!isSUBEresourcesActive);
                  }}
                  style={{
                    backgroundColor: "#e0e1dd",
                  }}
                >
                  E-RESOURCES <IoIosArrowDown className="CatHeadIcons" />
                </p>
                {isSUBEresourcesActive && (
                  <div className="Categoriesdropdown">
                    <span>
                      <p
                        onClick={() => {
                          navigate("/dashboard/admin/EResources_Add");
                        }}
                      >
                        E-RESOURCES ADD
                      </p>
                      <p
                        onClick={() => {
                          navigate("/dashboard/admin/EResources_Display");
                        }}
                      >
                        E-RESOURCES DISPLAY
                      </p>
                    </span>
                  </div>
                )}
                <p
                  onClick={() => {
                    setIsQuestionPaperActive(!isQuestionPaperActive);
                  }}
                  style={{
                    backgroundColor: "#e0e1dd",
                  }}
                >
                  PREV YEAR PAPERS <IoIosArrowDown className="CatHeadIcons" />
                </p>
                {isQuestionPaperActive && (
                  <div className="Categoriesdropdown">
                    <span>
                      <p
                        onClick={() => {
                          navigate("/dashboard/admin/Prev_Year_Paper_Add");
                        }}
                      >
                        PREV YEAR PAPERS ADD
                      </p>
                      <p
                        onClick={() => {
                          navigate("/dashboard/admin/Prev_Year_Paper_Dislay");
                        }}
                      >
                        PREV YEAR PAPERS DISPLAY
                      </p>
                    </span>
                  </div>
                )}
                <p
                  onClick={() => {
                    setIsCalenderActive(!isCalenderActive);
                  }}
                  style={{
                    backgroundColor: "#e0e1dd",
                  }}
                >
                  ACADEMIC CALENDER <IoIosArrowDown className="CatHeadIcons" />
                </p>
                {isCalenderActive && (
                  <div className="Categoriesdropdown">
                    <span>
                      <p
                        onClick={() => {
                          navigate("/dashboard/admin/Calender_Add");
                        }}
                      >
                        CALENDER ADD
                      </p>
                      <p
                        onClick={() => {
                          navigate("/dashboard/admin/Calender_Display");
                        }}
                      >
                        CALENDER DISPLAY
                      </p>
                    </span>
                  </div>
                )}
              </span>
            </div>
          )}
        </div>

        <div className="Categories">
          <span
            className="categories_Header"
            onClick={() => {
              setIsAdmissionActive(!isAdmissionActive);
            }}
          >
            <span>
              <ImBoxAdd className="CatHeadIcons" />
              <h3>ADMISSION</h3>
            </span>
            <IoIosArrowDown className="CatHeadIcons" />
          </span>
          {isAdmissionActive && (
            <div className="Categoriesdropdown">
              <span>
                <p
                  onClick={() => {
                    setIsSUBNoticeActive(!isSUBNoticeActive);
                  }}
                  style={{
                    backgroundColor: "#e0e1dd",
                  }}
                >
                  NOTICES <IoIosArrowDown className="CatHeadIcons" />
                </p>
                {isSUBNoticeActive && (
                  <div className="Categoriesdropdown">
                    <span>
                      <p
                        onClick={() => {
                          navigate("/dashboard/admin/Notice_Add");
                        }}
                      >
                        NOTICE ADD
                      </p>
                      <p
                        onClick={() => {
                          navigate("/dashboard/admin/Notice_Display");
                        }}
                      >
                        NOTICE DISPLAY
                      </p>
                    </span>
                  </div>
                )}
              </span>
            </div>
          )}
        </div>

        <div className="Categories">
          <span
            className="categories_Header"
            onClick={() => {
              setIsAlumniActive(!isAlumniActive);
            }}
          >
            <span>
              <ImBoxAdd className="CatHeadIcons" />
              <h3>ALUMNI</h3>
            </span>
            <IoIosArrowDown className="CatHeadIcons" />
          </span>
          {isAlumniActive && (
            <div className="Categoriesdropdown">
              <span>
                <p
                  onClick={() => {
                    setIsSUBAtestimonialsActive(!isSUBAtestimonialsActive);
                  }}
                  style={{
                    backgroundColor: "#e0e1dd",
                  }}
                >
                  TESTIMONIALS <IoIosArrowDown className="CatHeadIcons" />
                </p>
                {isSUBAtestimonialsActive && (
                  <div className="Categoriesdropdown">
                    <span>
                      <p
                        onClick={() => {
                          navigate("/dashboard/admin/Testimonial_Add");
                        }}
                      >
                        TESTIMONIALS ADD
                      </p>
                      <p
                        onClick={() => {
                          navigate("/dashboard/admin/Testimonial_Display");
                        }}
                      >
                        TESTIMONIALS DISPLAY
                      </p>
                    </span>
                  </div>
                )}
                <p
                  onClick={() => {
                    setIsSUBAgalleryActive(!isSUBAgalleryActive);
                  }}
                  style={{
                    backgroundColor: "#e0e1dd",
                  }}
                >
                  GALLERY <IoIosArrowDown className="CatHeadIcons" />
                </p>
                {isSUBAgalleryActive && (
                  <div className="Categoriesdropdown">
                    <span>
                      <p
                        onClick={() => {
                          navigate("/dashboard/admin/Alumini/gallery/aluminiAddImage");
                        }}
                      >
                        GALLERY ADD
                      </p>
                      <p
                        onClick={() => {
                          navigate("/dashboard/admin/Prev_Year_Paper_Dislay");
                        }}
                      >
                        GALLERY DISPLAY
                      </p>
                    </span>
                  </div>
                )}
                <p
                  onClick={() => {
                    setIsSUBRegistrationActive(!isSUBRegistrationActive);
                  }}
                  style={{
                    backgroundColor: "#e0e1dd",
                  }}
                >
                  REGISTRATION <IoIosArrowDown className="CatHeadIcons" />
                </p>
                {isSUBRegistrationActive && (
                  <div className="Categoriesdropdown">
                    <span>
                      <p
                        onClick={() => {
                          navigate("/dashboard/admin/Registration_Add");
                        }}
                      >
                        REGISTRATION ADD
                      </p>
                      <p
                        onClick={() => {
                          navigate("/dashboard/admin/Registration_Display");
                        }}
                      >
                        REGISTRATION DISPLAY
                      </p>
                    </span>
                  </div>
                )}
              </span>
            </div>
          )}
        </div>

        <div className="Categories">
          <span
            className="categories_Header"
            onClick={() => {
              setIsInterfaceActive(!isInterfaceActive);
            }}
          >
            <span>
              <ImBoxAdd className="CatHeadIcons" />
              <h3>INDUSTRY INTERFACE</h3>
            </span>
            <IoIosArrowDown className="CatHeadIcons" />
          </span>
          {isInterfaceActive && (
            <div className="Categoriesdropdown">
              <span>
                <p
                  onClick={() => {
                    setIsSUBStarsActive(!isSUBStarsActive);
                  }}
                  style={{
                    backgroundColor: "#e0e1dd",
                  }}
                >
                  FEATURED STARS <IoIosArrowDown className="CatHeadIcons" />
                </p>
                {isSUBStarsActive && (
                  <div className="Categoriesdropdown">
                    <span>
                      <p
                        onClick={() => {
                          navigate("/dashboard/admin/PlacementFeature_Add");
                        }}
                      >
                        STARS ADD
                      </p>
                      <p
                        onClick={() => {
                          navigate("/dashboard/admin/PlacementFeature_Display");
                        }}
                      >
                        STARS DISPLAY
                      </p>
                    </span>
                  </div>
                )}
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AdminMenu;
