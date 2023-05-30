import React, { useEffect, useRef, useState } from 'react'
import { Footer, Header, Navbar } from '../../Components'
import { motion } from 'framer-motion'
import { routingAnimations } from '../../constants'
import styles from './visit.module.css'

const Visit = () => {
    const [radius, setRadius] = useState(0)
    const myRef = useRef(null)
    useEffect(() => {
        setRadius(myRef.current.offsetHeight / 4);
    })

    return (
        <>
            <Header />
            <Navbar />
            <motion.section
                viewport="viewport"
                initial="initial"
                animate="animate"
                exit="exit"
                transition="transition"
                variants={routingAnimations}
                className='w-[min(1500px,98%)] mx-auto'
                style={{ '--radius': `${radius}px` }}
            >
                <div className='w-[min(1500px,98%)] mx-auto'>
                    <h1 className='my-bold my-text-4 text-center primary-blue'>Industrial Visit</h1>
                    <p className='text-2xl text-gray-800'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis repellendus beatae sit tenetur aliquam animi nesciunt fuga veritatis, quis placeat ad aperiam nihil ut libero pariatur expedita? Veritatis magnam delectus qui excepturi a odio, accusamus accusantium, tempore officia eius in illo hic, quidem inventore incidunt! Illo ad quaerat nesciunt perspiciatis. Accusamus omnis atque reprehenderit! Corrupti, aspernatur magnam? Reprehenderit, ipsum dignissimos, esse assumenda aut nulla at commodi quisquam dolorum soluta alias repellendus, autem explicabo sint libero perferendis repellat quibusdam ab minus eveniet. Ratione error molestiae officiis magnam atque deleniti tenetur similique dolorum. Facere vel enim molestiae a necessitatibus officiis, beatae ducimus?</p>
                </div>
                <div>
                    <h1 className='my-bold text-5xl max-md:text-3xl primary-blue m-0'>Companies Visited</h1>
                    <div className={`${styles.line} w-full h-1 primary-blue-bg-clr`}></div>
                    <div className={`${styles.container} px-10 py-20 shadow-2xl mx-auto`} ref={myRef}>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut distinctio tempora natus eveniet rerum! Voluptatibus, odio magni. Ea, reiciendis reprehenderit voluptas quos delectus provident asperiores nostrum aperiam dicta quod, laborum odio eum nobis, perferendis veniam. Ut odit iusto unde, eius, vitae cumque, reiciendis inventore non autem sed aut debitis eum!</p>
                    </div>
                </div>
            </motion.section>
            <Footer />
        </>
    )
}

export default Visit