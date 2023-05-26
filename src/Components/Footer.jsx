import React from 'react'
import fb from '../images/socials/facebook.png'
import ig from '../images/socials/instagram.png'
import ld from '../images/socials/linkedin.png'
import tw from '../images/socials/twitter.png'
import yt from '../images/socials/youtube.png'

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <img src={fb} alt="cant load" onClick={(e) => { window.location.href = "https://www.facebook.com/Sri-Guru-Tegh-Bahadur-Institute-of-Management-and-Information-Technology-175158863045300" }}></img>
        <img src={ig} alt="cant load" onClick={(e) => { window.location.href = "https://www.instagram.com/sgtbimit_college/" }}></img>
        <img src={ld} alt="cant load" onClick={(e) => { window.location.href = "https://www.linkedin.com/in/sgtbimit-6819661aa/" }}></img>
        <img src={tw} alt="cant load" onClick={(e) => { window.location.href = "https://twitter.com/nssipu_sgtbimit" }}></img>
        <img src={yt} alt="cant load" onClick={(e) => { window.location.href = "https://www.youtube.com/@sgtbimit4152" }}></img>
      </div>
      <p className="footer-text">
        © Copyright 2023 Sri Guru Tegh Bahadur Institute Of Management and Information Technology. All Rights Reserved.
      </p>
    </footer>
  )
}
