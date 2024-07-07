import React from "react";
import { Provider } from "react-redux";
import DicomContextProvider from "./Hooks/FileContextProvider";
import { store } from "./Store";
import SelectFile from "./components/molecules/SelectFile";
import "./index.css";
import UploadFile from "./components/molecules/UploadFile";
import CreatePatient from "./components/organisms/CreatePatient";
import PatientTable from "./components/organisms/PatientTable";
import DicomViewer from "./components/organisms/Dicom";

const App: React.FC = () => {
  return (
    <DicomContextProvider>
      <Provider store={store}>
        <div
          className="app"
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => e.preventDefault()}
        >
          <SelectFile />
          <UploadFile />
          <PatientTable />
          <CreatePatient />
          <DicomViewer />
        </div>
      </Provider>
    </DicomContextProvider>
  );
};

export default App;
