import React, { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import './home.css'
import Welcome from './Welcome'
import ImageCarousel from './ImageCarousel'
import Testimonials from './Testimonials'
import DirectorMsg from './DirectorMsg'
import Placementss from './Placementss'
/* import Collaboration from './Collaboration'
import Recruiters from './Recruiters' */
import Map from './Map'
import Admission from '../Components/Admission'
import { Header, Navbar, Footer, Loader2 } from '../Components'
import Committees from './Committees/Committees'
import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion'
import { routingAnimations } from '../constants'
import LatestEvents from './LatestEvents'
export default function Home() {

  const [isPending, setIsPending] = useState(true)
  useEffect(() => {
    setIsPending(false)
    document.querySelector('.admission-dialog').classList.add('show')
    document.querySelector(".admission-bg").classList.add("show-bg")
  }, [])

  return (

    <main>
      <Helmet title='SGTBIMIT | Home' />
      <Helmet>
        <link rel="preload" href="/images/1.png" as='image' />
        <link rel="preload" href="/images/2.png" as='image' />
        <link rel="preload" href="/images/3.png" as='image' />
        <link rel="preload" href="/images/anti-ragging.png" as='image' />
        <link rel="preload" href="/images/arrow.png" as='image' />
        <link rel="preload" href="/images/bba.png" as='image' />
        <link rel="preload" href="/images/bca.png" as='image' />
        <link rel="preload" href="/images/bcom.png" as='image' />
        <link rel="preload" href="/images/bg-frame.png" as='image' />
        <link rel="preload" href="/images/bg-welcome.png" as='image' />
        <link rel="preload" href="/images/campus-icon.png" as='image' />
        <link rel="preload" href="/images/cancel.png" as='image' />
        <link rel="preload" href="/images/college.jpg" as='image' />
        <link rel="preload" href="/images/director.jpg" as='image' />
        <link rel="preload" href="/images/down.png" as='image' />
        <link rel="preload" href="/images/email-icon.png" as='image' />
        <link rel="preload" href="/images/foeticide.png" as='image' />
        <link rel="preload" href="/images/greyed-arrow.png" as='image' />
        <link rel="preload" href="/images/gtbji.png" as='image' />
        <link rel="preload" href="/images/map-icon.png" as='image' />
        <link rel="preload" href="/images/menu.png" as='image' />
        <link rel="preload" href="/images/mission.jpg" as='image' />
        <link rel="preload" href="/images/vission.png" as='image' />
        <link rel="preload" href="/images/pdf-icon.png" as='image' />
        <link rel="preload" href="/images/place-img.png" as='image' />
        <link rel="preload" href="/images/phone-icon.png" as='image' />
        <link rel="preload" href="/images/placement-ellipse.png" as='image' />
        <link rel="preload" href="/images/phone-icon.png" as='image' />
        <link rel="preload" href="/images/quote.png" as='image' />
        <link rel="preload" href="/images/research-icon.png" as='image' />
        <link rel="preload" href="/images/research-img.png" as='image' />
        <link rel="preload" href="/images/sexual-harrassment.png" as='image' />
        <link rel="preload" href="/images/sgtbimit.png" as='image' />
        <link rel="preload" href="/images/quality-policy.png" as='image' />
      </Helmet>

      <Header />
      <Navbar />
      {isPending && <Loader2 />}
      {!isPending && (
        <motion.section viewport='viewport'
          initial='initial'
          animate='animate'
          exit='exit'
          transition='transition'
          variants={routingAnimations}
        >
          <ImageCarousel />
          <Welcome />
          <DirectorMsg />
          <Committees />
          <Placementss />
          <Testimonials />
          <LatestEvents />
          {/*             <Collaboration />
            <Recruiters /> */}
          <Map />
          <Admission />
          <Footer />
        </motion.section>
      )
      }
    </main>

  )
}
