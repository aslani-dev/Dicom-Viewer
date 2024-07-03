import { configureStore } from "@reduxjs/toolkit";
import { fileSlice, selectFile, setFileState, resetFile } from "./slices";

export const store = configureStore({
  reducer: {
    fileState: fileSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
export { selectFile, setFileState, resetFile };
