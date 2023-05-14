import React, { useEffect, useState } from "react";
import AdminMenu from "../../../Components/AdminMenu/AdminMenu";
import AdminHeader from "../../../Components/AdminHeader/AdminHeader";
import "../../Society/Society_Display/Society_Display.css";
import axios from "axios";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import FileData from "./FileData";
import "./QuestionPaperDisplay.css"
import { Helmet } from "react-helmet";

const QuestionPaperDisplay = () => {
  // const [render, setRender] = useState(0);
  // const [getSociety, setSociety] = useState([]);
  // const [dataReset, setDataReset] = useState(true);
  const [getPaperFilter, setPaperfilter] = useState({
    course: "",
    Year: "",
    Semester: "",
  });

  const [getPaperFilterData, setPaperFilterData] = useState({
    course: "",
    Year: "",
    Semester: "",
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
          `${process.env.REACT_APP_API_URL}/QuestionPaper/Display/${getPaperFilter.course}/${getPaperFilter.Year}/${getPaperFilter.Semester}`
        )
      ).data;
      // console.log(Detail);

      setPaperFilterData({
        course: Detail?.Data[0]?.course,
        Year: Detail?.Data[0]?.Year,
        Semester: Detail?.Data[0]?.Semester,
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
      await axios.get(`${process.env.REACT_APP_API_URL}/QuestionPaper/Year_Delete/${_id}`);
      // setRender(1);
    } catch (error) {
      console.log(error);
    }
  };

  //----------- Reset the Data --------------//
  const ResetPaperData = async () => {
    // setRender(1);
    setPaperfilter({
      course: " ",
      Year: " ",
      Semester: " ",
    });
    setPaperFilterData({
      course: "",
      Year: "",
      Semester: "",
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
      <Helmet title="Display Question Paper" />
      <div className="SocietyDisplayContainer">
        <div className="SideBar">
          <AdminMenu />
        </div>
        <div className="Testimonial_DetailContainer">
          <AdminHeader />
          <div className="TesHeaderCard">
            <div className="TesDisplayHeading">
              <h1>Prev Year Papers</h1>
            </div>
            <div className="filterContainer">
              <span className="NameAndSelect">
                <h4>Course</h4>
                <select
                  name="course"
                  id=""
                  placeholder="course"
                  value={getPaperFilter.course}
                  onChange={(e) => {
                    filterData(e.target.value);
                    Onchagetesdetail(e);
                  }}
                >
                  <option value=" ">Select Course</option>
                  <option value="BCA">BCA</option>;
                  <option value="BBA">BBA</option>;
                  <option value="BBA B&I">BBA B&I</option>;
                  <option value="BCOM">BCOM</option>;
                </select>
              </span>
              <span className="NameAndSelect">
                <h4>Year</h4>
                <select
                  name="Year"
                  id=""
                  placeholder="Year"
                  value={getPaperFilter.Year}
                  onChange={Onchagetesdetail}
                >
                  <option value=" ">Select Year</option>
                  {filter?.Years?.map((value) => {
                    return <option value={value.year}>{value.year}</option>;
                  })}
                </select>
              </span>
              <span className="NameAndSelect">
                <h4>Semester</h4>
                <select
                  name="Semester"
                  id=""
                  placeholder="Semester"
                  onChange={Onchagetesdetail}
                  value={getPaperFilter.Semester}
                >
                  <option value=" ">Select Semester</option>
                  {filter?.Years?.map((value) => {
                    if (value.year == getPaperFilter.Year) {
                      return value.Semesters.map((value1) => {
                        return (
                          <option value={value1.Semester}>
                            {value1.Semester}
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
                    <h3>
                      {getPaperFilterData?.course}
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
                    </h3>
                    <div className="Society_Card_ImageDescription">
                      {getPaperFilterData ? (
                        <FileData
                          course={getPaperFilterData?.course}
                          Year={getPaperFilterData?.Year}
                          Semester={getPaperFilterData?.Semester}
                          _id={getPaperFilterData?._id}
                        />
                      ) : (
                        "  "
                      )}
                      <div className="Society_Describe">
                        <h4>{getPaperFilterData.Year}</h4>
                        <h4> Semester : {getPaperFilterData?.Semester}</h4>
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

export default QuestionPaperDisplay;
