import React from "react";
import "./InputFile.css";

const InputTile = ({
  type,
  subtype,
  label,
  options,
  percent,
  editable,
  value,
}) => {
  return (
    <div className="inputTile">
      <input type={subtype} placeholder={value && value} />
    </div>
  );
};

export default InputTile;
