import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { action } from "../redux/reducerSlice";
import "../App.css";

const Editor = () => {
  const draggableTask = useSelector((state) => state.taskList[0].tasks[0]);

  const disptach = useDispatch();
  console.log(draggableTask, "drgabletask");
  const ChangeHandler = (e) => {
    disptach(action.formreducer2({ data: { value: e }, id: draggableTask.id }));
  };

  return (
    <div className="lastcontainer">
      <h3 className="heading">Properties / Events</h3>
      {draggableTask && draggableTask.editable && (
        <input
          value={draggableTask?.value}
          onChange={(e) => {
            ChangeHandler(e.target.value);
          }}
        />
      )}
    </div>
  );
};

export default Editor;
