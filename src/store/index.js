import {configureStore, combineReducers} from "@reduxjs/toolkit";
import LoaderSlice from "./slices/loader/loader";
import getTaskSlice from "./slices/task/taskSlice";

const combinedReducer = combineReducers({
  loader: LoaderSlice,
  getTask: getTaskSlice,
});
export const store = configureStore({
  reducer: (state, action) => {
    // if (action.type === 'profile/getProfileDefaultState') {
    //   // this applies to all keys defined in persistConfig(s)

    // } else {
    //   return combinedReducer(state, action);
    // }
    return combinedReducer(state, action);
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware();
  },
});
