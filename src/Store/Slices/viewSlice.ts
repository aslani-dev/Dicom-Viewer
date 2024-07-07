import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addPatient } from "./patientSlice";
import { setSuccessful } from "..";



export const viewSlice = createSlice({
  name: "viewState",
  initialState: "",
  reducers: {
    setView: (_, action: PayloadAction<string>) => {
      // Payload should be a string representing the view
      const payload = action.payload;
      if (payload) {
        document.body.style.overflow = "hidden";
      }
      return payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addPatient, (_) => {
      return "";
    });
    builder.addCase(setSuccessful, (_) => {
      return "dicom";
    });
  },
});

export const { setView } = viewSlice.actions;

export default viewSlice.reducer;
