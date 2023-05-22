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
        <motion.section viewport={{ once: true }}
          initial={{
            x: "100vw",
          }}
          animate={{
            x: 0,
          }}
          exit={{
            x: '-100vw',
          }}
          transition={{
            duration: .25,
          }}
        >
          <ImageCarousel />
          <Welcome />
          <DirectorMsg />
          <Testimonials />
          <Committees />
          <Placementss />
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
