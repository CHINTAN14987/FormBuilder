import { createSlice } from "@reduxjs/toolkit";

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
          value: "Title",
          subtype: "input",
          type: "inputField",
          editable: true,
        },

        {
          id: "4",
          label: "Back",
          subtype: "button",
          type: "backButton",
          editable: false,
        },
        {
          id: "3",
          label: "Submit",
          subtype: "button",
          type: "submitButton",
          editable: false,
        },
        {
          id: "10",
          subtype: "checkbox",
          type: "checkboxField",
          options: "option",
          editable: true,
        },
        {
          id: "5",
          subtype: "radio",
          type: "radioField",
          options: ["title", "title", "title", "title"],
          editable: true,
        },
        {
          id: "6",
          subtype: "date",
          type: "dateInputPicker",
          editable: false,
        },
        {
          id: "7",
          subtype: "month",
          type: "monthInputPicker",
          editable: false,
        },

        {
          id: "8",
          subtype: "circle",
          type: "circlularProgressBarField",
          percent: "50",
          editable: true,
        },
        {
          id: "9",
          subtype: "progress",
          type: "horizontalProgressBarField",
          percent: "75",
          editable: true,
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

      const [destinationGroup] = destination
        ? state.taskList.filter(
            (column) => column.groupName === destination.droppableId
          )
        : { ...sourceGroup };

      const [movingTask] = sourceGroup.tasks.filter(
        (t) => t.id === draggableId
      );

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

      return {
        ...state,
        taskList: [
          {
            ...state.taskList[0],

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
