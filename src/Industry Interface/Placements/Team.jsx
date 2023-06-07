import { useEffect, useRef, useState } from "react";
import { AiFillLinkedin } from "react-icons/ai";
import "./placements.css";
import { Link } from "react-router-dom";

const Team = () => {
  const imageRef = useRef();
  const [team, setTeam] = useState([]);

  const handleError = () => {
    imageRef.current.src =
      "https://static.vecteezy.com/system/resources/previews/000/593/472/original/vector-business-men-icon.jpg";
  };

  const getData = async () => {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/PlacementTeam/Placement_Team_Display`
    );
    const data = await response.json();
    console.log(data);
    setTeam(data.sort((a, b) => a.Categories - b.Categories));
    console.log(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="px-10">
      <h1 className="my-bold primary-blue my-text-4">Placement Team</h1>
      <div className="flex flex-col flex-wrap justify-center gap-5">
        {/* {team.map(item => (
                    <div key={item._id} className='w-[500px] bg-white rounded-md px-5 py-10 flex flex-col gap-4 shadow-lg'>
                        <h1 className='text-[min(3rem,6vw)] my-bold max-md:text-lg primary-blue m-0'>{item.Name}</h1>
                        {item.Categories === 0 ? <h2 className='text-[min(2rem,2vw)] my-bold max-md:text-lg m-0 text-gray-600'>Placement Head</h2> : <h2 className='text-[min(2rem,2vw)] my-bold max-md:text-lg m-0 text-gray-600'>Placement Co-ordinator</h2>}
                        <div className=' px-4'>
                            <img src={`${import.meta.env.VITE_API_URL}/PlacementTeam/Placement_Image_Display/${item._id}`} onError={handleError} ref={imageRef} className='aspect-square object-cover w-full rounded-lg shadow-lg' />
                        </div>
                        <a href={item.linkdin} className='w-max px-4 mt-auto ml-auto'><AiFillLinkedin color='var(--primary-blue)' className='my-text-4 shadow-md' /></a>
                    </div>
                ))} */}
        <h1 className="my-bold my-text-2 text-center">Faculty Coordinator</h1>
        <div className="flex justify-center gap-5">
          {team.map((item) => {
            if (item.Categories === 0)
              return (
                <div
                  key={item._id}
                  className=" flex flex-col items-center justify-center"
                >
                  {console.log(item._id)}
                  <Link to={item.linkdin} target="_blank">
                    <img
                      src={`${
                        import.meta.env.VITE_API_URL
                      }/PlacementTeam/Placement_Image_Display/${item._id}`}
                      onError={handleError}
                      ref={imageRef}
                      className="aspect-square PlacementImage w-40 rounded-full"
                    />
                  </Link>
                  <h1 className="my-bold text-gray-500">{item.Name}</h1>
                  {/* <a href={item.linkdin} className='w-max px-4'><AiFillLinkedin color='var(--primary-blue)' className='my-text-4 shadow-md' /></a> */}
                </div>
              );
          })}
        </div>
        <h1 className="my-bold my-text-2 text-center">Student Coordinators</h1>
        <div className="flex justify-center gap-5">
          {team.map((item) => {
            if (item.Categories === 1)
              return (
                <div
                  key={item._id}
                  className=" flex flex-col items-center justify-center"
                >
                  <Link to={item.linkdin} target="_blank">
                    <img
                      src={`${
                        import.meta.env.VITE_API_URL
                      }/PlacementTeam/Placement_Image_Display/${item._id}`}
                      onError={handleError}
                      ref={imageRef}
                      className="aspect-square PlacementImage w-40 rounded-full"
                      onClick={item.linkdin}
                    />
                  </Link>
                  <h1 className="my-bold text-gray-500">{item.Name}</h1>
                </div>
              );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
