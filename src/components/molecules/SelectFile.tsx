import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { DicomContext } from "../../Hooks/FileContextProvider";
import { selectFile } from "../../Store/Slices/fileSlice";
import SelectFileRenderer from "./SlectFileRenderer";

function SelectFile() {
  const dispatch = useDispatch();
  const { setFile } = useContext(DicomContext);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      // Hold file in state
      setFile(files[0]);
      // Dispatch to trigger upload
      dispatch(selectFile());
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    // Check if it's actually a valid file
    if (file && /\.(dcm|dicom)$/i.test(file.name)) {
      // Hold file in state
      setFile(file);
      // Dispatch to trigger upload
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
