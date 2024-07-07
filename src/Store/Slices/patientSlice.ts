import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { patientInitialState } from "../../Helper/constants";
import { nanoid } from "@reduxjs/toolkit";



export const patientSlice = createSlice({
  name: "patientState",
  initialState:patientInitialState,
  reducers: {
    addPatient: (state, action: PayloadAction<any>) => {
      // Payload should be an object containing patient data
      const payload = action.payload;

      const values = [nanoid()]; // Generate unique id for patient

      // Push payload values into the state array
      Object.keys(payload).forEach((key) => {
        values.push(payload[key]);
      });

      state.push(values); // Mutate the state by adding the new patient data
    },
    removePatient: (state, action: PayloadAction<string>) => {
      // Payload should be the id of the patient to remove
      const idToRemove = action.payload;

      // Filter out the patient with the matching id
      return state.filter((patient) => patient[0] !== idToRemove);
    },
  },
});

export const { addPatient, removePatient } = patientSlice.actions;

export default patientSlice.reducer;
