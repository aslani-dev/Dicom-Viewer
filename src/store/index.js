import { configureStore } from "@reduxjs/toolkit";
import {
  fileSlice,
  selectFile,
  setFileState,
  resetFile,
} from "./slices/fileSlice";
import { viewSlice, setView } from "./slices/viewSlice";
import { patientSlice, addPatient, removePatient } from "./slices/patientSlice";

export const store = configureStore({
  reducer: {
    fileState: fileSlice.reducer,
    viewState: viewSlice.reducer,
    patientState: patientSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
export {
  selectFile,
  setFileState,
  resetFile,
  setView,
  addPatient,
  removePatient,
};
