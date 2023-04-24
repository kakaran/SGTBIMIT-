import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../useFetch'
import { Loader2 } from '../../Components'
import { Helmet } from 'react-helmet'


export default function NoticePDF() {

  const { id } = useParams()
  const { data: notices, isPending } = useFetch(`${process.env.REACT_APP_API_URL}/Notice/Notice_Data_Display`)

  const filteredNotice = notices ? notices.filter((notice) => (
    notice._id === id
  ))[0] : ''

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
    <>
    <Helmet title={filteredNotice.Name} />
      {isPending && <Loader2 />}
      {!isPending &&
        <>
          {/* <h1 
          style={{
            fontFamily: "SF Pro Display-Bold"

          }}
          >{filteredNotice.Name}</h1> */}
          <iframe
            src={`${process.env.REACT_APP_API_URL}/Notice/Notice_File_Display/${id}`}
            className='embed-pdf'
            frameborder="0"
            width="100%"
            height={embedHeight}
            name="Question"          >
          </iframe>
        </>
      }
    </>
  )
}
