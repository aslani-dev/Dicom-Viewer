import { useEffect } from "react";
import useCornnerstone from "../../Hooks/useCornerstone";
import Modal from "./Modal";

interface DicomInterface {
  file: File;
}

function DicomViewverRenderer({ file }: DicomInterface) {
  const { handleFileChange } = useCornnerstone();
  useEffect(() => {
    handleFileChange(file);
  });
  return (
    <Modal>
      <div id="content" onClick={(e) => e.stopPropagation()}></div>
    </Modal>
  );
}

export default DicomViewverRenderer;
