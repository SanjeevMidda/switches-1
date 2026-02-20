import React, { useState } from "react";

// create dynamic color

const Switch = () => {
  const [selected, setSelected] = useState(false);

  const changeColor = () => setSelected(!selected);

  return (
    <div className="switchContainer">
      <div className="switchHolder">
        <div
          className="switch"
          style={{
            background: selected ? "blue" : "greenYellow",
            transform: `translateX(${selected ? "0" : "36px"})`,
          }}
          onClick={changeColor}
        ></div>
      </div>
    </div>
  );
};

export default Switch;
