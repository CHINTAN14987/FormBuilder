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
import Editor from "./components/Editor";

function App() {
  // let initialState = [
  //   {
  //     groupName: "Today",
  //     tasks: [],
  //   },
  //   {
  //     groupName: "Tomorrow",
  //     tasks: [
  //       {
  //         id: "1",
  //         label: "Title",
  //         subtype: "h2",
  //         editable: false,
  //       },
  //       {
  //         id: "2",

  //         label: "Sub Title",
  //         subtype: "p",
  //         editable: false,
  //       },
  //       { id: "3", label: "Submit", subtype: "button", name: "submit" },
  //       { id: "4", label: "Back", subtype: "button", name: "back" },
  //       {
  //         id: "5",
  //         subtype: "input",
  //         type: "radio",
  //         options: ["option1", "option2", "option3"],
  //         editable: true,
  //       },
  //       {
  //         id: "10",
  //         subtype: "input",
  //         type: "checkbox",
  //         options: ["checkbox1", "checkbox2", "checkbox3"],
  //         editable: true,
  //       },
  //       {
  //         id: "6",
  //         subtype: "input",
  //         type: "date",
  //         editable: false,
  //       },
  //       {
  //         id: "7",
  //         subtype: "input",
  //         type: "month",
  //         editable: false,
  //       },
  //       {
  //         id: "8",
  //         subtype: "progress",
  //         type: "circle",
  //         percent: "75",
  //         editable: false,
  //       },
  //       {
  //         id: "9",
  //         subtype: "progress",

  //         percent: "75",
  //         editable: false,
  //       },
  //     ],
  //   },
  //];
  const formValue = useSelector((state) => state.taskList);

  const dispatch = useDispatch();

  console.log("formValue==========>>", formValue);

  // useEffect(() => {
  //   console.log("useEffect >> formValue", formValue);
  //   setTasks((prv) => {
  //     return formValue;
  //   });
  //   console.log("useEffect >> taskList", taskList);
  // });
  function onDragEnd(val) {
    const { draggableId, source, destination } = val;
    dispatch(action.formreducer1({ draggableId, source, destination }));
  }

  return (
    <div className="mainContainer">
      <h3>Drag & Drop</h3>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="wrapper">
          <div className="Col1">
            <h3 className="heading">Tool Box</h3>
            <Column
              className="column"
              droppableId="Drop"
              list={formValue[1].tasks}
              type="TASK"
            />
          </div>
          <div className="centerContainer">
            <div className="centerLayout">
              <div className="dragableContent">
                <Column
                  className="column"
                  droppableId="Drag"
                  list={formValue[0].tasks}
                  type="TASK"
                />
              </div>
            </div>
          </div>
          <Editor />
        </div>
      </DragDropContext>
    </div>
  );
}

export default App;
