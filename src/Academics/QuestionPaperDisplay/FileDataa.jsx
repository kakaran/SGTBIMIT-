import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from 'framer-motion'

const FileData = (props) => {
  const [getPaperName, setPaperName] = useState([]);
  const [render, setRender] = useState(0);

  // console.log(props);

  const paperDataRecover = async () => {
    try {
      const data = await axios.get(
        `${process.env.REACT_APP_API_URL}/QuestionPaper/Display/${props.course}/${props.Year}/${props.Semester}`
      );
      console.log(data);
      setPaperName(data.data.FileNames);
      setRender(0);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (getPaperName) {
      paperDataRecover();
    }
  }, [render, props]);



  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      className="text-3xl grid grid-cols-1 gap-4 p-5 mt-5 rounded-xl bg-slate-50"
    >
      {getPaperName?.map((value, Index) => {
        return (

          <div>
            <div
              onClick={() => {
                window.open(
                  `/Prev_Year_Paper_PDF_Display/${props._id}/${Index}/${value}`,
                  "_blank"
                );
              }}
              className="my-md rounded-md p-5 hover:shadow-md hover:bg-white cursor-pointer code"
            >
              {value.replace(".pdf", "")}
            </div>
          </div>
        );
      })}
    </motion.div>
  );
};

export default FileData;
