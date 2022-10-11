import React from "react";

const CheckBoxTile = ({ subtype, editable, type, options }) => {
  return (
    <React.Fragment>
      {type === "radioField" ? (
        <div className={type}>
          {options.map((item, index) => {
            return (
              <div key={index} className="radio_wrapper">
                <label>{item}</label>
                <input type={subtype} />
              </div>
            );
          })}
        </div>
      ) : (
        <div className={type}>
          <input type={subtype} />
          <label>{options} </label>
        </div>
      )}
    </React.Fragment>
  );
};

export default CheckBoxTile;
