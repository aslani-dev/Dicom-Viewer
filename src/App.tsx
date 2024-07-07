import React from "react";
import { Provider } from "react-redux";
import FileContextProvider from "./Hooks/FileContextProvider";
import { store } from "./Store";
import SelectFile from "./components/molecules/SelectFile";
import "./index.css";
import UploadFile from "./components/molecules/UploadFile";
import CreatePatient from "./components/organisms/CreatePatient";
import PatientTable from "./components/organisms/PatientTable";
import DicomViewer from "./components/organisms/Dicom";

const App: React.FC = () => {
  return (
    <FileContextProvider>
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
    </FileContextProvider>
  );
};

export default App;
