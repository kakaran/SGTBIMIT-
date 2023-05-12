import React, { useEffect, useState } from "react";
import { Header, Navbar, Footer, Loader } from '../../Components'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import FileData from "./FileDataa";
import "./QuestionPaperDisplay.css"
import { Helmet } from "react-helmet";

const QuestionPaperDisplay = () => {
  // const [render, setRender] = useState(0);
  // const [getSociety, setSociety] = useState([]);
  // const [dataReset, setDataReset] = useState(true);
  const [isPending, setIsPending] = useState(false)
  const [firstRender, setFirstRender] = useState(false)
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

      setIsPending(false)
      // setDataReset(false);
    } catch (error) {
      console.log(error);
      setIsPending(false)
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
        className="relative flex flex-col w-full"
      >
        <div className="gradient-bg"></div>
        <div>
          <h1 className="bg-clip-text text-transparent my-text-4 w-max mx-auto"
            style={{
              backgroundImage: "linear-gradient(to right, #2563eb, #0891b2)",
              fontFamily: "Spline Sans"
            }}
          >Previous Year Papers</h1>
        </div>
        <div className={`mx-auto gap-[min(2rem,2vw)] transition-all duration-500 z-10 my-10 px-[min(2rem,3vw)] ${firstRender ? "grid grid-cols-4 max-lg:grid-cols-1 w-full" : "w-[min(499px,95%)]"}`}>
          <div className={`flex flex-col w-full h-max text-4xl py-8 px-[min(3rem,2vw)] bg-slate-100 rounded-md shadow-xl mx-auto gap-11 transition-all`} >
            <span className="flex flex-col gap-3">
              <div>Course</div>
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
              <div>Year</div>
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
              <div>Semester</div>
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
            <div className="flex justify-center gap-4 ">
              <button onClick={() => {
                setIsPending(true)
                setFirstRender(true)
                SinglePaperDisplay()
              }} className="rounded-md grow px-4 py-2 text-2xl my-md text-white"
                style={{ background: "#005e93" }}
              >
                Search
              </button>
              <button onClick={ResetPaperData}
                className="rounded-md px-4 py-2 text-2xl my-md text-[#005e93] bg-transparent border-[2px] border-[#005e93] border-solid"
              >
                Clear
              </button>
            </div>
          </div>
          {getPaperFilterData.Semester &&
            (
              <>
                {isPending && <Loader />}
                {!isPending && (
                  <div className={`mx-auto rounded-md shadow-md bg-white bg-opacity-30 p-[min(2.5rem,2vw)] my-4 col-span-3 max-lg:col-span-1 w-full`} >
                    <div className="flex flex-col gap-4 border-b-1 border-slate-400">
                      <div className="text-6xl my-bold bg-clip-text text-transparent max-lg:mx-auto w-max"
                        style={{ backgroundImage: "linear-gradient(to right, #f59e0b, #ea580c, #eab308)" }}
                      >
                        {getPaperFilterData?.course}
                      </div>
                      <div className="text-slate-400 text-2xl max-lg:flex max-lg:gap-2 max-lg:justify-center">
                        <div>{getPaperFilterData.Year}</div>
                        <div> {"Semester " + getPaperFilterData?.Semester}</div>
                      </div>
                    </div>
                    <div>
                      {getPaperFilterData && (
                        <FileData
                          course={getPaperFilterData?.course}
                          Year={getPaperFilterData?.Year}
                          Semester={getPaperFilterData?.Semester}
                          _id={getPaperFilterData?._id}
                        />
                      )
                      }
                    </div>
                  </div>
                )}
              </>
            )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default QuestionPaperDisplay;
