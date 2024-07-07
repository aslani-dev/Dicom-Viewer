import { FileContext } from "../../Hooks/FileContextProvider";
import { useContext } from "react";
import { useSelector } from "react-redux";
import DicomViewverRenderer from "./DicomViewerRenderer";

function DicomViewer() {
  const { file } = useContext(FileContext);
  const view = useSelector((state: any) => state.viewState);
  if (!file || view !== "dicom") return;
  return <DicomViewverRenderer file={file} />;
}

export default DicomViewer;
