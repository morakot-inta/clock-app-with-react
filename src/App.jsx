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
      <div className="clock border border-2 border-gray-500 rounded-lg p-4 bg-green-500 text-4xl"> 
        <h1 className="text-red-500">{time.toLocaleTimeString()}</h1>
    </div>
    </>
  )

};

export default Clock;
