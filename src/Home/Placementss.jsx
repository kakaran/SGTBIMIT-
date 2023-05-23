import React, { useEffect, useRef } from 'react'
import Loader from '../Components/Loader'
import useFetch from '../useFetch'
import { motion } from 'framer-motion'
import AutoHorizontalScroll from './AutoHorizontalScroll'


export default function Placements({ isTitle = true }) {
  /*   const scrollRef = useRef(null)
    const handleClick = (e) => {
      scrollRef.current.scrollLeft += 400
    }
   */
  const { data: placementArray, isPending } = useFetch(`${process.env.REACT_APP_API_URL}/Placement_Intership/PlacementInterships_Display`)

  /*   useEffect(() => {
      scrollRef.current.scrollLeft = 0
    }, [placementArray])
   */
  return (

    <section className='placements'>
      <div className="placements-container">
        {isTitle && <motion.h1 viewport={{ once: true }}
          initial={{
            opacity: 0,
            x: 400,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.5,
            type: "spring"
          }}
        >
          TOP RECRUITERS
        </motion.h1>}
        {/*         <div className="placement-bg"></div> */}
        {isPending && <Loader />}
        <AutoHorizontalScroll>
          {placementArray &&
            placementArray.map((placement, i) => {
              return (
                <div className="place-card" key={placement._id}>
                  <img src={`${process.env.REACT_APP_API_URL}/Placement_Intership/PlacementInterships_Image_Display/${placement._id}`} alt="cant load" className='placement-img' />
                  <div className='place-heading'> {placement.name}  </div>
                  <p> {placement.companyName} </p>
                </div>
              )
            })
          }
          <div className="blank place-card max-lg:hidden"></div>
          <div className="blank place-card max-lg:hidden"></div>
          <div className="blank place-card max-lg:hidden"></div>
          <div className="blank place-card max-lg:hidden"></div>
        </AutoHorizontalScroll>
        {/*         <button type='button' onClick={(e) => { handleClick(e) }} className='scroll-btn'>Scroll</button> */}
      </div>


    </section>

  )
}
