import React from "react";
import { Draggable } from "react-beautiful-dnd";
import "../components/Tasks.css";

function Task(props) {
  const { id, index, title, image, type, style } = props;

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
            <div className={type} style={style ? style : {}}>
              {title && <h3>{title}</h3>}
              {image.image && (
                <img src={image.image} alt="" style={{ width: "3rem" }} />
              )}
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
}

export default Task;
