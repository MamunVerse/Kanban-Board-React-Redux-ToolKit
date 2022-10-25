import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  boards: [
    {
      id: 1,
      status: "Issue",
      data: "Image Not Working",
    },
    {
      id: 2,
      status: "Working On",
      data: "Blog Category Issue",
    },
    {
      id: 3,
      status: "Done",
      data: "Footer Destgn Issue",
    },
    {
      id: 4,
      status: "For Review",
      data: "React Router Not Wotking",
    },
  ],
};

const boardSlice = createSlice({
  name: "boards",
  initialState,
  reducers: {
    changeStatus: (state, action) => {

        const { id, name } = action.payload;

        state.boards = state.boards.map(board => board.id === id ? {
            ...board,
            status: name
        } : board)
      
    },
    addNew : (state, action) => {

        const {status} = action.payload;

        const ids = state.boards.map(object => {
            return object.id;
          });

        const max = Math.max(...ids);

        state.boards.push(
            {
            id : max+1,
            status : status,
            data : ""
        })
    },
    changeBoardData : (state, action) => {
        const { id, value } = action.payload;

        state.boards = state.boards.map(board => board.id === id ? {
            ...board,
            data: value
        } : board)
    },
    removeBoard : (state, action) => {
        const { id } = action.payload;

        state.boards = state.boards.filter((board) => board.id !== id);

    }
  },
});

export const { changeStatus, addNew, changeBoardData, removeBoard } = boardSlice.actions;
export const selectAllBoards = (state) => state.boards.boards;
export default boardSlice.reducer;
