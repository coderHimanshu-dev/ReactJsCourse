import React, { useState } from "react";

const ToggleBg = () => {
  const [bgColor, setBgColor] = useState("white");
  const [textColor, setTextColor] = useState("#1b1b1b");
  const [btnStyle, setBtnStyle] = useState("white");

  const handleClick = () => {
    setBgColor(bgColor == "white" ? "#1b1b1b" : "white");
    setTextColor(textColor == "#1b1b1b" ? "white" : "#1b1b1b");
    setBtnStyle(btnStyle == "white" ? "#1b1b1b" : "white");
  };

  return (
    <div style={{ bgColor, color: textColor }}>
      <button
        onClick={handleClick}
        style={{ btnStyle, color: textColor, border: `2px solid ${textColor}` }}
      >
        {bgColor == "#1b1b1b" ? "Black theme " : "White theme"}
      </button>

      <section>
        <h1>
          Welcom to A <br /> Real World
        </h1>
      </section>
    </div>
  );
};

export default ToggleBg;
