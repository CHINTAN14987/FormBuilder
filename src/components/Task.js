import React from "react";
import { Draggable } from "react-beautiful-dnd";

function Task(props) {
  const { id, index, title, image, style } = props;

  return (
    <Draggable draggableId={id} index={index} type="TASK">
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: " 0 2rem",
              gap: "10px",
            }}
          >
            <div
              style={
                style
                  ? style
                  : {
                      border: "1px solid silver",
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                      gap: "10px",
                    }
              }
            >
              {title.length > 0 && <h4>{title}</h4>}
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
