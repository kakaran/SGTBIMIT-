import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import './Spinner.css'

const Spinner = () => {
  const [count, setCount] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevValue) => --prevValue);
    }, 1000);
    count === 0 && navigate('/login')
    return () => clearInterval(interval)
  }, [count, navigate])
  return (
    <>
      <div className="spinnerContainer">
        <div className="newtons-cradle">
          <div className="newtons-cradle__dot"></div>
          <div className="newtons-cradle__dot"></div>
          <div className="newtons-cradle__dot"></div>
          <div className="newtons-cradle__dot"></div>
        </div>
        <div>
          <span className='spinnerMessage'>Redirecting to you in {count} second</span>
        </div>
      </div>
    </>
  )
}

export default Spinner