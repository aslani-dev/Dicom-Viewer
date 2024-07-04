import { createSlice } from "@reduxjs/toolkit";
import { viewInitialState } from "../../Helper/constants";
import { addPatient } from "./patientSlice";
export const viewSlice = createSlice({
  initialState: viewInitialState,
  name: "viewState",
  reducers: {
    setView: (state, { payload }) => {
      // payload=string
      if (payload === "create-patient") document.body.style.overflow = "hidden";
      state.view = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addPatient, (state, payload) => {
      state.view = "";
    });
  },
});

export const { setView } = viewSlice.actions;
