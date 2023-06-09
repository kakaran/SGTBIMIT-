import React, { useEffect, useState } from 'react'
import { Header, Navbar, Footer } from '../../Components'
import { motion } from 'framer-motion'
import { routingAnimations } from "../../constants"
// import wipro from '../../images/wipro.png'
// import { AiOutlineArrowDown } from 'react-icons/ai'
// import { summer } from './constant'


const Summer = () => {
    const [summer, setSummer] = useState([])

    const fetchData = async () => {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/SummerInternship/SummerInternship_Display`)
        const data = await res.json()
        setSummer(data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    const [toggle, setToggle] = useState(0)
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
            >
                <div className='gradient-bg' />
                <div className='flex justify-center'>
                    <h1 className='my-bold blue_gradient my-text-4'>SUMMER INTERNSHIP</h1>
                </div>
                {/* <div className='w-[min(1800px,100%)] mx-auto my-10 grid px-10 gap-10'>
                    {[...Array(5)].map((item, index) => (
                        <div className='rounded-md shadow-md bg-white py-5 px-10'>
                            <div className='flex gap-5' onClick={() => {
                                if (toggle === index) {
                                    setToggle(-1)
                                } else {
                                    setToggle(index)
                                }
                            }}>
                                <img src={wipro} alt="" className='rounded-full aspect-square w-72 ' />
                                <div className='grid place-content-center gap-5'>
                                    <div className='text-2xl'><span className='my-bold orange_gradient'>Internship Offered: </span> Web Development </div>
                                    <div className='text-2xl'><span className='my-bold orange_gradient'>No. of Students Selected: </span> 15 </div>
                                    <div className='text-2xl'><span className='my-bold orange_gradient'>Internship Offered:</span> XYZ Pvt. Ltd. </div>
                                </div>
                                <div className='text-2xl ml-auto'>
                                    <span className='my-bold orange_gradient'>Date: </span> 05-07-2022
                                </div>
                                <div className='flex flex-col min-h-full justify-center px-3 cursor-pointer'>
                                    <AiOutlineArrowDown size='3rem' className='text-blue-500' />
                                </div>
                            </div>
                            <div className={`grid transition-all px-10 ${toggle === index ? 'grid-show' : 'grid-hide'}`}>
                                <div className='overflow-hidden'>
                                    <div className='grid grid-cols-2 gap-5'>
                                        <p className='text-gray-700 text-2xl text-justify'>
                                            Wipro is an Indian multinational corporation that provides information technology, consultant and business process services. It is one of the leading Big Tech companies. Wipro's capabilities range across cloud computing, computer security, digital transformation, artificial intelligence, robotics, data analytics, and other technology consulting services to customers in 167 countries.
                                        </p>
                                        <img src="/images/place-img.png" alt="cant load" className='w-full' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div> */}

                <div className="theme-width">
                    <div className='overflow-x-scroll flex gap-5'>
                        {summer.map((item, index) => (
                            <img src={`${import.meta.env.VITE_API_URL}/SummerInternship/SummerInternship_CompanyImage_Display/${item._id}`} alt='' onClick={() => setToggle(index)} className='w-52' />
                        ))}
                    </div>
                    <div className='mt-44'>
                        {summer.map((item, index) => {
                            if (toggle === index) {
                                return (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className=''
                                    >
                                        <div className='bg-[#D9D9D9] rounded-[50px] mx-10 bg-opacity-40'>
                                            <div className='grid place-content-center'><img src={`${import.meta.env.VITE_API_URL}/SummerInternship/SummerInternship_CompanyImage_Display/${item._id}`} alt="" className='object-fill rounded-full w-[200px] h-[200px]' style={{ transform: "translateY(-50%)" }} /></div>
                                            <div className='-mt-20  p-10'>
                                                <h1 className='my-text-3 my-bold orange_gradient'> {item.companyName} </h1>
                                                <p className='text-gray-700 text-2xl'>
                                                    {item.companyDetail}
                                                </p>
                                                <div className='my-10'>
                                                    {/* <h1 className='my-text-3 my-bold blue_gradient inline'>Partnership with: </h1> <span className='text-gray-700 my-text-3 my-bold'>{item.partnershipWith}</span> */}
                                                </div>
                                                <div className='my-10'>
                                                    <h1 className='my-text-3 my-bold blue_gradient inline'>Internship Offered: </h1>
                                                    <ul>{item.internshipOffered.map((item) => (
                                                        <li className='text-gray-700 my-text-2 mx-5'>{`${item}`}</li>))
                                                    }</ul>
                                                </div>
                                                <div>
                                                    <h1 className='text-center my-bold text-[#B81D1D] my-text-3'>Top Interns:</h1>
                                                    <div className='grid grid-cols-3 gap-36'>
                                                        {item.topInterns.map((itemm) => (
                                                            <div className=''>
                                                                <img src={`${import.meta.env.VITE_API_URL}/SummerInternship/SummerInternship_TopInternsImages_Display/${item._id}/${itemm._id}`} alt="" className='aspect-square rounded-full w-full' />
                                                                <h2 className='my-bold my-text-2'> {itemm.studName} </h2>
                                                                <h2 className='my-bold my-text-2'> {itemm.internshipIn} </h2>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )
                            }
                        }
                        )
                        }
                    </div>
                </div>
            </motion.section>
            <Footer />
        </>
    )
}

export default Summer