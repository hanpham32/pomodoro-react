import React from "react";
const StartBtn = ({setStatus, status}) => {

  return (
    <div className="btn">
      <button onClick={() => setStatus(prevStatus => status = true)} >Start</button>
    </div>
  );
};

export default StartBtn;
