import React, { useState } from "react";

const Accordian = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <section>
      <div onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <p>{isActive ? "-" : "+"}</p>
        {isActive ? <p>{content}</p> : ""}
      </div>
    </section>
  );
};

export default Accordian;
