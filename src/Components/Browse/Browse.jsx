import React from "react";
import "./Browse.css";
const Browse = (props) => {
  const handleChange = (event) => {
    const value = event.target.value;
    props.handleInputChange(value);
  };
  return (
    <div className="browse">
      <input
        placeholder="Browse..."
        type="text"
        value={props.inputValue}
        onChange={handleChange}
      />
    </div>
  );
};

export { Browse };
