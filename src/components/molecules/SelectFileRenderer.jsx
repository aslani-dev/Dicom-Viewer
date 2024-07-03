import React from "react";
import { FaFileMedical } from "react-icons/fa";
import Button from "../atoms/Button";
import { buttonMode, textMode } from "../../Helper/constants";
import Text from "../atoms/Text";
import PropTypes from "prop-types";

function SelectFileRenderer({ handleFileChange, handleDrop }) {
  return (
    <div
      className="select-file "
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
          <Text mode={textMode.paragraph} element={"span"}>
            to upload your file or drag and drop.
          </Text>
        </div>
        <Text element={"span"} mode={textMode.subTitle}>
          Supported Format: DICOM, DCM
        </Text>
      </div>
    </div>
  );
}
SelectFileRenderer.propTypes = {
  handleFileChange: PropTypes.func,
  handleDrop: PropTypes.func,
};

export default SelectFileRenderer;
