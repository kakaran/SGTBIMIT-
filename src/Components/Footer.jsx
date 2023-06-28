import React from 'react'
export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <img src="/images/socials/facebook.png" alt="cant load" onClick={(e) => { window.location.href = "https://www.facebook.com/Sri-Guru-Tegh-Bahadur-Institute-of-Management-and-Information-Technology-175158863045300" }}></img>
        <img src="/images/socials/instagram.png" alt="cant load" onClick={(e) => { window.location.href = "https://www.instagram.com/sgtbimit_college/" }}></img>
        <img src="/images/socials/linkedin.png" alt="cant load" onClick={(e) => { window.location.href = "https://www.linkedin.com/in/sgtbimit-6819661aa/" }}></img>
        <img src="/images/socials/twitter.png" alt="cant load" onClick={(e) => { window.location.href = "https://twitter.com/nssipu_sgtbimit" }}></img>
        <img src="/images/socials/youtube.png" alt="cant load" onClick={(e) => { window.location.href = "https://www.youtube.com/@sgtbimit4152" }}></img>
      </div>
      <p className="footer-text">
        © Copyright 2023 Sri Guru Tegh Bahadur Institute Of Management and Information Technology. All Rights Reserved.
      </p>
    </footer>
  )
}
