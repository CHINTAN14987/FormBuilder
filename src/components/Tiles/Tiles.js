import React from "react";
import ButtonTile from "./ButtonTile";
import CheckBoxTile from "./CheckBoxTile";
import InputTile from "./InputTile";
import ProgressTile from "./ProgressTile";
// import Select from "./elements/Select";
// import Checkbox from "./elements/Checkbox";
const Tiles = ({
  id,
  index,
  type,
  subtype,
  label,
  options,
  percent,
  editable,
  value,
  content,
}) => {
  switch (type) {
    case "monthInputPicker":
      return (
        <InputTile
          type={type}
          subtype={subtype}
          label={label}
          options={options}
          percent={percent}
          editable={editable}
        />
      );
    case "dateInputPicker":
      return (
        <InputTile
          type={type}
          subtype={subtype}
          label={label}
          options={options}
          percent={percent}
          editable={editable}
        />
      );

    case "inputField":
      return (
        <InputTile
          value={value}
          subtype={subtype}
          label={label}
          editable={editable}
        />
      );
    case "horizontalProgressBarField":
      return (
        <ProgressTile
          subtype={subtype}
          percent={percent}
          editable={editable}
          type={type}
        />
      );

    case "circlularProgressBarField":
      return (
        <ProgressTile
          subtype={subtype}
          percent={percent}
          editable={editable}
          type={type}
        />
      );
    case "backButton":
      return (
        <ButtonTile
          subtype={subtype}
          label={label}
          editable={editable}
          type={type}
        />
      );
    case "submitButton":
      return (
        <ButtonTile
          subtype={subtype}
          editable={editable}
          type={type}
          label={label}
        />
      );
    case "checkboxField":
      return (
        <CheckBoxTile
          subtype={subtype}
          editable={editable}
          type={type}
          options={options}
        />
      );
    case "radioField":
      return (
        <CheckBoxTile
          subtype={subtype}
          editable={editable}
          type={type}
          options={options}
        />
      );

    default:
      return null;
  }
};
export default Tiles;
