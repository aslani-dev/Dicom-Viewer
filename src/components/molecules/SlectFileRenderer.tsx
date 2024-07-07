import { ChangeEvent, DragEvent } from "react";
import { FaFileMedical } from "react-icons/fa";
import Button from "../atoms/Button";
import { buttonMode, textMode } from "../../Helper/constants";
import Text from "../atoms/Text";

// Define the props interface for SelectFileRenderer component
interface SelectFileRendererProps {
  handleFileChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleDrop: (event: DragEvent<HTMLDivElement>) => void;
}

function SelectFileRenderer({
  handleFileChange,
  handleDrop,
}: SelectFileRendererProps) {
  return (
    <div
      className="select-file"
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      <div className="select-file-container">
        <div className="file-icon">
          <FaFileMedical />
        </div>
        <div className="flex gap-[6px]">
          <Button mode={buttonMode.text}>
            <input
              type="file"
              accept=".dicom, .dcm"
              className="absolute inset-0 z-10 opacity-0"
              onChange={handleFileChange}
            />
            Click here
          </Button>
          <Text mode={textMode.paragraph} element="span">
            to upload your file or drag and drop.
          </Text>
        </div>
        <Text element="span" mode={textMode.subTitle}>
          Supported Format: DICOM, DCM
        </Text>
      </div>
    </div>
  );
}

export default SelectFileRenderer;
