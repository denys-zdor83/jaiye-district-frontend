"use client";

import { useRef } from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./slices/uiSlice";
import postsReducer from "./slices/postsSlice";

function makeStore() {
  return configureStore({
    reducer: {
      ui: uiReducer,
      posts: postsReducer,
    },
  });
}

type AppStore = ReturnType<typeof makeStore>;

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore | null>(null);
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }
  return <Provider store={storeRef.current}>{children}</Provider>;
}
