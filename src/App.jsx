import "./App.css";
import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  const updateTime = () => {
    setTime(new Date());
  }

  useEffect(() => {
    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, []);

  return (
    <>
      <div className="clock">
        <h1>{time.toLocaleTimeString()}</h1>
    </div>
    </>
  )

};

export default Clock;
