import React, { useEffect, useState } from "react";
import { GoBackButton } from "../Buttons";

const Timer = () => {
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    if (seconds === 0) {
      alert("Time's up");
      return;
    }

    const timer = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds]);

  return (
    <div>
      <GoBackButton />
      <h2 className="mt-[20px]">Count down from {seconds}</h2>
    </div>
  );
};

export default Timer;
