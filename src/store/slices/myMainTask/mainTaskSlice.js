import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState = {
  selectedTask: "My Task",
  mainList: ["My Task", "Blue Task"],
};
const getMainTaskSlice = createSlice({
  name: "mainTaskList",
  initialState,
  reducers: {
    getProfileDefaultState: () => initialState,
    addMainTaskAction: (state, action) => {
      state.response = [...state.response, action.payload];
    },
    selectTaskAction: (state, action) => {
      state.selectedTask = action.payload;
    },
  },
});

export default getMainTaskSlice.reducer;
export const {addMainTaskAction, selectTaskAction} = getMainTaskSlice.actions;
