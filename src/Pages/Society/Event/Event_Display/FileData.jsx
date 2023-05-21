import React, { useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import axios from "axios";

const FileData = (props) => {
  const [getPaperName, setPaperName] = useState([]);
  const [render, setRender] = useState(0);

  // console.log(props);

  const paperDataRecover = async () => {
    try {
      const data = await axios.get(
        `${process.env.REACT_APP_API_URL}/Event/Single_Event_Display/${props.year}/${props.eventHandler}`
      );
      // console.log(data);
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

  const SocietyDelete = async (value, Index) => {
    try {
      const _id = value;
      console.log(_id);
      await axios.get(
        `${process.env.REACT_APP_API_URL}/Event/Event_Delete/${_id}/${Number(
          Index
        )}`
      );
      setRender(1);
    } catch (error) {
      console.log(error);
    }
  };

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
                  fontFamily: "'Edu NSW ACT Foundation', cursive",
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
              <RiDeleteBin6Line
                className="TestBin"
                onClick={() => {
                  SocietyDelete(props._id, Index);
                }}
                style={{ color: "#d00000" }}
              />
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default FileData;
