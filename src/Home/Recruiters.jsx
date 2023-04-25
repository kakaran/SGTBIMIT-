import React, { useEffect, useState, useRef, useMemo } from 'react'
import useFetch from '../useFetch'
import Loader from '../Components/Loader'
import { Carousel } from 'react-responsive-carousel'
import { CustomArrow, CustomArrowNotActive } from '../Components/Carousel'
import { motion } from 'framer-motion'
/* import useIntersection from '../useIntersection' */

export default function Recruiters({ isTitle = true }) {
  function useIsInViewport(ref) {
    const [isIntersecting, setIsIntersecting] = useState(false);

    const observer = useMemo(
      () =>
        new IntersectionObserver(([entry]) =>
          setIsIntersecting(entry.isIntersecting),
        ),
      [],
    );

    useEffect(() => {
      observer.observe(ref.current);

      return () => {
        observer.disconnect();
      };
    }, [ref, observer]);

    return isIntersecting;
  }

  const carouselRef = useRef(null)
  const isCarouselVisible = useIsInViewport(carouselRef);

  const { data: recruiters, isPending } = useFetch(`${process.env.REACT_APP_API_URL}/Recruiters/recruiters_Display`)


  let recruitersChunks = []
  let i = 0
  const count = 4
  recruiters && (

    recruiters.forEach(() => {
      let res = recruiters.slice(i, i + count)
      if (res.length === 0) return
      recruitersChunks.push(res)
      i = i + count
    })

  )
  const [currentS, setCurrentS] = useState(0)
  const total = recruiters ? recruitersChunks.length : 0
  const handleSlideChange = (index) => {
    setCurrentS(index)
  }
  return (
    <section className='recruiters'>
      {isTitle && <motion.h1
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
        Our Recruiters.
      </motion.h1>}
      <motion.div
        className="recruiters-container"
        ref={carouselRef}
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

        {isPending && <Loader />}

        {recruiters &&
          <Carousel
            ref={carouselRef}
            onChange={handleSlideChange}
            transitionTime={1000}
            showThumbs={false}
            showIndicators={false}
            showStatus={false}
            autoPlay={isCarouselVisible && true}
            infiniteLoop={true}
            selectedItem={0}
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
            {recruitersChunks.map((recruiters, i) => {
              return (
                <div className="recruiters-item" key={`rec-item-${i}`}>
                  {recruiters.map((recruiter, i) => {
                    return (
                      <div className="recruiter-img" key={`rec-img-${i}`}>
                        <img src={`${process.env.REACT_APP_API_URL}/Recruiters/Recruiter_Image_Display/${recruiter._id}`} key={recruiter._id} alt="cant load" />

                      </div>
                    )
                  })}
                </div>
              )
            })}
          </Carousel>
        }
        <div className="custom-status">
          {currentS + 1} / {total}
        </div>
        <div className="bottom-border"></div>

      </motion.div>
    </section>
  )
}
