import React, { useState } from "react";
import "./App.css";
import Timer from "./components/Timer";

function App() {
  const [status, setStatus] = useState(false);

  const lightTheme = {
    backgroundColor: "#ffd472",
    color: "black",
  };
  const darkTheme = {
    backgroundColor: "#222831",
    color: "#EEEEEE",
  };

  return (
    <div className="App" style={status ? lightTheme : darkTheme}>
      <Timer status={status} setStatus={setStatus} />
    </div>
  );
}

export default App;
