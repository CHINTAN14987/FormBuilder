import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { action } from "../redux/reducerSlice";

const Editor = () => {
  const draggableTask = useSelector((state) => state.taskList[0].tasks[0]);
  const disptach = useDispatch();
  console.log(draggableTask);
  const ChangeHandler = (e) => {
    disptach(action.formreducer2({ data: { label: e }, id: draggableTask.id }));
  };
  return (
    <div>
      {draggableTask && (
        <input
          value={draggableTask?.label}
          onChange={(e) => {
            ChangeHandler(e.target.value);
          }}
        />
      )}
    </div>
  );
};

export default Editor;
