import React, { useState } from "react";

// create dynamic color

const Switch = () => {
  const [selected, setSelected] = useState(false);

  return (
    <div className="switchContainer">
      <div className="switchHolder">
        <div className="switch"></div>
      </div>
    </div>
  );
};

export default Switch;
