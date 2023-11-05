import { useEffect, useState } from "react";

// get the difference between the end Date / future date when the product will expire and
//the current date. Which gives us the  time left

export const CountDownTimer = (endDate) => {
  const [newDay, setNewDay] = useState(0);
  const [newHour, setNewHour] = useState(0);
  const [newMinute, setNewMinute] = useState(0);
  const [newSeconds, setNewSecond] = useState(0);
  const [saleEnded, setSaleEnded] = useState(false);

  useEffect(() => {
    const updateCountDownTimer = () => {
      let currentDate = new Date();

      let dateDifference = new Date(endDate) - currentDate.getTime();

      if (dateDifference <= 0) {
        setSaleEnded(true);
      }

      const seconds = 1000;
      const minute = seconds * 60;
      const hour = minute * 60;
      const day = hour * 24;

      let newDay = Math.floor(dateDifference / day);
      let newHour = Math.floor((dateDifference % day) / hour);
      let newMinute = Math.floor((dateDifference % hour) / minute);
      let newSeconds = Math.floor((dateDifference % minute) / seconds);

      setNewDay(() => newDay);
      setNewHour(() => newHour);
      setNewMinute(() => newMinute);
      setNewSecond(() => (newSeconds < 10 ? "0" + newSeconds : newSeconds));
    };

    if (!saleEnded) {
      let intervalId = setInterval(updateCountDownTimer, 1000);
      return () => clearInterval(intervalId);
    }
  }, [endDate, saleEnded]);

  return { newDay, newHour, newMinute, newSeconds, saleEnded };
};
