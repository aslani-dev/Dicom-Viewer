import { createSlice } from "@reduxjs/toolkit";
import { fileInitialState } from "../../Helper/constants";

export const fileSlice = createSlice({
  initialState: fileInitialState,
  name: "fileState",
  reducers: {
    selectFile: (state) => {
      state.triggerUpload = true;
    },
    setFileState: (state, { payload }) => {
      // payload:{paths:[{path:'', value:any},...]}
      payload?.map((e) => {
        state[e.path] = e.value;
      });
    },
    resetFile: (state) => {
      return { ...fileInitialState };
    },
  },
});
export const { selectFile, setFileState, resetFile } = fileSlice.actions;
