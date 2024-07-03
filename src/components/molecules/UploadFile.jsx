import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FileContext } from "../../Hooks/FileContextProvider";
import axios from "axios";
import { resetFile, setFileState } from "../../store/slices";
import UploadFileRenderer from "./UploadFileRenderer";


function UploadFile() {
  const {
    triggerUpload,
    isUploadedSuccessfull,
    uploadProgress,
    isFaildUpload,
  } = useSelector((state) => state.fileState);
  const { file } = useContext(FileContext);
  const dispatch = useDispatch();

  

  useEffect(() => {
    if (triggerUpload) uploadFile(file);
  }, [triggerUpload]);

  if (!triggerUpload) {
    return;
  }
  const handleDelete = (e) => {
    dispatch(resetFile());
  };
  const uploadFile = (file) => {
    const formData = new FormData();
    formData.append("file", file);
    axios
      .post("https://api.escuelajs.co/api/v1/files/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent) => {
          const progress = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          dispatch(setFileState([{ path: "uploadProgress", value: progress }]));
        },
      })
      .then((response) => {
        dispatch(
          setFileState([
            { path: "isUploadedSuccessfull", value: true },
            { path: "isFaildUpload", value: false },
            { path: "uploadProgress", value: 100 },
          ])
        );
      })
      .catch((error) => {
        dispatch(
          setFileState([
            { path: "isUploadedSuccessfull", value: false },
            { path: "isFaildUpload", value: true },
          ])
        );
      });
  };

  return (
    <UploadFileRenderer
      fileName={file?.name}
      handleDelete={handleDelete}
      isFaildUpload={isFaildUpload}
      isUploadedSuccessfull={isUploadedSuccessfull}
      uploadProgress={uploadProgress}
    />
  );
}

export default UploadFile;
