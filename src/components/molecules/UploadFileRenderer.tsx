import React from "react";
import { FaFileMedical, FaRegCheckCircle } from "react-icons/fa";
import { RiDeleteBin7Line } from "react-icons/ri";
import { textMode } from "../../Helper/constants";
import Text from "../atoms/Text";

// Define the interface for UploadFileRenderer props
interface UploadFileRendererProps {
  fileName?: string;
  isUploadedSuccessfull: boolean;
  isFaildUpload: boolean;
  handleDelete: React.MouseEventHandler<HTMLDivElement>; // Updated to match the actual handler in the component
  uploadProgress: number;
}

function UploadFileRenderer({
  fileName,
  isUploadedSuccessfull,
  isFaildUpload,
  handleDelete,
  uploadProgress,
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
            onClick={handleDelete}
          >
            {isUploadedSuccessfull ? (
              <FaRegCheckCircle />
            ) : (
              <RiDeleteBin7Line />
            )}
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
