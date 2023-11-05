"use client";
import { useEffect, useState } from "react";

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 3,
    minutes: 23,
    seconds: 19,
  });

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : `${time}`;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime.seconds > 0) {
          return { ...prevTime, seconds: prevTime.seconds - 1 };
        } else if (prevTime.minutes > 0) {
          return { ...prevTime, seconds: 59, minutes: prevTime.minutes - 1 };
        } else if (prevTime.hours > 0) {
          return { ...prevTime, minutes: 59, hours: prevTime.hours - 1 };
        } else if (prevTime.days > 0) {
          return { ...prevTime, hours: 23, days: prevTime.days - 1 };
        } else {
          clearInterval(timer);
          return prevTime;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { unit: "Days", value: timeLeft.days },
    { unit: "Hours", value: timeLeft.hours },
    { unit: "Minutes", value: timeLeft.minutes },
    { unit: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="flex gap-5 items-center flex-wrap">
      {timeUnits.map((timeUnit, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center gap-5 "
        >
          <small className="text-xxs font-bold">{timeUnit.unit}</small>
          <h1 className="text-3xl font-bold">
            {formatTime(timeUnit.value)}
            {index < timeUnits.length - 1 && (
              <span className="text-xxs ml-5 text-red">:</span>
            )}
          </h1>
        </div>
      ))}
    </div>
  );
}
