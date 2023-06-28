import React from 'react'
import { Carousel } from 'react-responsive-carousel'

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
          <img src="/images/1.png" alt="carousel-1" />
        </div>
        <div className="carousel-item">
          <img src="/images/2.png" alt="carousel-2" />
        </div>
        <div className="carousel-item">
          <img src="/images/3.png" alt="carousel-2" />
        </div>
      </Carousel>
    </div>
  )
}
