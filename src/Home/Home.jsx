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
export default function Home() {

  const [isPending, setIsPending] = useState(true)
  useEffect(() => {
    setIsPending(false)
  }, [])

  return (

    <main>
      <Helmet title='SGTBIMIT | Home' />

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
