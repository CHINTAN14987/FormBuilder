import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import data from "./card.json";
import "./App.css";
import image from "./images/image1.png";

import Column from "./components/Column";

function App() {
  let initialState = [
    {
      groupName: "Today",
      tasks: [],
    },
    {
      groupName: "Tomorrow",
      tasks: [
        {
          id: "3",
          title: "Box",
          image: { image },
        },
        {
          id: "4",
          title: "Circle",
          image: "",
          style: {
            borderRadius: "50%",
            backgroundColor: "black",
            color: "white",
          },
        },
        {
          id: "5",
          title: "Cut Edges Box",
          image: "",
          style: {
            borderRadius: "40%",
            backgroundColor: "black",
            color: "yellow",
          },
        },
      ],
    },
  ];

  const [taskList, setTasks] = useState(initialState);
  const [cardData, setCardData] = useState(data);
  const [droppableInputData, setDroppableInputdata] = useState();

  function onDragEnd(val) {
    // Your version
    // let result = helper.reorder(val.source, val.destination, taskList);
    // setTasks(result);

    /// A different way!
    const { draggableId, source, destination } = val;

    const [sourceGroup] = taskList.filter(
      (column) => column.groupName === source.droppableId
    );

    // Destination might be `null`: when a task is
    // dropped outside any drop area. In this case the
    // task reamins in the same column so `destination` is same as `source`
    const [destinationGroup] = destination
      ? taskList.filter(
          (column) => column.groupName === destination.droppableId
        )
      : { ...sourceGroup };

    setDroppableInputdata(destinationGroup.tasks);
    // We save the task we are moving
    const [movingTask] = sourceGroup.tasks.filter((t) => t.id === draggableId);

    const newSourceGroupTasks = sourceGroup.tasks.splice(source.index, 1);

    const newDestinationGroupTasks = destinationGroup.tasks.splice(
      destination.index,
      0,
      movingTask
    );

    // Mapping over the task lists means that you can easily
    // add new columns
    const newTaskList = taskList.map((column) => {
      if (column.groupName === source.groupName) {
        return {
          groupName: column.groupName,
          tasks: newSourceGroupTasks,
        };
      }
      if (column.groupName === destination.groupName) {
        return {
          groupName: column.groupName,
          tasks: newDestinationGroupTasks,
        };
      }
      return column;
    });

    setTasks(newTaskList);
  }

  return (
    <div>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="wrapper">
          <div className="Col1">
            <h3 className="heading">Tool Box</h3>
            <Column
              className="column"
              droppableId="Tomorrow"
              list={taskList[1].tasks}
              type="TASK"
            />
          </div>
          <div className="centerContainer">
            <div className="centerLayout">
              <div className="cardData">
                <h3 className="heading">Patient Score Card</h3>
                {Object.keys(cardData["cardData"]).map((item) => {
                  return (
                    <h3 className="appointmentDetails">
                      {cardData["cardData"][item]}
                    </h3>
                  );
                })}
              </div>
              <div className="dragableContent">
                <Column
                  className="column"
                  droppableId="Today"
                  list={taskList[0].tasks}
                  type="TASK"
                />
              </div>
            </div>
            <div className="btn_wrapper">
              <button className="btn">Back</button>
              <button className="btn">Submit</button>
            </div>
          </div>
          <div className="lastcontainer">
            <h3 className="heading">Action Tool Box</h3>
            {droppableInputData ? (
              <>
                {droppableInputData.map((item) => {
                  return <input value={item.title} />;
                })}
              </>
            ) : (
              <p>
                No Action for Droppable toolbox....! <br />
                Drop Some Items
              </p>
            )}
          </div>
        </div>
      </DragDropContext>
    </div>
  );
}

export default App;

// function App() {
//   const [Data, setData] = useState(data);
//   const dragEnd = (result) => {
//     const newBox = Array.from(Data);
//     const [draggedItem] = newBox.splice(result.source.index - 1);
//     newBox.splice(result.destination.index, 0, draggedItem);
//     setData(newBox);
//   };
//   return (
//     <DragDropContext onDragEnd={dragEnd}>
//       <div className="App">
//         <Column data={Data} />

//         <div>
{
  /* {data.cardLayout.body[0].tileComponent.map((item) => {
          return (
            <div className="PatientID">
              <span>ID:</span>
              <span>{item.id}</span>
              <div>
                {item.subView.map((titleItem) => {
                  return (
                    <div>
                      {console.log(titleItem.title.text)}
                      <span>Title</span>
                      <span>{titleItem.title.text}</span>
                      <span></span>
                    </div>
                  );
                })}
              </div>
              <div>
                {Object.keys(data.cardUIAction).map((item) => {
                  return (
                    <div>
                      <span>Action:</span>
                      <span>{data.cardUIAction[item].action}</span>
                    </div>
                  );
                })}
                {console.log(Object.keys(data.cardUIAction))}
              </div>
            </div>
          );
        })} */
}
//         </div>
//       </div>
//     </DragDropContext>
//   );
// }
