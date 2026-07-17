"use client";

import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Post } from "@/types";

interface PostsState {
  currentPage: number;
  postsPerPage: number;
  selectedPost: Post | null;
}

const initialState: PostsState = {
  currentPage: 1,
  postsPerPage: 4,
  selectedPost: null,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setSelectedPost(state, action: PayloadAction<Post | null>) {
      state.selectedPost = action.payload;
    },
  },
});

export const { setCurrentPage, setSelectedPost } = postsSlice.actions;
export default postsSlice.reducer;
