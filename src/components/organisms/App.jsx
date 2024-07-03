import { Provider } from "react-redux";
import SelectFile from "../molecules/SelectFile";
import { store } from "../../store";
import FileContextProvider from "../../Hooks/FileContextProvider";
import UploadFile from "../molecules/UploadFile";
import PatientTable from "./PatientTable";

function App() {
  return (
    <FileContextProvider>
      <Provider store={store}>
        <div
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => e.preventDefault()}
        >
          <SelectFile />
          <UploadFile />
          <PatientTable />
        </div>
      </Provider>
    </FileContextProvider>
  );
}

export default App;
