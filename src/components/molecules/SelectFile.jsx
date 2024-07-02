import { useDispatch } from "react-redux";
import SelectFileRenderer from "./SelectFileRenderer";
import { selectFile } from "../../store";
import { useContext } from "react";
import { FileContext } from "../../Hooks/FileContextProvider";

function SelectFile() {
  const dispatch = useDispatch();
  const { setFile } = useContext(FileContext);
  const handleFileChange = (event) => {
    const files = event.target.files;
    //hold file in state
    setFile(files);
    // dispatch to trigger upload
    dispatch(selectFile());
  };
  
  return <SelectFileRenderer handleFileChange={handleFileChange} />;
}

export default SelectFile;
