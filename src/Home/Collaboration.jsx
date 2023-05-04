import React, { useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import { CustomArrow, CustomArrowNotActive } from '../Components/Carousel'
import { motion } from 'framer-motion'
import useFetch from '../useFetch'
import _ from 'lodash'

export default function Collaboration() {
  const { data: collabs, isPending } = useFetch(`${process.env.REACT_APP_API_URL}/Collaborations/Collaborations_Display`)

  

  let collabsChunks = collabs ? _.chunk(collabs, 4) : []
  
  const [currentS, setCurrentS] = useState(0)
  const handleSlideChange = (index) => {
    setCurrentS(index)
  }
  const total = collabs ? collabsChunks.length : 0
  return (
    <section className='collab'>
      <div className="collab-container">
        <motion.h1
          initial={{
            x: 400
          }}
          whileInView={{
            x: 0
          }}
          transition={{
            duration: 0.5,
            type: 'spring'
          }}
        >
          COLLABORATIONS
        </motion.h1>

        <motion.div
          className="collab-grid-container"
          initial={{
            x: -400
          }}
          whileInView={{
            x: 0
          }}
          transition={{
            duration: 0.5,
            type: 'spring'
          }}
        >
          <Carousel
            showThumbs={false}
            showIndicators={false}
            showStatus={false}
            onChange={handleSlideChange}
            renderArrowNext={(onClickHandler, hasNext, label) => (
              <>
                {hasNext && (
                  <CustomArrow direction={"right"} onClick={onClickHandler} />
                )}
                {!hasNext && (
                  <CustomArrowNotActive direction={"right"} />
                )}
              </>
            )}
            renderArrowPrev={(onClickHandler, hasPrev, label) => (
              <>
                {hasPrev && (
                  <CustomArrow direction={"left"} onClick={onClickHandler} />
                )}
                {!hasPrev && (
                  <CustomArrowNotActive direction={"left"} />
                )}
              </>
            )}
          >
            {collabs && collabsChunks.map((collabss, i) => (
              <div className="collab-grid" key={`${i}collabgrid`}>
                {collabss.map((collab, i) => (
                  <div className="collab-img" key={`${i}collabimg`}>
                    <img src={`${process.env.REACT_APP_API_URL}/Collaborations/Collaborations_Image_Display/${collab._id}`} alt="" />
                  </div>
                ))}
              </div>
            ))}
          </Carousel>
          <div className="custom-status">
            {currentS + 1} / {total}
          </div>
          <div className="bottom-border"></div>
        </motion.div>

      </div>
    </section>
  )
}
