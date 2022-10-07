import React, { useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import data from "./card.json";
import "./App.css";
import image from "./images/image1.png";

import { PhoneOutlined } from "@ant-design/icons";

import Column from "./components/Column";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { action } from "./redux/reducerSlice";

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
          id: "1",
          label: "Title",
          subtype: "h2",
          editable: false,
        },
        {
          id: "2",

          label: "Sub Title",
          subtype: "p",
          editable: false,
        },
        { id: "3", label: "Submit", subtype: "button", name: "submit" },
        { id: "4", label: "Back", subtype: "button", name: "back" },
        {
          id: "5",
          subtype: "input",
          type: "radio",
          options: ["option1", "option2", "option3"],
          editable: true,
        },
        {
          id: "10",
          subtype: "input",
          type: "checkbox",
          options: ["checkbox1", "checkbox2", "checkbox3"],
          editable: true,
        },
        {
          id: "6",
          subtype: "input",
          type: "date",
          editable: false,
        },
        {
          id: "7",
          subtype: "input",
          type: "month",
          editable: false,
        },
        {
          id: "8",
          subtype: "progress",
          type: "circle",
          percent: "75",
          editable: false,
        },
        {
          id: "9",
          subtype: "progress",

          percent: "75",
          editable: false,
        },
      ],
    },
  ];
  const formValue = useSelector((state) => state.taskList);
  const newFormValue =
    formValue.length > 0 && formValue.map(({ ...rest }) => rest);
  const [taskList, setTasks] = useState(formValue);

  const dispatch = useDispatch();
  console.log("initialState==========>>", initialState);
  console.log("formValue==========>>", formValue);
  console.log("taskList==========>>", taskList);
  // useEffect(() => {
  //   console.log("useEffect >> formValue", formValue);
  //   setTasks((prv) => {
  //     return formValue;
  //   });
  //   console.log("useEffect >> taskList", taskList);
  // });
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
    console.log("----------newTaskList", newTaskList);
    dispatch({ action: "formreducer1", payload: newTaskList });
    // dispatch();
    console.log("----------newTaskList", newTaskList);
  }
  console.log(taskList, "tasklist");
  return (
    <div className="mainContainer">
      <h3>Drag & Drop</h3>
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
              <div className="dragableContent">
                <Column
                  className="column"
                  droppableId="Today"
                  list={taskList[0].tasks}
                  type="TASK"
                />
              </div>
            </div>
          </div>
        </div>
      </DragDropContext>
    </div>
  );
}

export default App;
