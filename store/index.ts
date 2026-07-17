import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./slices/uiSlice";
import postsReducer from "./slices/postsSlice";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    posts: postsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
