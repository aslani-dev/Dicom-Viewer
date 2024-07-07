import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DicomContext } from "../../Hooks/FileContextProvider";
import axios from "axios";
import { resetFile, setFileState, setSuccessful, setView } from "../../Store";
import UploadFileRenderer from "./UploadFileRenderer";
import { FileInitialState } from "../../Helper/constants";

function UploadFile() {
  const {
    triggerUpload,
    isUploadedSuccessfull,
    uploadProgress,
    isFaildUpload,
  }: FileInitialState = useSelector((state: any) => state.fileState);
  const { file } = useContext(DicomContext);
  const dispatch = useDispatch();

  useEffect(() => {
    if (triggerUpload && file) uploadFile(file);
  }, [triggerUpload]);

  if (!triggerUpload) {
    return;
  }
  const handleDelete = () => {
    dispatch(resetFile());
  };

  const handleShowDicom = () => {
    dispatch(setView("dicom"));
  };
  const uploadFile = (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    axios
      .post("https://api.escuelajs.co/api/v1/files/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent) => {
          const progress = Math.round(
            (progressEvent.loaded * 100) / (progressEvent.total ?? 1)
          );
          dispatch(setFileState([{ path: "uploadProgress", value: progress }]));
        },
      })
      .then(() => {
        dispatch(setSuccessful());
      })
      .catch(() => {
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
      handleShowDicom={handleShowDicom}
    />
  );
}

export default UploadFile;
