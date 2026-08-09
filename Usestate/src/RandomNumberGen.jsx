import React, { useState } from "react";

const RandomNumberGen = () => {
  const [random, setRandom] = useState(() => Math.floor(Math.random() * 100));

const genRand = () =>{
    const randomNumber = Math.floor(Math.random() * 100);
    setRandom(randomNumber);
}

  return (
    <div>
      <h1>Random Number : {random}</h1>
      <button  onClick={genRand}>Generate Random Number </button>
    </div>
  );
};

export default RandomNumberGen;
