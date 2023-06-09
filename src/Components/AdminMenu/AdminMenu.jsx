import React, { useEffect, useState } from "react";
import { ImBoxAdd } from "react-icons/im";
import { IoIosArrowDown } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { pages } from "../../constants/paths";
import "./AdminMenu.css";
const AdminMenu = () => {
  const [isHomeActive, setIsHomeActive] = useState(false);
  const [isSUBTestimonialActive, setIsSUBTestimonialActive] = useState(false);
  const [isSUBSocietyActive, setIsSUBSocietyActive] = useState(false);
  const [isSUBEventsActive, setIsSUBEventsActive] = useState(false);
  const [isSUBEhandlerActive, setIsSUBEhandlerActive] = useState(false);
  const [isSUBFacultyActive, setIsSUBFacultyActive] = useState(false);
  const [isSUBPlacementActive, setIsSUBPlacementActive] = useState(false);
  const [isSUBRecruitersActive, setIsSUBRecruitersActive] = useState(false);
  const [isSUBCollabsActive, setIsSUBCollabsActive] = useState(false);
  const [isSUBAdministrationActive, setIsSUBAdministrationActive] =
    useState(false);
  const [isAdmissionActive, setIsAdmissionActive] = useState(false);
  const [isSUBNoticeActive, setIsSUBNoticeActive] = useState(false);
  const [isSUBAgalleryActive, setIsSUBAgalleryActive] = useState(false);
  const [isSUBRegistrationActive, setIsSUBRegistrationActive] = useState(false);
  const [isSUBAtestimonialsActive, setIsSUBAtestimonialsActive] = useState(false);
  const [isSUBStarsActive, setIsSUBStarsActive] = useState(false);
  const [isSUBPteamActive, setIsSUBPteamActive] = useState(false);
  const [isSUBPstatsActive, setIsSUBPstatsActive] = useState(false);
  const [isAboutActive, setIsAboutActive] = useState(false);
  const [isAlumniActive, setIsAlumniActive] = useState(false);
  const [isInterfaceActive, setIsInterfaceActive] = useState(false);
  const [isSocietiesActive, setIsSocietiesActive] = useState(false);
  const [isAcademicsActive, setIsAcademicsActive] = useState(false);
  const [isSUBEresourcesActive, setIsSUBEresourcesActive] = useState(false);
  const [isSUBRdActive, setIsSUBRdActive] = useState(false);
  const [isSUBIvisitActive, setIsSUBIvisitActive] = useState(false);
  const [isQuestionPaperActive, setIsQuestionPaperActive] = useState(false);
  const [isCalenderActive, setIsCalenderActive] = useState(false);

  const navigate = useNavigate();

  const [query, setQuery] = useState("")
  const [searchedPages, setSearchedPages] = useState([])

  const setPages = () => {
    if (!query) {
      setSearchedPages([])
      return
    }
    //console.log(query);
    const searchedPages = pages.filter((page) => page.name.toLowerCase().includes(query.toLowerCase()))
    setSearchedPages(searchedPages)
  }
  useEffect(() => {
    setPages()
  }, [query])

  return (
    <>
      <div className="AdminMenuContainer">
        <div className="mx-auto flex flex-col w-full">
          <input type="text"
            onChange={(e) => {
              setQuery(e.target.value)
            }}
            value={query}
            placeholder="Search..."
            className="rounded-full px-[1em] py-[.8em] focus:outline-none focus:border-cyan-500"
            onFocus={() => setPages()}
            name="search"
          />
          {searchedPages &&
            <div className="flex flex-col justify-center items-start my-4">
              {searchedPages.map((page, index) => {
                /* if (index > 5) return (<></>) */
                return (
                  <div className="px-2 py-2 bg-gray-200 w-full border-b-2 border-0 border-b-white border-solid text-gray-900 rounded-sm cursor-pointer hover:bg-gray-300" onClick={() => { navigate(page.path); console.log(page.path); }}> {page.name} </div>
                )
              })}
            </div>}
        </div >
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
                          navigate("/dashboard/admin/Event_Add");
                        }}
                      >
                        EVENTS ADD
                      </p>
                      <p
                        onClick={() => {
                          navigate("/dashboard/admin/Event_Display");
                        }}
                      >
                        EVENTS DISPLAY
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
                          navigate("/dashboard/admin/EventHandler_Add");
                        }}
                      >
                        EVENT HANDLER ADD
                      </p>
                      <p
                        onClick={() => {
                          navigate("/dashboard/admin/EventHandler_Display");
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
                <p
                  onClick={() => {
                    setIsSUBRdActive(!isSUBRdActive);
                  }}
                  style={{
                    backgroundColor: "#e0e1dd",
                  }}
                >
                  RESEARCH & DEVELOPMENT <IoIosArrowDown className="CatHeadIcons" />
                </p>
                {isSUBRdActive && (
                  <div className="Categoriesdropdown">
                    <span>
                      <p
                        onClick={() => {
                          navigate("/dashboard/admin/Research_Development_Add");
                        }}
                      >
                        R&D ADD
                      </p>
                      <p
                        onClick={() => {
                          navigate("/dashboard/admin/Research_Development_Display");
                        }}
                      >
                        R&D DISPLAY
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
                          navigate("/dashboard/admin/alumini_Testimonial_Add");
                        }}
                      >
                        TESTIMONIALS ADD
                      </p>
                      <p
                        onClick={() => {
                          navigate("/dashboard/admin/alumini_Testimonial_Display");
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
                          navigate("/dashboard/admin/Alumini/gallery/aluminiDisplay");
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
                    setIsSUBIvisitActive(!isSUBIvisitActive);
                  }}
                  style={{
                    backgroundColor: "#e0e1dd",
                  }}
                >
                  INDUSTRIAL VISIT <IoIosArrowDown className="CatHeadIcons" />
                </p>
                {isSUBIvisitActive && (
                  <div className="Categoriesdropdown">
                    <span>
                      <p
                        onClick={() => {
                          navigate("/dashboard/admin/IndustrialVisits_Add");
                        }}
                      >
                        INDUSTRIAL VISIT ADD
                      </p>
                      <p
                        onClick={() => {
                          navigate("/dashboard/admin/IndustrialVisits_Display");
                        }}
                      >
                        INDUSTRIAL VISIT DISPLAY
                      </p>
                    </span>
                  </div>
                )}

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

                <p
                  onClick={() => {
                    setIsSUBPteamActive(!isSUBPteamActive);
                  }}
                  style={{
                    backgroundColor: "#e0e1dd",
                  }}
                >
                  PLACEMENT TEAM <IoIosArrowDown className="CatHeadIcons" />
                </p>
                {isSUBPteamActive && (
                  <div className="Categoriesdropdown">
                    <span>
                      <p
                        onClick={() => {
                          navigate("/dashboard/admin/Placement_Team_Add");
                        }}
                      >
                        PLACEMENT TEAM ADD
                      </p>
                      <p
                        onClick={() => {
                          navigate("/dashboard/admin/Placement_Team_Display");
                        }}
                      >
                        PLACEMENT TEAM DISPLAY
                      </p>
                    </span>
                  </div>
                )}

                <p
                  onClick={() => {
                    setIsSUBPstatsActive(!isSUBPstatsActive);
                  }}
                  style={{
                    backgroundColor: "#e0e1dd",
                  }}
                >
                  PLACEMENT STATICS <IoIosArrowDown className="CatHeadIcons" />
                </p>
                {isSUBPstatsActive && (
                  <div className="Categoriesdropdown">
                    <span>
                      <p
                        onClick={() => {
                          navigate("/dashboard/admin/placement_Statics_Add");
                        }}
                      >
                        PLACEMENT STATICS ADD
                      </p>
                      <p
                        onClick={() => {
                          navigate("/dashboard/admin/placement_Statics_Display");
                        }}
                      >
                        PLACEMENT STATICS DISPLAY
                      </p>
                    </span>
                  </div>
                )}
              </span>
            </div>
          )}
        </div>
      </div >
    </>
  );
};

export default AdminMenu;
