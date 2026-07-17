"use client";

import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface UiState {
  mobileMenuOpen: boolean;
  scrolled: boolean;
}

const initialState: UiState = {
  mobileMenuOpen: false,
  scrolled: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setMobileMenuOpen(state, action: PayloadAction<boolean>) {
      state.mobileMenuOpen = action.payload;
    },
    toggleMobileMenu(state) {
      state.mobileMenuOpen = !state.mobileMenuOpen;
    },
    setScrolled(state, action: PayloadAction<boolean>) {
      state.scrolled = action.payload;
    },
  },
});

export const { setMobileMenuOpen, toggleMobileMenu, setScrolled } =
  uiSlice.actions;
export default uiSlice.reducer;
