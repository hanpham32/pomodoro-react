import React from "react";
const StartBtn = ({ setStatus, status }) => {

  const lightTheme = {
    backgroundColor: "#222831",
    color: "white",
  };
  const darkTheme = {
    backgroundColor: "#ffd472",
    color: "#393E46",
  };

  return (
    <div className="btn">
      <button onClick={() => setStatus((prevStatus) => status = false)} style={status ? lightTheme:darkTheme}>Pause</button>
    </div>
  );
};

export default StartBtn;
