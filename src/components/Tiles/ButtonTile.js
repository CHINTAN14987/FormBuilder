import React from "react";

const ButtonTile = ({ label, subType, type }) => {
  console.log(type);
  return <button className={type}>{label}</button>;
};

export default ButtonTile;
