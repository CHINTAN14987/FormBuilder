import React from "react";
import { Droppable } from "react-beautiful-dnd";
import Task from "./Task";

function Column(props) {
  const { droppableId, list, type } = props;

  let style = {
    width: "400px",
    minHeight: "10rem",
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    paddingBottom: "3rem",
  };

  return (
    <Droppable droppableId={droppableId} type={type}>
      {(provided, snapshot) => (
        <div {...provided.droppableProps} ref={provided.innerRef} style={style}>
          {list.map((val, index) => {
            const shouldRenderClone = val.id === snapshot.draggingFromThisWith;
            return (
              <Task
                id={val.id}
                key={val.id}
                index={index}
                subType={val.subtype}
                label={val.label}
                type={val.type}
                options={val.options}
                percent={val.percent}
                shouldRenderClone={shouldRenderClone}
              />
            );
          })}

          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}

export default Column;
