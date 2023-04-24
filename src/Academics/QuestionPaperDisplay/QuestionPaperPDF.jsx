import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const QuestionPaperPDFDisplay = () => {
  const { _id, name, index } = useParams();

  const [embedHeight, setEmbedHeight] = useState(600); // default height
  useEffect(() => {
    function updateEmbedHeight() {
      setEmbedHeight(window.innerHeight - 0); // adjust as needed
    }
    window.addEventListener("resize", updateEmbedHeight);
    updateEmbedHeight(); // initialize height on first render
    return () => window.removeEventListener("resize", updateEmbedHeight);
  }, []);

  return (
    <div>
      <iframe
        src={`${process.env.REACT_APP_API_URL}QuestionPaper/Display/${_id}/${index}`}
        frameborder="0"
        width="100%"
        height={embedHeight}
        name="Question"
      ></iframe>
    </div>
  );
};
export default QuestionPaperPDFDisplay;
