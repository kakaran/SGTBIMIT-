import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import one from '../images/1.png'
import two from '../images/2.png'
import three from '../images/3.png'

export default function ImageCarousel() {
  return (
    <div className='home-carousel-container'>
      <Carousel
        infiniteLoop={true}
        autoPlay={true}
        emulateTouch={true}
        interval={2000}
        showThumbs={false}
        className="home-carousel"
      >

        <div className="carousel-item">
          <img src={one} alt="carousel-1" />
        </div>
        <div className="carousel-item">
          <img src={two} alt="carousel-2" />
        </div>
        <div className="carousel-item">
          <img src={three} alt="carousel-2" />
        </div>
      </Carousel>
    </div>
  )
}
