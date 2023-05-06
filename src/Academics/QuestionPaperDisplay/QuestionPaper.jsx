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
          <h1 className="my-bold text-center bg-clip-text text-transparent my-text-4"
            style={{ backgroundImage: "linear-gradient(to right, #2563eb, #0891b2)", }}
          >Previous Year Papers</h1>
        </div>
        <div className={`mx-auto gap-8 transition-all duration-500 z-10 ${firstRender ? "grid grid-cols-4 w-[95%]" : "w-[500px]"}`}>
          <div className="flex flex-col w-full h-max text-4xl py-8 px-11 bg-slate-100 rounded-md shadow-xl mx-auto gap-11" >
            <span className="flex flex-col gap-3">
              <div className={`my-bold ${firstRender && 'bg-clip-text text-transparent'}`}
              style={{ backgroundImage: firstRender && "linear-gradient(to right, #2563eb, #0891b2)", }}
              >Course</div>
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
              <div className={`my-bold ${firstRender && 'bg-clip-text text-transparent'}`}
              style={{ backgroundImage: firstRender && "linear-gradient(to right, #2563eb, #0891b2)", }}>Year</div>
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
              <div className={`my-bold ${firstRender && 'bg-clip-text text-transparent'}`}
              style={{ backgroundImage: firstRender && "linear-gradient(to right, #2563eb, #0891b2)", }}>Semester</div>
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
            <div className="flex justify-center gap-4">
              <button onClick={() => {
                setIsPending(true)
                setFirstRender(true)
                SinglePaperDisplay()
              }} className="rounded-xl px-4 py-2 text-2xl text-transparent bg-clip-text my-bold"
                style={{ backgroundImage: "linear-gradient(to right, #f59e0b, #ea580c, #eab308)" }}
              >
                Search
              </button>
              <button onClick={ResetPaperData} className="rounded-xl px-4 py-2 text-2xl text-transparent bg-clip-text my-bold"
                style={{
                  backgroundImage: "linear-gradient(to right, #4ade80, #22c55e)",
                }}>
                Clear
              </button>
            </div>
          </div>
          {getPaperFilterData.Semester &&
            (
              <>
                {isPending && <Loader />}
                {!isPending && (
                  <div className="mx-auto rounded-md shadow-md bg-white bg-opacity-30 p-10 my-4 col-span-3 w-full" >
                    <div className="flex flex-col gap-4 border-b-1 border-slate-400">
                      <div className="text-6xl my-bold bg-clip-text text-transparent"
                      style={{ backgroundImage: "linear-gradient(to right, #f59e0b, #ea580c, #eab308)" }}
                      >
                        {getPaperFilterData?.course}
                      </div>
                      <div className="text-slate-400 text-2xl">
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
