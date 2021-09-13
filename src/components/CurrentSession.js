import React from "react";

const CurrentSession = ({ status }) => {
  return (
    <div>
      <h1 className="status">{status ? "Work Session" : "Rest Session"}</h1>
    </div>
  );
};

export default CurrentSession;
