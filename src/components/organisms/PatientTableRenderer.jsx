import React from "react";
import PatientTableCell from "../atoms/PatientTableCell";
import { patientTitleData } from "../../Helper/constants";
import { RiDeleteBin7Line } from "react-icons/ri";
import { MdPlaylistAddCircle } from "react-icons/md";
import PropTypes from "prop-types";
import Text from "../atoms/Text";
function PatientTableRenderer({
  patientData,
  handleAddPatient,
  handleDeletePatient,
  ...rest
}) {
  const titleRender = patientTitleData.map((e, index) => {
    return (
      <PatientTableCell key={e + index} isTitle={true}>
        {e}
      </PatientTableCell>
    );
  });
  const tableRender = patientData?.map((row, i) => {
    return (
      <div key={i + "row"} className="patient-table-row ">
        {row.map((e, index) => (
          <PatientTableCell key={e + index}>{e}</PatientTableCell>
        ))}
        <div
          className="patient-icon patient-delete"
          onClick={() => handleDeletePatient(row[0])}
        >
          <RiDeleteBin7Line />
        </div>
      </div>
    );
  });

  return (
    <div className="patient-table" {...rest}>
      <div className=""></div>
      <div className="patient-table-container">
        <div className="patient-table-row patient-table-title">
          {titleRender}
          <div className="patient-icon patient-add" onClick={handleAddPatient}>
            <MdPlaylistAddCircle />
          </div>
        </div>
        {tableRender ?? (
          <Text>Sorry your don't register any patient data until now</Text>
        )}
      </div>
    </div>
  );
}
PatientTableRenderer.propTypes = {
  patientData: PropTypes.array,
  handleAddPatient: PropTypes.func,
  handleDeletePatient: PropTypes.func,
  rest: PropTypes.any,
};

export default PatientTableRenderer;
