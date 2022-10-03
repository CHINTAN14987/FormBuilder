import React from "react";
import { Droppable } from "react-beautiful-dnd";
import Task from "./Task";

function Column(props) {
  const { droppableId, list, type } = props;

  let style = {
    width: "400px",
    minHeight: "10rem",
  };

  return (
    <Droppable droppableId={droppableId} type={type}>
      {(provided) => (
        <div {...provided.droppableProps} ref={provided.innerRef} style={style}>
          {list.map((val, index) => {
            console.log(list);
            return (
              <div style={{ margin: "10px" }}>
                <Task
                  id={val.id}
                  key={val.id}
                  index={index}
                  title={val.title}
                  image={val.image}
                  style={val.style}
                  type={val.type}
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
