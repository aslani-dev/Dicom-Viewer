import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FileInitialState, fileInitialState } from "../../Helper/constants";

export const fileSlice = createSlice({
  name: "fileState",
  initialState: fileInitialState,
  reducers: {
    selectFile: (state) => {
      state.triggerUpload = true;
    },
    setFileState: (
      state: FileInitialState,
      action: PayloadAction<{ path: keyof FileInitialState; value: any }[]>
    ) => {
      let temp: FileInitialState = { ...state };
      action.payload?.forEach((e) => {
        // state[e.path] = e.value;
        temp = {
          ...temp,
          [e.path]: e.value,
        };
      });
      return { ...temp };
    },
    resetFile: () => fileInitialState,
  },
});

export const { selectFile, setFileState, resetFile } = fileSlice.actions;

export default fileSlice.reducer;
