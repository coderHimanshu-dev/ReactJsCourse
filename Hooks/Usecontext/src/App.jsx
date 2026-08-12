import React from "react";
import { createContext } from "react";
import ComponentA from "./ComponentA";
/* 
useContext Hook — 

useContext React ka Hook hai jo components ke beech data share karne ke liye use hota hai.
Iska main purpose Prop Drilling ko avoid karna hai.
Isse data ko directly Context se access kar sakte hain.
Pehle Context create kiya jata hai, phir Provider ke through data provide kiya jata hai.
useContext se component us data ko directly access karta hai.

🧠 Memory Trick:
Create Context → Provide Data → Access Data */

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
