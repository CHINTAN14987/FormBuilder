import React from "react";
import "./InputFile.css";

const InputTile = ({ type, labelOptions }) => {
  return (
    <div className="inputTile">
      {labelOptions?.map((optionItem, index) => {
        return (
          <div key={index} className="inputTile_Inner_Content">
            <input type={type} />
            <span>{optionItem}</span>
          </div>
        );
      })}
    </div>
  );
};

export default InputTile;
