// Define the interfaces for the button modes and text modes

export enum textMode {
  paragraph,
  title,
  subTitle,
  patientCell,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
}

// Define the constants with appropriate types
export enum buttonMode {
  text,
  primary,
}

export interface ViewInitialState {
  view: string;
}

// Define the types for the patient initial state and patient title data
export type PatientInitialState = string[][];
type PatientTitleData = string[];

export const viewInitialState: ViewInitialState = {
  view: "",
};
// Define the interfaces for the file and view initial states
export interface FileInitialState {
  triggerUpload: boolean;
  isUploadedSuccessfull: boolean;
  isUploading: boolean;
  isFaildUpload: boolean;
  uploadProgress: number;
}

export const fileInitialState: FileInitialState = {
  triggerUpload: false,
  isUploadedSuccessfull: false,
  isUploading: false,
  isFaildUpload: false,
  uploadProgress: 0,
};
/*----------  patient initial state object  ----------*/
export const patientInitialState: PatientInitialState = [];

/*----------  patient table title data  ----------*/
export const patientTitleData: PatientTitleData = [
  "PatientID",
  "StudyInstanceUID",
  "SeriesInstanceUID ",
  "Gender",
  "Date of Study",
];
