import React, { useState } from "react";

const Switch = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => setIsOn((prev) => !prev);

  return (
    <div className="switchContainer">
      <div className="switchHolder">
        <button
          className={`switch ${isOn ? "switchOn" : "switchOff"}`}
          onClick={handleToggle}
          role="switch"
          aria-checked={isOn}
        ></button>
      </div>
    </div>
  );
};

export default Switch;
