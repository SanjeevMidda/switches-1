import React, { useState } from "react";

const Switch = () => {
  const [isOn, setIsOn] = useState(false);

  const changeColor = () => setIsOn((prev) => !prev);

  return (
    <div className="switchContainer">
      <div className="switchHolder">
        <button
          className={`switch ${isOn ? "switchOn" : "switchOff"}`}
          onClick={changeColor}
          role="switch"
          aria-checked={isOn}
        ></button>
      </div>
    </div>
  );
};

export default Switch;
