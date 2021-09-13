import React from "react";
import StartBtn from "./StartBtn";
import PauseBtn from "./PauseBtn";
import { useState, useEffect } from "react";
import CurrentSession from "./CurrentSession";

const Timer = ({ status, setStatus }) => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);

  // useEffect(() => {
  //   let interval = setInterval(() => {
  //     if (seconds === 0) {
  //       if (minutes === 0) {
  //         setSeconds(59);
  //         setMinutes(minutes - 1);
  //       } else {
  //         let minutes = status ? 24 : 4;
  //         let seconds = 59;

  //         setSeconds(seconds);
  //         setMinutes(minutes);
  //         setStatus(!status);
  //       }
  //     } else {
  //       setSeconds(seconds - 1);
  //     }
  //   }, 1000);
  // }, [seconds]);

  useEffect(() => {
    let interval;
    clearInterval(interval);
    if (status) {
      console.log(status);
      interval = setInterval(() => {
        if (seconds === 0 && minutes === 0) {
          // time is up
          const minutes = status ? 25 : 5;
          setSeconds(59);
          setMinutes(minutes);
          return () => clearInterval(interval);
        } else if (seconds === 0 && minutes > 0) {
          setSeconds(59);
          setMinutes(minutes - 1);
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
      return () => clearInterval(interval);
    } else {
      console.log(status);
      return () => clearInterval(interval);
    }
  });

  const timerMinutes = minutes < 10 ? "0" + minutes : minutes;
  const timerSeconds = seconds < 10 ? "0" + seconds : seconds;

  return (
    <div>
      <CurrentSession status={status} />
      <div className="status">
        <span>{timerMinutes}</span>:<span>{timerSeconds}</span> <br />
      </div>
      <div className="buttons-container">
        <StartBtn setStatus={setStatus} status={status} />
        <PauseBtn setStatus={setStatus} status={status} />
      </div>
    </div>
  );
};

export default Timer;
