import React from "react";
import { FaFileMedical, FaRegCheckCircle } from "react-icons/fa";
import { textMode } from "../../Helper/constants";
import Text from "../atoms/Text";
import { RiDeleteBin7Line } from "react-icons/ri";
import PropTypes from "prop-types";

function UploadFileRenderer({
  fileName,
  isUploadedSuccessfull,
  isFaildUpload,
  handleDelete,
  uploadProgress,
}) {
  return (
    <div className="upload-file">
      <div className={`file-icon `}>
        <FaFileMedical />
      </div>
      <div className="w-full ">
        <div className="flex justify-between">
          <Text mode={textMode.h3}>{fileName}</Text>
          <div
            className={` cursor-pointer ${
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
        <div className={`progress `}>
          <span
            className={`progress-indicator  ${
              isUploadedSuccessfull
                ? "progress-indicator-successful"
                : isFaildUpload
                ? "progress-indicator-failed"
                : ""
            }`}
            style={{ width: uploadProgress + "%" }}
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
              ? "Sorry, Upload was faild"
              : "Uploading"}
          </Text>
          <Text>{uploadProgress}%</Text>
        </div>
      </div>
    </div>
  );
}
UploadFileRenderer.propTypes = {
  fileName: PropTypes?.string,
  isUploadedSuccessfull: PropTypes.bool,
  isFaildUpload: PropTypes.bool,
  handleDelete: PropTypes.func,
  uploadProgress: PropTypes.number,
};

export default UploadFileRenderer;
