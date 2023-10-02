import React, { useRef } from "react";
import "./StatBar.css";

const StatBar = ({ label, value }) => {
  return (
    <div className="stat-bar">
      <p>
        {label}: {value ? value : "Loading..."}
      </p>
      <div className="progress-bar">
        <div
          className={`progress-${label.toLowerCase().replace(" ", "-")}`}
          style={{
            width: `${value ? value : 0}%`,
          }}
        ></div>
      </div>
    </div>
  );
};

export { StatBar };
