import React, { useEffect, useState } from "react";
import { Header, Navbar, Footer } from '../../Components'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import FileData from "./FileDataa";
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
      <Helmet title="SGTBIMIT | Previous Year Papers" />
      <Header />
      <Navbar />
      <div
        className="question-section relative flex flex-col w-full"
      >
        <div>
          <h1 className="my-bold text-6xl text-center">Previous Year Papers</h1>
        </div>
        <div className="grid grid-cols-3 mx-auto gap-8 w-[95%]">
          <div className="flex flex-col w-full text-4xl py-8 px-11 bg-slate-100 rounded-md shadow-xl mx-auto gap-11" >
            <span className="flex flex-col gap-3">
              <div className="my-bold">Course</div>
              <select
                name="course"
                id=""
                placeholder="course"
                value={getPaperFilter.course}
                onChange={(e) => {
                  filterData(e.target.value);
                  Onchagetesdetail(e);
                }}
                className="outline-none border-none py-2 px-4 text-slate-400 text-2xl"
              >
                <option value=" ">Select Course</option>
                <option value="BCA">BCA</option>;
                <option value="BBA">BBA</option>;
                <option value="BBA B&I">BBA B&I</option>;
                <option value="BCOM">BCOM</option>;
              </select>
            </span>
            <span className="flex flex-col gap-4">
              <div className="my-bold ">Year</div>
              <select
                name="Year"
                id=""
                placeholder="Year"
                value={getPaperFilter.Year}
                onChange={Onchagetesdetail}
                className="outline-none border-none py-2 px-4 text-slate-400 text-2xl"
              >
                <option value=" ">Select Year</option>
                {filter?.Years?.map((value) => {
                  return <option value={value.year}>{value.year}</option>;
                })}
              </select>
            </span>
            <span className="flex flex-col gap-4">
              <div className="my-bold">Semester</div>
              <select
                name="Semester"
                id=""
                placeholder="Semester"
                onChange={Onchagetesdetail}
                value={getPaperFilter.Semester}
                className="outline-none border-none py-2 px-4 text-slate-400 text-2xl"
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
            <div className="flex flex-col gap-4">
              <button onClick={SinglePaperDisplay} className="rounded-xl bg-[#005e93] px-4 py-2 text-2xl text-white">Search</button>
              <button onClick={ResetPaperData} className="rounded-xl bg-[#005e93] px-4 py-2 text-2xl text-white">Clear</button>
            </div>
          </div>
          {getPaperFilterData.Semester ?
            (
              <div className="mx-auto rounded-md shadow-md bg-white bg-opacity-30 p-10 my-4 col-span-2 w-full" >
                <div className="flex flex-col gap-4 border-b-1 border-slate-400">
                  <div className="text-6xl my-bold">
                    {getPaperFilterData?.course}
                  </div>
                  <div className="text-slate-400 text-2xl">
                    <div>{getPaperFilterData.Year}</div>
                    <div> {"Semester " + getPaperFilterData?.Semester}</div>
                  </div>
                </div>
                <div>
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
                </div>
              </div>) : " "}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default QuestionPaperDisplay;
