import { useEffect, useState } from 'react'

const Team = () => {
    const [team, setTeam] = useState([])

    const getData = async () => {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/PlacementTeam/Placement_Team_Display`)
        const data = await response.json()
        setTeam(data.sort((a, b) => (a.Categories - b.Categories)))
        console.log(data);
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <section className='px-10'>

            <h1 className='my-bold text-[var(--primary-blue)] my-text-4'>Placement Team</h1>
            {team.map(item => (
                <div key={item._id}>
                    <h1>{item.Name}</h1>
                    <img src={`${process.env.REACT_APP_API_URL}/PlacementTeam/Placement_Image_Display/${item._id}`} alt="" />
                    <a href={item.linkdin}>LinkedIn</a>
                </div>
            ))}
        </section>
    )
}

export default Team