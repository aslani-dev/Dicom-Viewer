import { createSlice } from "@reduxjs/toolkit";
import { fileInitialState } from "../../Helper/constants";

export const fileSlice = createSlice({
  initialState: fileInitialState,
  name: "fileState",
  reducers: {
    selectFile: (state, { payload }) => {
      // payload = null
      state.triggerUpload = true;
    },
  },
});
export const { selectFile } = fileSlice.actions;
