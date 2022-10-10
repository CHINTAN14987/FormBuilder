import React from "react";
import { Draggable } from "react-beautiful-dnd";
import "../components/Tasks.css";
import ButtonTile from "./Tiles/ButtonTile";
import InputSelect from "./Tiles/InputSelect";
import InputTile from "./Tiles/InputTile";
import ProgessTile from "./Tiles/ProgessTile";

function Task(props) {
  const { id, index, type, subType, label, options, percent } = props;

  return (
    <Draggable draggableId={id} index={index} type="TASK">
      {(provided, snapshot) => (
        <>
          <div
            className="draggable_Container"
            style={{ margin: "10px" }}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            {<h3>{label}</h3>}
            {subType === "input" && (
              <InputTile labelOptions={options} type={type} />
            )}
            {subType === "input" && <InputSelect type={type} />}
            {subType === "button" && (
              <ButtonTile label={label} subType={subType} />
            )}
            {subType === "progress" && (
              <ProgessTile type={type} percent={percent} />
            )}
          </div>
          {/* {snapshot.isDragging && (
            <div className="one">
              {subType === "input" && (
                <InputTile labelOptions={options} type={type} />
              )}
              {subType === "input" && <InputSelect type={type} />}
              {subType === "button" && (
                <ButtonTile label={label} subType={subType} />
              )}
              {subType === "progress" && (
                <ProgessTile type={type} percent={percent} />
              )}
            </div>
          )} */}
        </>
      )}
    </Draggable>
  );
}

export default Task;
