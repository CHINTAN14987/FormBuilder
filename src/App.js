import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import "./App.css";
import { PhoneOutlined } from "@ant-design/icons";

import Column from "./components/Column";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { action } from "./redux/reducerSlice";
import Editor from "./components/Editor";

function App() {
  const formValue = useSelector((state) => state.taskList);

  const dispatch = useDispatch();

  console.log("formValue==========>>", formValue);

  function onDragEnd(val) {
    const { draggableId, source, destination } = val;
    dispatch(action.formreducer1({ draggableId, source, destination }));
  }

  return (
    <div className="mainContainer">
      <h3>Form Builder</h3>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="wrapper">
          <div className="Col1">
            <h3 className="heading"> UI Tool Box</h3>
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
                <h3 className="heading">Card</h3>
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
