import { createSlice } from "@reduxjs/toolkit";
import { patientInitialState } from "../../Helper/constants";

export const patientSlice = createSlice({
  initialState: patientInitialState,
  name: "patientState",
  reducers: {
    addPatient: (state, { payload }) => {
      //payload= {...}
      state.push(payload);
    },
    removePatient: (state, { payload }) => {
      //payload= id

      return [...state.filter((e) => e[0] !== payload)];
    },
  },
});
export const { addPatient, removePatient } = patientSlice.actions;
