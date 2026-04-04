import React from "react";

const PRoductcard = ({ elem }) => {
  return (
    <div className="w-60  border ">
      <h1>{elem.title}</h1>
      <h1>{elem.description}</h1>
    </div>
  );
};

export default PRoductcard;
