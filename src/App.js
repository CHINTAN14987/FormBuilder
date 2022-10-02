import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import helper from "./helper_functions";

import Column from "./components/Column";

function App() {
  let initialState = [
    {
      groupName: "Today",
      tasks: [
        { id: "1", title: "Test-1" },
        { id: "2", title: "Test-2" },
      ],
    },
    {
      groupName: "Tomorrow",
      tasks: [
        { id: "3", title: "Test-3" },
        { id: "4", title: "Test-4" },
      ],
    },
  ];

  const [taskList, setTasks] = useState(initialState);

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
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="wrapper">
        <Column
          className="column"
          droppableId="Today"
          list={taskList[0].tasks}
          type="TASK"
        />
        <Column
          className="column"
          droppableId="Tomorrow"
          list={taskList[1].tasks}
          type="TASK"
        />
      </div>
    </DragDropContext>
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
