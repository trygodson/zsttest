import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {changeLoading} from "../loader/loader";
import {GetProfile} from "../../../services/profile";
import firestore from "@react-native-firebase/firestore";

const initialState = {
  loading: false,
  error: null,
  response: null,
};
const getTaskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    getProfileDefaultState: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(getTaskAction.pending, (state) => {
      {
        state.loading = true;
      }
    });
    builder.addCase(getTaskAction.fulfilled, (state, action) => {
      state.response = action.payload;
      state.loading = false;
    });
    builder.addCase(getTaskAction.rejected, (state, action) => {
      {
        state.error = action.payload;
        state.loading = false;
      }
    });
  },
});
export const getTaskAction = createAsyncThunk("getTask", async (data, thunkApi) => {
  return firestore()
    .collection("tasks")
    .where("selectedTask", "==", `${data}`)
    .get()
    .then((querySnapshot) => {
      const tasks = [];
      // console.log(querySnapshot, "documentSnapshot.data()");

      querySnapshot.forEach((documentSnapshot) => {
        tasks.push({
          ...documentSnapshot.data(),
          id: documentSnapshot.id,
        });
      });

      return tasks;
    })

    .catch((error) => {
      return thunkApi.rejectWithValue(error);
    });
});

export default getTaskSlice.reducer;
