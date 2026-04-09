 import React, { useState, useEffect } from "react";
import "./task6.css";

function Task6() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prev) => prev + 10);
      }, 10);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (t) => {
    const mins = String(Math.floor(t / 60000)).padStart(2, "0");
    const secs = String(Math.floor((t % 60000) / 1000)).padStart(2, "0");
    return `${mins}:${secs}`;
  };

  const rotation = (time % 60000) * 0.006;

  const handleStop = () => {
    setIsRunning(false);
    if (time > 0) {
      setLaps((prev) => [formatTime(time), ...prev]);
    }
  };

  return (
    <div className="app-container">
      <div className="phone">
        <div className="screen">

          <h1 className="title">STOPWATCH</h1>

          <div className="dial">

            {/* 🌈 Animated Ring */}
            <div className="glow-ring"></div>

            {/* 🔄 Smooth Needle */}
            <div
              className="needle"
              style={{
                transform: `translate(-50%, -100%) rotate(${rotation}deg)`
              }}
            ></div>

            {/* ⏱ Time */}
            <div className="time-text">
              {formatTime(time)}
            </div>

          </div>

          {/* 🎮 Buttons */}
          <div className="btn-container">
            <button className="btn start" onClick={() => setIsRunning(true)}>
              Start
            </button>
            <button className="btn stop" onClick={handleStop}>
              Stop
            </button>
            <button
              className="btn reset"
              onClick={() => {
                setIsRunning(false);
                setTime(0);
                setLaps([]);
              }}
            >
              Reset
            </button>
          </div>

          {/* 🏁 Lap List */}
          <div className="lap-list">
            {laps.map((lap, index) => (
              <div key={index} className="lap-item">
                <span>Lap {laps.length - index}</span>
                <span>{lap}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

export default Task6;