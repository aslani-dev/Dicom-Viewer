export const buttonMode = {
  text: "button-text",
  primary: "button-primary",
};

export const textMode = {
  paragraph: "paragraph",
  title: "title",
  subTitle: "sub-title",
  patientCell: "patient-cell",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
};
export const fileInitialState = {
  triggerUpload: false,
  isUploadedSuccessfull: false,
  isUploading: false,
  isFaildUpload: false,
  uploadProgress: 0,
};
export const viewInitialState = {
  view: "",
};

/*----------  patient initial state object  ----------*/

export const patientInitialState = [
  [
    "PatientID",
    "StudyInstanceUID",
    "SeriesInstanceUID",
    "Gender",
    "Date of Study",
  ],
  [
    "PatientID",
    "StudyInstanceUID",
    "SeriesInstanceUID",
    "Gender",
    "Date of Study",
  ],
];

/*----------  patient table title data  ----------*/
export const patientTitleData = [
  "PatientID",
  "StudyInstanceUID",
  "SeriesInstanceUID ",
  "Gender",
  "Date of Study",
];
