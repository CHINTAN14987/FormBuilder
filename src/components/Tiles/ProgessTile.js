import React from "react";
import { Progress } from "antd";
import "antd/dist/antd.css";
const ProgessTile = ({ type, percent }) => {
  return <Progress type={type} percent={percent} />;
};

export default ProgessTile;
