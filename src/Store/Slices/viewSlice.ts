import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { viewInitialState } from "../../Helper/constants";
import { addPatient } from "./patientSlice";
import { setFileState, setSuccessful } from "..";

export const viewSlice = createSlice({
  name: "viewState",
  initialState: viewInitialState,
  reducers: {
    setView: (state, action: PayloadAction<string>) => {
      // Payload should be a string representing the view
      const payload = action.payload;
      if (payload === "create-patient") {
        document.body.style.overflow = "hidden";
      }
      state.view = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addPatient, (state) => {
      state.view = "";
    });
    builder.addCase(setSuccessful, (state) => {
      state.view = "dicom";
    });
  },
});

export const { setView } = viewSlice.actions;

export default viewSlice.reducer;
