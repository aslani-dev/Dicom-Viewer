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
    setFile(files[0]);
    // dispatch to trigger upload
    dispatch(selectFile());
  };
  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    // Check if it's actually a valid file
    if (file && /\.(dcm|dicom)$/i.test(file.name)) {
      //hold file in state
      setFile(file);
      // dispatch to trigger upload
      dispatch(selectFile());
    }
  };

  return (
    <SelectFileRenderer
      handleFileChange={handleFileChange}
      handleDrop={handleDrop}
    />
  );
}

export default SelectFile;
