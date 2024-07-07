import React from "react";
import { FaFileMedical } from "react-icons/fa";
import { RiDeleteBin7Line } from "react-icons/ri";
import { MdRemoveRedEye } from "react-icons/md";
import { textMode } from "../../Helper/constants";
import Text from "../atoms/Text";

// Define the interface for UploadFileRenderer props
interface UploadFileRendererProps {
  fileName?: string;
  isUploadedSuccessfull: boolean;
  isFaildUpload: boolean;
  handleDelete: React.MouseEventHandler<HTMLDivElement>;
  uploadProgress: number;
  handleShowDicom: React.MouseEventHandler<HTMLDivElement>;
}

function UploadFileRenderer({
  fileName,
  isUploadedSuccessfull,
  isFaildUpload,
  handleDelete,
  uploadProgress,
  handleShowDicom,
}: UploadFileRendererProps) {
  return (
    <div className="upload-file">
      <div className="file-icon">
        <FaFileMedical />
      </div>
      <div className="w-full">
        <div className="flex justify-between">
          <Text mode={textMode.h3}>{fileName}</Text>
          <div
            className={`cursor-pointer ${
              isUploadedSuccessfull
                ? "upload-successful-icon"
                : isFaildUpload
                ? "upload-failed-icon"
                : ""
            }`}
            onClick={isUploadedSuccessfull ? handleShowDicom : handleDelete}
          >
            {isUploadedSuccessfull ? <MdRemoveRedEye /> : <RiDeleteBin7Line />}
          </div>
        </div>
        <div className="progress">
          <span
            className={`progress-indicator ${
              isUploadedSuccessfull
                ? "progress-indicator-successful"
                : isFaildUpload
                ? "progress-indicator-failed"
                : ""
            }`}
            style={{ width: `${uploadProgress}%` }}
          ></span>
        </div>
        <div className="flex justify-between">
          <Text
            mode={textMode.subTitle}
            className={`${
              isUploadedSuccessfull
                ? "upload-successful-icon"
                : isFaildUpload
                ? "upload-failed-icon"
                : ""
            }`}
          >
            {isUploadedSuccessfull
              ? "Upload successful!"
              : isFaildUpload
              ? "Sorry, Upload failed"
              : "Uploading"}
          </Text>
          <Text>{uploadProgress}%</Text>
        </div>
      </div>
    </div>
  );
}

export default UploadFileRenderer;
