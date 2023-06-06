import React, { useEffect, useState } from 'react'
import { Footer, Header, Loader, Navbar } from '../../Components'
import { motion } from 'framer-motion'
import { routingAnimations } from '../../constants'
import styles from './visit.module.css'

const Visit = () => {
    const [visit, setVisit] = useState(null)

    const getVisitData = async () => {
        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/IndustrialVisits/IndustrialVisits_Display`)
            const data = await res.json()
            setVisit(data)
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getVisitData()
    }, [])

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
            >
                <div className='gradient-bg'></div>
                <div className='w-[min(1500px,98%)] mx-auto'>
                    <h1 className='my-bold my-text-4 text-center primary-blue'>Industrial Visit</h1>
                    <p className='text-2xl text-gray-800'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis repellendus beatae sit tenetur aliquam animi nesciunt fuga veritatis, quis placeat ad aperiam nihil ut libero pariatur expedita? Veritatis magnam delectus qui excepturi a odio, accusamus accusantium, tempore officia eius in illo hic, quidem inventore incidunt! Illo ad quaerat nesciunt perspiciatis. Accusamus omnis atque reprehenderit! Corrupti, aspernatur magnam? Reprehenderit, ipsum dignissimos, esse assumenda aut nulla at commodi quisquam dolorum soluta alias repellendus, autem explicabo sint libero perferendis repellat quibusdam ab minus eveniet. Ratione error molestiae officiis magnam atque deleniti tenetur similique dolorum. Facere vel enim molestiae a necessitatibus officiis, beatae ducimus?</p>
                </div>
                <div>
                    <h1 className='my-bold text-5xl max-md:text-3xl primary-blue m-0'>Companies Visited</h1>
                    <div className={`${styles.line} w-full h-1 primary-blue-bg-clr`}></div>
                    <div className={`${styles.container} px-10 py-20 shadow-2xl mx-auto`}>
                        <p className='text-justify text-2xl primary-blue'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut distinctio tempora natus eveniet rerum! Voluptatibus, odio magni. Ea, reiciendis reprehenderit voluptas quos delectus provident asperiores nostrum aperiam dicta quod, laborum odio eum nobis, perferendis veniam. Ut odit iusto unde, eius, vitae cumque, reiciendis inventore non autem sed aut debitis eum!</p>
                    </div>
                </div>
                <div>
                    {!visit && <Loader />}
                    {visit?.map(visit => (
                        <div>
                            <h1 className='text-5xl my-bold blue_gradient m'>{visit.name}</h1>
                            <div className={`w-full h-1 primary-bg-clr rounded-full`}></div>
                            <div className='h-28' />
                            <div className='flex'>
                                <div className='w-3/5  z-10'>
                                    <img src={`${import.meta.env.VITE_API_URL}/IndustrialVisits/IndustrialVisits_Image_Display/${visit._id}`} alt="cant load" className='w-full aspect-video rounded-lg shadow-lg ' style={{
                                        transform: "translate(3rem,-30%)"
                                    }} />
                                    <img src={`${import.meta.env.VITE_API_URL}/IndustrialVisits/IndustrialVisits_CompanyImg_Display/${visit._id}`} alt="" className='w-full aspect-square' />
                                </div>
                                <p className='bg-[#FFDFDF] z-0 p-16 rounded-lg text-gray-700 text-justify text-2xl flex items-center'>
                                    {visit.about}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.section>
            <Footer />
        </>
    )
}

export default Visit