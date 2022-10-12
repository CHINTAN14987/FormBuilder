import React from "react";
import { Draggable } from "react-beautiful-dnd";
import "../components/Tasks.css";
import Tiles from "./Tiles/Tiles";

function Task(props) {
  const { id, index, type, subtype, label, options, percent, editable, value } =
    props;

  return (
    <Draggable draggableId={id} index={index} type="TASK">
      {(provided, snapshot) => (
        <>
          <div
            className="draggable_Container"
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={{
              ...provided.draggableProps.style,
              transform: snapshot.isDragging
                ? provided.draggableProps.style?.transform
                : "translate(0px, 0px)",
            }}
          >
            <Tiles
              type={type}
              subtype={subtype}
              label={label}
              options={options}
              percent={percent}
              editable={editable}
              value={value}
            />
          </div>
          {snapshot.isDragging && (
            <div style={{ transform: "none !important" }}>
              <Tiles
                type={type}
                subtype={subtype}
                label={label}
                options={options}
                percent={percent}
                editable={editable}
                value={value}
              />
            </div>
          )}
        </>
      )}
    </Draggable>
  );
}

export default Task;
