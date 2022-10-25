import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    status: "Issue",
  },
  {
    status: "Working On",
  },
  {
    status: "For Review",
  },
  {
    status: "Done",
  },
];

const processSlice = createSlice({
  name: "process",
  initialState,
  reducers: {},
});

export const selectAllProcess = (state) => state.process;
export default processSlice.reducer;
