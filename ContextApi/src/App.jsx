import React from "react";
import ComponentA from "./ComponentA";
import { createContext } from "react";

/* Context API = React ka ek way hai jisse data ko directly kisi bhi child component tak bhej sakte ho, bina baar-baar props pass kiye. */

/* Context API = data ko globally/shareably available karna, taaki prop drilling na karni pade. */

export const Data = createContext();
export const Data1 = createContext();

const App = () => {
  const name = "Himanshu";
  const age = 19;

  return (
    <div>
      <Data.Provider value={name}>
        <Data1.Provider value={age}>
          <ComponentA />
        </Data1.Provider>
      </Data.Provider> 
    </div>
  );
};

export default App;
