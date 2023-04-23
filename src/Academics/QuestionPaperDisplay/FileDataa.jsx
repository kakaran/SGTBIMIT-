import React, { useEffect, useState } from "react";
import axios from "axios";

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
    if(getPaperName){
      paperDataRecover();
    }
  }, [render,props]);



  return (
    <div className="FileNames Paper_detail">
      {getPaperName?.map((value, Index) => {
        return (
          <div className="FileName">
            <span
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "30px",
              }}
            >
              <h4
                style={{  
                  cursor: "pointer",
                }}
                onClick={() => {
                  window.open(
                    `/Prev_Year_Paper_PDF_Display/${props._id}/${Index}/${value}`,
                    "_blank"
                  );
                }}
              >
                {value}
              </h4>
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default FileData;
