import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import boardReducer from '../features/kaban-board/boardSlice';
import processReducer from '../features/board-process/ProcessSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    boards: boardReducer,
    process: processReducer,
  },
});
