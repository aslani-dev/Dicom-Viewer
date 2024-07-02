import { Provider } from "react-redux";
import SelectFile from "../molecules/SelectFile";
import { store } from "../../store";
import FileContextProvider from "../../Hooks/FileContextProvider";

function App() {
  return (
    <FileContextProvider>
      <Provider store={store}>
        <div
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => e.preventDefault()}
        >
          <SelectFile />
        </div>
      </Provider>
    </FileContextProvider>
  );
}

export default App;
