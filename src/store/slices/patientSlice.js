import { createSlice } from "@reduxjs/toolkit";
import { patientInitialState } from "../../Helper/constants";
import { nanoid } from "@reduxjs/toolkit";

export const patientSlice = createSlice({
  initialState: patientInitialState,
  name: "patientState",
  reducers: {
    addPatient: (state, { payload }) => {
      //payload= {...}

      const values = [nanoid()];

      Object.keys(payload).map((key) => values.push(payload[key]));

      state.push(values);
    },
    removePatient: (state, { payload }) => {
      //payload= id

      return [...state.filter((e) => e[0] !== payload)];
    },
  },
});
export const { addPatient, removePatient } = patientSlice.actions;
