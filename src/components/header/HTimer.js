import React, { useState, useEffect } from "react";
import HTimer from "./HTimer.css";

const HeaderWithTimer = ({ title, startDate, endDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(endDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={interval}>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div className="flex flex-col">
      <div className="header-timer-container text-center">
        <h1 className="header-title text-white font-bold text-clamp ">
          {title}
        </h1>
        <div className="timer text-white text-3xl font-bold text-clamp2 ">
          {timerComponents.length ? (
            timerComponents
          ) : (
            <span>Countdown complete!</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderWithTimer;
