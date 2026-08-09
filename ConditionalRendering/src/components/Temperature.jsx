import React from "react";

const Temperature = () => {
  let temp = 3;

  if (temp < 15) {
    return <h1>It's cold outside</h1>;
  } else if (temp > 15 && temp < 25) {
    return <h1>It's Normal outside</h1>;
  } else {
    return <h1>It's Hot outside</h1>;
  }
};

export default Temperature;
