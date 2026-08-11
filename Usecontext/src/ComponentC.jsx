import React from "react";
import { useContext } from "react";
import { Data, Data1 } from "./App";

const ComponentC = () => {
  const userName = useContext(Data);
  const age = useContext(Data1);
  return <div>
    <h1>Hello I am {userName} and i am {age} year old.</h1>
  </div>;
};

export default ComponentC;
