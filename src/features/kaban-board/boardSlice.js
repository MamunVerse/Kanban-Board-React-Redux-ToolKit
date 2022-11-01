import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  boards: [
    {
      id: 1,
      title: "Backlog",
      cards: [
        {
          id: 1,
          title: "Card title 1",
          description: "Card content",
        },
        {
          id: 2,
          title: "Card title 2",
          description: "Card content",
        },
        {
          id: 3,
          title: "Card title 3",
          description: "Card content",
        },
      ],
    },
    {
      id: 2,
      title: "Doing",
      cards: [
        {
          id: 9,
          title: "Card title 9",
          description: "Card content",
        },
      ],
    },
    {
      id: 3,
      title: "Q&A",
      cards: [
        {
          id: 10,
          title: "Card title 10",
          description: "Card content",
        },
        {
          id: 11,
          title: "Card title 11",
          description: "Card content",
        },
      ],
    },
    {
      id: 4,
      title: "Production",
      cards: [
        {
          id: 12,
          title: "Card title 12",
          description: "Card content",
        },
        {
          id: 13,
          title: "Card title 13",
          description: "Card content",
        },
      ],
    },
  ],
};

const boardSlice = createSlice({
  name: "boards",
  initialState,
  reducers: {
    changeStatus: (state, action) => {
      const { id, name } = action.payload;

      state.boards = state.boards.map((board) =>
        board.id === id
          ? {
              ...board,
              status: name,
            }
          : board
      );
    },
    addNew: (state, action) => {
      const { status } = action.payload;

      const ids = state.boards.map((object) => {
        return object.id;
      });

      const max = Math.max(...ids);

      state.boards.push({
        id: max + 1,
        status: status,
        data: "",
      });
    },
    changeBoardData: (state, action) => {
      const { id, value } = action.payload;

      state.boards = state.boards.map((board) =>
        board.id === id
          ? {
              ...board,
              data: value,
            }
          : board
      );
    },
    removeBoard: (state, action) => {
      const { id } = action.payload;

      state.boards = state.boards.filter((board) => board.id !== id);
    },
  },
});

export const { changeStatus, addNew, changeBoardData, removeBoard } =
  boardSlice.actions;
export const selectAllBoards = (state) => state.boards.boards;
export default boardSlice.reducer;
