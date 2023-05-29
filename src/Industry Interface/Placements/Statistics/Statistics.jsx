import React, { useEffect, useState } from 'react'
import { BsDownload } from 'react-icons/bs'
import Chart from 'react-apexcharts'
import './statistics.css'

export default function Statistics() {


    const [oneYear, setOneYear] = useState(true)
    const [twoYear, setTwoYear] = useState(false)
    const [threeYear, setThreeYear] = useState(false)
    const [selected, setSelected] = useState(0)
    const [stats, setStats] = useState([])

    const getData = async () => {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/PlacementStatics/placement_Display`)
        const data = await response.json()
        console.log(data)
        setStats(data)

    }
    const handle1Year = (e) => {
        setTwoYear(false)
        setThreeYear(false)
        setOneYear(true)
    }
    const handle2Year = (e) => {
        setOneYear(false)
        setThreeYear(false)
        setTwoYear(true)
    }

    const handle3Year = (e) => {
        setTwoYear(false)
        setOneYear(false)
        setThreeYear(true)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <section className="placement-stats-section">
            <div className="placements-stats-container">
                <div className='horizontal-line' />
                <h1>
                    <span>
                        Placements Statistics
                    </span>
                    <BsDownload color="#4B5563" />
                </h1>

                <div className="years-grid">
                    {stats?.map((stat, index) => (
                        <div className={`year-item ${selected === index ? "selected-year-item" : ''}`} onClick={(e) => { setSelected(index) }}>{stat.Year}</div>
                    ))}
                </div>
                <div className="chart">
                    <h1>Eligible Students and Number of Offers</h1>
                    {stats?.map((stat, index) => {
                        if (selected === index) return (<>
                            <Chart
                                type='bar'
                                width={600}
                                height={600}
                                series={[
                                    {
                                        name: "Eligible Students",
                                        data: stat.Course.map((course) => course.Eligible),
                                    },
                                    {
                                        name: "Number of Offers",
                                        data: stat.Course.map((course) => course.Offers),
                                    }
                                ]}
                                options={{
                                    color: ['#60A5FA', '#34D399'],
                                    tooltip: {
                                        followCursor: true
                                    },
                                    dataLabels: {
                                        formatter: (val) => (""),
                                    },
                                    xaxis: {
                                        tickPlacement: 'on',
                                        categories: stat.Course.map((course) => course.Name),
                                    }
                                }}
                            />
                            <Chart
                                type='bar'
                                width={600}
                                height={600}
                                options={{
                                    plotOptions: {
                                        bar: {
                                            horizontal: true,
                                            barHeight: 30,
                                        },
                                    },
                                    xaxis: {
                                        categories: stat.Course.map((course) => course.Name),
                                    },
                                    dataLabels: {
                                        formatter: (val) => `${val}%`
                                    }
                                }}
                                series={[
                                    {
                                        name: "true",
                                        data: stat.Course.map((course) => course.Percentage),
                                        color: '#818CF8'
                                    }
                                ]}
                            />
                        </>
                        )

                    })}
                </div>
                {/* <div className="years-grid">
                    <div className={`year-item ${oneYear ? "selected-year-item" : ''}`} onClick={(e) => handle1Year(e)}>2021-2022</div>
                    <div className={`year-item ${twoYear ? "selected-year-item" : ''}`} onClick={(e) => handle2Year(e)}>2020-2021</div>
                    <div className={`year-item ${threeYear ? "selected-year-item" : ''}`} onClick={(e) => handle3Year(e)}>2019-2020</div>
                </div>
                <div className="chart">
                    <h1>Eligible Students and Number of Offers</h1>
                    {oneYear && <><Chart
                        type='bar'
                        width={600}
                        height={600}
                        series={[
                            {
                                name: "Eligible Students",
                                data: [95, 40, 140],
                            },
                            {
                                name: "Number of Offers",
                                data: [140, 50, 190],
                            },
                        ]}
                        options={{
                            color: ['#60A5FA', '#34D399'],
                            tooltip: {
                                followCursor: true
                            },
                            dataLabels: {
                                formatter: (val) => (""),
                            },
                            xaxis: {
                                tickPlacement: 'on',
                                categories: ["CSE", "ECE", "Total"],
                            }
                        }}
                    >
                    </Chart>

                        <h1>Placement Percentage of Registered Students</h1>
                        <Chart
                            type='bar'
                            width={600}
                            height={600}
                            options={{
                                plotOptions: {
                                    bar: {
                                        horizontal: true,
                                        barHeight: 30,
                                    },
                                },
                                xaxis: {
                                    categories: ["CSE", "ECE", "Total"],
                                },
                                dataLabels: {
                                    formatter: (val) => `${val}%`
                                }
                            }}
                            series={[
                                {
                                    name: "true",
                                    data: [94.85, 80.95, 90.65],
                                    color: '#818CF8'
                                }
                            ]}
                        >

                        </Chart>
                    </>
                    }
                    {twoYear && <>
                        <Chart
                            type='bar'
                            width={600}
                            height={600}
                            series={[
                                {
                                    name: "Eligible Students",
                                    data: [50, 20, 80],
                                },
                                {
                                    name: "Number of Offers",
                                    data: [60, 80, 120],
                                },
                            ]}
                            options={{
                                color: ['#60A5FA', '#34D399'],
                                tooltip: {
                                    followCursor: true
                                },
                                dataLabels: {
                                    formatter: (val) => (""),
                                },
                                xaxis: {
                                    tickPlacement: 'on',
                                    categories: ["CSE", "ECE", "Total"],
                                }
                            }}
                        >

                        </Chart>

                        <h1>Placement Percentage of Registered Students</h1>
                        <Chart
                            type='bar'
                            width={600}
                            height={600}
                            options={{
                                plotOptions: {
                                    bar: {
                                        horizontal: true,
                                        barHeight: 30,
                                    },
                                },
                                xaxis: {
                                    categories: ["CSE", "ECE", "Total"],
                                },
                                dataLabels: {
                                    formatter: (val) => `${val}%`
                                }
                            }}
                            series={[
                                {
                                    name: "true",
                                    data: [50, 90, 70],
                                    color: '#818CF8'
                                }
                            ]}
                        >

                        </Chart>
                    </>
                    }
                    {threeYear && <><Chart
                        type='bar'
                        width={600}
                        height={600}
                        series={[
                            {
                                name: "Eligible Students",
                                data: [50, 90, 20],
                            },
                            {
                                name: "Number of Offers",
                                data: [70, 110, 60],
                            },
                        ]}
                        options={{
                            color: ['#60A5FA', '#34D399'],
                            tooltip: {
                                followCursor: true
                            },
                            dataLabels: {
                                formatter: (val) => (""),
                            },
                            xaxis: {
                                tickPlacement: 'on',
                                categories: ["CSE", "ECE", "Total"],
                            }
                        }}
                    >

                    </Chart>

                        <h1>Placement Percentage of Registered Students</h1>
                        <Chart
                            type='bar'
                            width={600}
                            height={600}
                            options={{
                                plotOptions: {
                                    bar: {
                                        horizontal: true,
                                        barHeight: 30,
                                    },
                                },
                                xaxis: {
                                    categories: ["CSE", "ECE", "Total"],
                                },
                                dataLabels: {
                                    formatter: (val) => `${val}%`
                                }
                            }}
                            series={[
                                {
                                    name: "true",
                                    data: [80, 90, 60],
                                    color: '#818CF8'
                                }
                            ]}
                        >

                        </Chart>
                    </>
                    }


                </div> */}

            </div>
        </section>
    )
}
