import { configureStore } from "@reduxjs/toolkit";

// Import slice reducers and actions with types (replace with your actual types)
import {
  fileSlice,
  selectFile,
  setFileState,
  resetFile,
  setSuccessful,
} from "./Slices/fileSlice";

import { viewSlice, setView } from "./Slices/viewSlice";
import { patientSlice, addPatient, removePatient } from "./Slices/patientSlice";
import { FileInitialState, PatientInitialState } from "../Helper/constants";

// Define the combined state type for the entire store
export interface RootState {
  fileState: FileInitialState;
  viewState: string;
  patientState: PatientInitialState;
}

// Define the root action type (optional, can be left generic)
export type RootAction = any; // Replace with specific action types if needed

// Create the Redux store with type safety
export const store = configureStore<RootState, RootAction>({
  reducer: {
    fileState: fileSlice.reducer,
    viewState: viewSlice.reducer,
    patientState: patientSlice.reducer,
  },
  // middleware: getDefaultMiddleware(),
});

// Export the actions (no need for type assertions now)
export {
  selectFile,
  setFileState,
  resetFile,
  setView,
  addPatient,
  removePatient,
  setSuccessful,
};
