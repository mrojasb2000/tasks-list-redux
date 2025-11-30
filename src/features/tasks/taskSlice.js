// Functions on state
import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Task 1",
    description: "Description for Task 1",
    completed: false,
  },
  {
    id: "2",
    title: "Task 2",
    description: "Description for Task 2",
    completed: false,
  },
];

// Initialize state the task slice
export const taskSlice = createSlice({
  name: "tasks",
  initialState, // [] List of tasks is empty
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
      //[...state, action.payload];
    },
    removeTask: (state, action) => {
      const index = state.findIndex((task) => task.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  }, // change state functions
});

export const { addTask, removeTask } = taskSlice.actions;

export default taskSlice.reducer;
