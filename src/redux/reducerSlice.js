import { createSlice } from "@reduxjs/toolkit";
import data from "../card.json";

const initialState = data;
const reducerSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    formreducer: (state, action) => {
      return state;
    },
  },
});
export const action = reducerSlice.actions;
export default reducerSlice.reducer;
