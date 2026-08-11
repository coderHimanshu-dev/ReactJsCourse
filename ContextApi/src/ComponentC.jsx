import React from "react";
import { Data, Data1 } from "./App";

const ComponentC = () => {
  return (
    <Data.Consumer>
      {(name) => {
        return (
          <Data1.Consumer>
            {(age) => {
              return (
                <h1>
                  Hello {name} {age}
                </h1>
              );
            }}
          </Data1.Consumer>
        );
      }}
    </Data.Consumer>
  );
};

export default ComponentC;
