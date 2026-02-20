import React, { useState } from "react";

const Switch = () => {
  const [selected, setSelected] = useState(false);

  const changeColor = () => setSelected((prev) => !prev);

  return (
    <div className="switchContainer">
      <div className="switchHolder">
        <button
          className="switch"
          style={{
            background: selected ? "blue" : "pink",
            transform: `translateX(${selected ? "0" : "36px"})`,
          }}
          onClick={changeColor}
        ></button>
      </div>
    </div>
  );
};

export default Switch;
