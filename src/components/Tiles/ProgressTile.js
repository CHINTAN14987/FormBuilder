import React from "react";
import { Progress } from "antd";
import "antd/dist/antd.css";
const ProgessTile = ({ type, percent, subtype }) => {
  return (
    <>
      {subtype === "circle" ? (
        <Progress type={subtype} percent={percent} />
      ) : (
        <Progress percent={percent} />
      )}
    </>
  );
};

export default ProgessTile;
