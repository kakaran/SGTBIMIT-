import React, { useEffect, useState } from "react";
import AdminMenu from "../../../../Components/AdminMenu/AdminMenu";
import AdminHeader from "../../../../Components/AdminHeader/AdminHeader";
import "../../Society_Display/Society_Display.css";
import axios from "axios";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import FileData from "./FileData";
import "../../../QuestionPaper/QuestionPaperDisplay/QuestionPaperDisplay.css";
import { Helmet } from "react-helmet";
import _ from 'lodash'

const EventDisplay = () => {
  // const [render, setRender] = useState(0);
  // const [getSociety, setSociety] = useState([]);
  // const [dataReset, setDataReset] = useState(true);
  const [getEventFilter, setEventFilter] = useState({
    year: "",
    eventHandler: "",
  });

  const [EventsAaray, setEventAaray] = useState({
    Events: ""
  });

  const [eventsData, setEventsData] = useState();

  const [filter, setfilter] = useState({});
  const [render, setRender] = useState(0)

  const Onchagetesdetail = (e) => {
    setEventFilter({ ...getEventFilter, [e.target.name]: e.target.value });
  };

  const navigator = useNavigate("");

  //-------------------- Event Handler Data get ----------------------//
  const EventHandlerData = async () => {
    try {
      const Data = (
        await axios.get(
          `${import.meta.env.VITE_API_URL}/Eventhandler/AllEvents_Display`
        )
      ).data;
      if (Data) {
        setEventsData(Data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };


  const EventsFind = async () => {

    eventsData.map((value) => {
      if (value?.name == getEventFilter?.eventHandler) {
        value?.Years?.map((value) => {
          if (value?.year == getEventFilter?.year) {
            setEventAaray({ Events: value?.Events })
          }
        });
      }
    });
    setRender(1)
    console.log(EventsAaray);
  };


  const EventsData = async () => {
    try {
      const data = await axios.get();
    } catch (error) {
      console.log(error);
    }
  };

  //--------------- Question Paper Delete ----------------//
  const PaperDelete = async (value) => {
    try {
      const _id = value;
      await axios.delete(
        `${import.meta.env.VITE_API_URL}/Event/Event_Delete/${_id}`
      );
      // setRender(1);
    } catch (error) {
      console.log(error);
    }
  };

  //----------- Reset the Data --------------//
  const ResetPaperData = async () => {
    // setRender(1);
    setEventFilter({
      year: " ",
      eventHandler: " ",
    });
    setEventAaray({
      Events: " "
    })
  };

  //--------------- Get the Filter Data ----------------------//
  const filterData = async (course) => {
    try {
      const data = (
        await axios.get(
          `${import.meta.env.VITE_API_URL}/QuestionPaper/Filter_Data/${course}`
        )
      ).data;
      setfilter(data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    EventHandlerData();
  }, []);

  console.log(EventsAaray);

  return (
    <>
      <Helmet title="Display Events" />
      <div className="SocietyDisplayContainer">
        <div className="SideBar">
          <AdminMenu />
        </div>
        <div className="Testimonial_DetailContainer">
          <AdminHeader />
          <div className="TesHeaderCard">
            <div className="TesDisplayHeading">
              <h1>Events</h1>
            </div>
            <div className="filterContainer">
              <span className="NameAndSelect">
                <h4>Events </h4>
                <select
                  name="eventHandler"
                  id=""
                  placeholder="Events"
                  value={getEventFilter.eventHandler}
                  onChange={Onchagetesdetail}
                >
                  <option value=" ">Select Event</option>
                  {eventsData?.map((value) => {
                    return <option value={value.name}>{value.name}</option>;
                  })}
                </select>
              </span>
              <span className="NameAndSelect">
                <h4>Year</h4>
                <select
                  name="year"
                  id=""
                  placeholder="year"
                  onChange={Onchagetesdetail}
                  value={getEventFilter.year}
                >
                  <option value=" ">Select Year</option>
                  {eventsData?.map((value) => {
                    if (value.name == getEventFilter.eventHandler) {
                      return value.Years.map((value1) => {
                        return (
                          <option value={value1.year}>{value1.year}</option>
                        );
                      });
                    }
                  })}
                </select>
              </span>
              <button onClick={EventsFind} className="button-30">
                Search
              </button>
              <button onClick={ResetPaperData} className="button-30">
                Clear
              </button>
            </div>
            {render &&
              <div className="flex flex-wrap justify-between gap-5">
                {EventsAaray?.Events?.map(events => {
                  if (events.Event_id) {
                    return (
                      <div className="flex flex-col w-96 shadow-md bg-white p-5">
                        <h1 className="my-bold text-xl m-0 pb-2" style={{ borderBottom: "1px solid gray" }}>
                          {_.startCase(_.toLower(events.Event_id?.name))}
                        </h1>
                        <div className="flex justify-between gap-2 items-center mb-5">
                          <h2 className="my-bold text-lg text-slate-500 m-0">
                            {_.startCase(_.toLower(events.Event_id?.eventHandler))}
                          </h2>
                          <h4 className="my-bold text-sm text-slate-500 m-0">
                            {events.Event_id?.year}
                          </h4>
                        </div>
                        <img src={`${import.meta.env.VITE_API_URL}/Event/Event_MainImage_Display/${events.Event_id?._id}`} alt="cant load" className="rounded-md object-fill w-full aspect-video mt-auto" />
                        <div className="flex justify-between p-5">
                          <div onClick={() => { PaperDelete(events.Event_id?._id) }}>
                            <RiDeleteBin6Line color="red" size="1.5rem" />
                          </div>
                        </div>
                      </div>
                    )
                  } else {
                    return
                  }
                })}
              </div>
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default EventDisplay;
