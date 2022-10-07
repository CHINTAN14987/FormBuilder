import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  taskList: [
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
        // {
        //   id: "2",

        //   label: "Sub Title",
        //   subtype: "p",
        //   editable: false,
        // },
        // { id: "3", label: "Submit", subtype: "button", name: "submit" },
        // { id: "4", label: "Back", subtype: "button", name: "back" },
        // {
        //   id: "10",
        //   subtype: "input",
        //   type: "radio",
        //   options: ["option1", "option2", "option3"],
        //   editable: true,
        // },
        // {
        //   id: "5",
        //   subtype: "input",
        //   type: "checkbox",
        //   options: ["checkbox1", "checkbox2", "checkbox3"],
        //   editable: true,
        // },
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
      console.log("action===>", action, state);
      return { ...state, taskList: { ...state.taskList, ...action.payload } };
    },
    formreducer2: (state, action) => {},
  },
});
export const action = reducerSlice.actions;
export default reducerSlice.reducer;
