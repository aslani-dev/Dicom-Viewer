import { createSlice } from "@reduxjs/toolkit";
import { viewInitialState } from "../../Helper/constants";

export const viewSlice = createSlice({
  initialState: viewInitialState,
  name: viewState,
  reducers: {
    setView: (state, { payload }) => {
      // payload=string
      state.view = payload;
    },
  },
});

export const { setView: setModal } = viewSlice.actions;
