import React, { useRef, useState } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";

const Column = ({ data }) => {
  console.log(data);
  const ref = useRef();
  return (
    <div className="cardData_Wrapper">
      <Droppable droppableId="boxes">
        {(provided) => {
          <div innerRef={provided.innerRef} {...provided.droppableProps}>
            {Object.keys(data.cardData).map((cardDataItem, index) => {
              return (
                <Draggable
                  draggableId={(cardDataItem, toString())}
                  key={cardDataItem}
                  index={index}
                >
                  <div className="cardData">{data.cardData[cardDataItem]}</div>
                </Draggable>
              );
            })}
            {provided.placeholder}
          </div>;
        }}
      </Droppable>
    </div>
  );
};

export default Column;
