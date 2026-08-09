import React, { useState } from "react";

const ArrayUpdate = () => {
  const [fruite, setFruite] = useState(["Mango", "Apple"]);

  const addFruite = () => setFruite([...fruite, "Banana"]);

  const removeFruite = () => setFruite(fruite.filter((f) => f !== "Apple"));

  const updateFruite = () =>
    setFruite(fruite.map((f) => (f === "Apple" ? "Himanshu" : f)));

  return (
    <section>
      {fruite.map((f) => (
        <h1 key={Math.random()}>{f}</h1>
      ))}

      <button onClick={addFruite}>Add new Fruite</button>
      <button onClick={removeFruite}>Remove one fruite</button>
      <button onClick={updateFruite}>Update on fruite</button>
    </section>
  );
};

export default ArrayUpdate;
