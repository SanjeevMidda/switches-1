import React, { useState } from "react";

const Switch = () => {
  const [selected, setSelected] = useState(false);

  const changeColor = () => setSelected((prev) => !prev);

  return (
    <div className="switchContainer">
      <div className="switchHolder">
        <button
          className={`switch ${selected ? "switchOn" : "switchOff"}`}
          onClick={changeColor}
          role="switch"
          aria-checked={selected}
        ></button>
      </div>
    </div>
  );
};

export default Switch;
