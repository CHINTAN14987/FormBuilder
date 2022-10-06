import React from "react";
import { Draggable } from "react-beautiful-dnd";
import "../components/Tasks.css";

function Task(props) {
  const { id, index, type, subType, label, options } = props;

  return (
    <Draggable draggableId={id} index={index} type="TASK">
      {(provided) => (
        <div
          style={{ margin: "10px" }}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="draggable_Container">
            {console.log(options)}
            {subType !== "input" && React.createElement(subType, {}, label)}
            {options?.map((item, index) => {
              return (
                <div key={index} className="inputcheckbox1">
                  {React.createElement(subType, { type: type }, label)}
                  {React.createElement("label", {}, item)}
                </div>
              );
            })}
            {/* <div className={type} style={style ? style : {}}>
            
            </div> */}
          </div>
        </div>
      )}
    </Draggable>
  );
}

export default Task;
