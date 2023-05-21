import React, { useEffect, useState } from "react";
import AdminMenu from "../../../../Components/AdminMenu/AdminMenu";
import AdminHeader from "../../../../Components/AdminHeader/AdminHeader";
import "../../Society_Display/Society_Display.css";
import axios from "axios";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import FileData from "./FileData";
import "../../../QuestionPaper/QuestionPaperDisplay/QuestionPaperDisplay.css"
import { Helmet } from "react-helmet";

const EventDisplay = () => {
  // const [render, setRender] = useState(0);
  // const [getSociety, setSociety] = useState([]);
  // const [dataReset, setDataReset] = useState(true);
  const [getPaperFilter, setPaperfilter] = useState({
    year: "",
    eventHandler: "",
  });

  const [getPaperFilterData, setPaperFilterData] = useState({
    year: "",
    eventHandler: "",
    _id: "",
  });

  const [filter, setfilter] = useState({});

  const Onchagetesdetail = (e) => {
    setPaperfilter({ ...getPaperFilter, [e.target.name]: e.target.value });
  };

  const navigator = useNavigate("");

  //-------------------- Single Document Data get ----------------------//
  const SinglePaperDisplay = async () => {
    try {
      // console.log(getPaperFilter);
      const Detail = (
        await axios.get(
          `${process.env.REACT_APP_API_URL}/Event/Single_Event_Display/${getPaperFilter.year}/${getPaperFilter.eventHandler}`
        )
      ).data;
      // console.log(Detail);

      setPaperFilterData({
        year: Detail?.Data[0]?.year,
        eventHandler: Detail?.Data[0]?.eventHandler,
        _id: Detail?.Data[0]?._id,
      });

      // setDataReset(false);
    } catch (error) {
      console.log(error);
    }
  };

  //--------------- Question Paper Delete ----------------//
  const PaperDelete = async (value) => {
    try {
      const _id = value;
      await axios.get(`${process.env.REACT_APP_API_URL}/Event/Event_Delete/${_id}`);
      // setRender(1);
    } catch (error) {
      console.log(error);
    }
  };

  //----------- Reset the Data --------------//
  const ResetPaperData = async () => {
    // setRender(1);
    setPaperfilter({
      year: " ",
      eventHandler: " ",
    });
    setPaperFilterData({
      year: "",
      eventHandler: "",
      _id: "",
    })
  };

  //--------------- Get the Filter Data ----------------------//
  const filterData = async (course) => {
    try {
      const data = (
        await axios.get(
          `${process.env.REACT_APP_API_URL}/QuestionPaper/Filter_Data/${course}`
        )
      ).data;
      setfilter(data[0]);
    } catch (error) {
      console.log(error);
    }
  };

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
                <h4>Year</h4>
                <select
                  name="year"
                  id=""
                  placeholder="Year"
                  value={getPaperFilter.year}
                  onChange={Onchagetesdetail}
                >
                  <option value=" ">Select Year</option>
                  {filter?.years?.map((value) => {
                    return <option value={value.year}>{value.year}</option>;
                  })}
                </select>
              </span>
              <span className="NameAndSelect">
                <h4>Event Handler</h4>
                <select
                  name="eventHandler"
                  id=""
                  placeholder="Event Handler"
                  onChange={Onchagetesdetail}
                  value={getPaperFilter.eventHandler}
                >
                  <option value=" ">Select Event Handler</option>
                  {filter?.years?.map((value) => {
                    if (value.year == getPaperFilter.year) {
                      return value.eventHandler.map((value1) => {
                        return (
                          <option value={value1.eventHandler}>
                            {value1.eventHandler}
                          </option>
                        );
                      });
                    }
                  })}
                </select>
              </span>
              <button onClick={SinglePaperDisplay} className="button-30">Search</button>
              <button onClick={ResetPaperData} className="button-30">Clear</button>
            </div>
            {getPaperFilterData.Semester ?
              (
                <div className="TesDisplayCardContainer">
                  <div className="Society_Card">
                      <span>
                        <BiEditAlt
                          style={{
                            paddingRight: "10px",
                            width: "32px",
                            color: "#adb5bd",
                          }}
                          onClick={() => {
                            navigator(
                              `/dashboard/admin/Prev_Year_Paper_Update/${getPaperFilter?.course}/${getPaperFilter?.Year}/${getPaperFilter?.Semester}/${getPaperFilterData?._id}`
                            );
                          }}
                        />
                        <RiDeleteBin6Line
                          className="TestBin"
                          onClick={() => {
                            PaperDelete(getPaperFilterData?._id);
                          }}
                          style={{ color: "#d00000" }}
                        />
                      </span>
                    <div className="Society_Card_ImageDescription">
                      {getPaperFilterData ? (
                        <FileData
                          Year={getPaperFilterData?.year}
                          eventHandler={getPaperFilterData?.eventHandler}
                          _id={getPaperFilterData?._id}
                        />
                      ) : (
                        "  "
                      )}
                      <div className="Society_Describe">
                        <h4>{getPaperFilterData.year}</h4>
                        <h4> Event Handler : {getPaperFilterData?.eventHandler}</h4>
                      </div>
                    </div>
                  </div>
                </div>) : " "}
          </div>
        </div>
      </div>
    </>
  );
};

export default EventDisplay;
