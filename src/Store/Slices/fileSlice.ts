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
    setSuccessful: (state: FileInitialState) => {
      state.uploadProgress = 100;
      state.isUploadedSuccessfull = true;
      state.isFaildUpload = false;
    },
    resetFile: () => fileInitialState,
  },
});

export const { selectFile, setFileState, resetFile, setSuccessful } =
  fileSlice.actions;

export default fileSlice.reducer;
