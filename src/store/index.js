import { configureStore } from "@reduxjs/toolkit";
import { fileSlice, selectFile, setFileState, resetFile } from "./slices";
import { viewSlice, setView } from "./slices/viewSlice";

export const store = configureStore({
  reducer: {
    fileState: fileSlice.reducer,
    viewState: viewSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
export { selectFile, setFileState, resetFile, setView };
