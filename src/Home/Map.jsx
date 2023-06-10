import React from 'react'
import { motion } from 'framer-motion'
import email from '../images/email-icon.png'
import phone from '../images/phone-icon.png'
import map from '../images/map-icon.png'
import pdf from '../images/pdf-icon.png'
import campus from '../images/campus-icon.png'
import research from '../images/research-icon.png'
import { useNavigate } from 'react-router-dom'
import brochure from '../Assets/brochure.pdf'

export default function Map() {
  const navigate = useNavigate()
  const data = [
    {
      type: "Email",
      detail: "sgtbimit@hotmail.com",
      image: email
    },
    {
      type: "Phone Number",
      detail: "91-9899333224, 91-8810230080, 011-61383760, 011-61383764",
      image: phone
    },
    {
      type: "Location",
      detail: "Adjacent to Gurudwara Nanak Piao, State Bank Colony, Near Model Town Metro Station, Delhi-110009",
      image: map
    }
  ]

  return (
    <section className="map-section">
      <div className="map-container">
        <motion.div viewport={{ once: true }}
          className="address-container"
          initial={{
            zIndex: 1,
            scale: 2
          }}
          whileInView={{
            zIndex: 1,
            scale: 1
          }}
          transition={{
            duration: 0.5,
            type: 'tween'
          }}
        >
          <h1>
            GET IN TOUCH
          </h1>
          <div className="address-wrapper">
            {data.map(address => (
              <div className="address-item" key={address.type}>
                <div className="map-item-img">
                  <img src={address.image} alt="cant load" />
                </div>
                <div className="map-item-wrapper">
                  <div>
                    {address.type}
                  </div>
                  <p>
                    {address.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="chips">
            <a className="chip cursor-pointer" href={brochure} download>
              <img src={pdf} alt="" style={{ filter: "brightness(0) invert(1)" }} />
              <span>Download Brochure</span>
            </a>
            <button className="chip cursor-pointer" onClick={() => { window.open("https://youtu.be/bfeek8jSpeI") }}>
              <img src={campus} alt="" />
              <span>Campus Tour</span>
            </button>
            <button className="chip cursor-pointer" onClick={() => { navigate("/academics/research") }}>
              <img src={research} alt="" />
              <span>Researches</span>
            </button>
          </div>
        </motion.div>
        <motion.iframe
          viewport={{ once: true }}
          className='map-frame'
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.913782445779!2d77.18919345053924!3d28.69222558230785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d020b038fd133%3A0xf8adb1d0f49de35b!2sShri%20Guru%20Tegh%20Bahadur%20Institute%20of%20Management%20and%20Information%20Technology!5e0!3m2!1sen!2sin!4v1679125833960!5m2!1sen!2sin"
          title='map-frame'
          initial={{
            zIndex: 0,
            scale: 0
          }}
          whileInView={{
            zIndex: 0,
            scale: 1
          }}
          transition={{
            duration: 0.5,
            type: 'tween'
          }}
        />
      </div>
    </section>
  )
}
