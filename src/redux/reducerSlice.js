import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  taskList: [
    {
      groupName: "Drag",
      tasks: [],
    },
    {
      groupName: "Drop",
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
          id: "10",
          subtype: "input",
          type: "radio",
          options: ["option1", "option2", "option3"],
          editable: true,
        },
        {
          id: "5",
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
  ],
};

const reducerSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    formreducer1: (state, action) => {
      const { draggableId, source, destination } = action.payload;
      const [sourceGroup] = state.taskList.filter(
        (column) => column.groupName === source.droppableId
      );
      console.log(current(sourceGroup));
      const [destinationGroup] = destination
        ? state.taskList.filter(
            (column) => column.groupName === destination.droppableId
          )
        : { ...sourceGroup };

      const [movingTask] = sourceGroup.tasks.filter(
        (t) => t.id === draggableId
      );
      console.log(current(movingTask));
      console.log(current(movingTask, "destination"));
      const newSourceGroupTasks = sourceGroup.tasks.splice(source.index, 1);

      const newDestinationGroupTasks = destinationGroup.tasks.splice(
        destination.index,
        0,
        movingTask
      );

      const newTaskList = state.taskList.map((column) => {
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
      state = { ...state, taskList: [...state.taskList, newTaskList] };
    },
    formreducer2: (state, action) => {
      const updatedData = state.taskList[0].tasks.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            ...action.payload.data,
          };
        } else {
          return item;
        }
      });
      // console.log(current(state), "state");
      console.log(state);
      return {
        ...state,
        taskList: [
          // ...state.taskList,
          {
            ...state.taskList[0],
            // tasks: [
            //   ...current(state).taskList[0].tasks,
            //   {
            //     ...current(state).taskList[0].tasks[0],
            //     updatedData,
            //   },
            // ],
            tasks: updatedData,
          },
          state.taskList[1],
        ],
      };
    },
  },
});
export const action = reducerSlice.actions;
export default reducerSlice.reducer;
