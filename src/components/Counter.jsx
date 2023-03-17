import { useState, useEffect } from "react";
import { FlapDisplay } from "./FlapDisplay";
import formatTime from "../utils/formatTime";

const Counter = () => {
  let targetDate = new Date(Date.now() + 12096e5);
  let dateNames = ["days", "hours", "minutes", "seconds"];
  let [timeLeft, setTimeLeft] = useState([13, 23, 59, 59]);
  let [timeLeftPrev, setTimeLeftPrev] = useState([14, 0, 0, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      let now = new Date();
      setTimeLeft(formatTime(targetDate - now.getTime()));
      setTimeLeftPrev(formatTime(targetDate - now.getTime() + 1000));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="counter">
      {timeLeft.map((val, i) => (
        <div className="counter__item" key={dateNames[i]}>
          <FlapDisplay value={val} prev={timeLeftPrev[i]} name={dateNames[i]} />
        </div>
      ))}
    </div>
  );
};

export default Counter;
