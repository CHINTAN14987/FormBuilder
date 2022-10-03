import React from "react";
import { Droppable } from "react-beautiful-dnd";
import Task from "./Task";

function Column(props) {
  const { droppableId, list, type } = props;

  let style = {
    width: "400px",
    margin: "100px",
  };

  return (
    <Droppable droppableId={droppableId} type={type}>
      {(provided) => (
        <div {...provided.droppableProps} ref={provided.innerRef} style={style}>
          {list.map((val, index) => {
            return (
              <div style={{ margin: "10px" }}>
                <Task
                  id={val.id}
                  key={val.id}
                  index={index}
                  title={val.title}
                  image={val.image}
                  style={val.style}
                />
              </div>
            );
          })}

          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}

export default Column;
