import React from "react";
import PatientTableCell from "../atoms/PatientTableCell";
import { patientTitleData } from "../../Helper/constants";
import { RiDeleteBin7Line } from "react-icons/ri";
import Text from "../atoms/Text";
import { IoMdAddCircle } from "react-icons/io";

interface PatientTableRendererProps {
  patientData?: any;
  handleAddPatient: () => void;
  handleDeletePatient: (patientId: string) => void;
  rest?: any; // Adjust as per your specific props
}

const PatientTableRenderer: React.FC<PatientTableRendererProps> = ({
  patientData,
  handleAddPatient,
  handleDeletePatient,
  ...rest
}) => {
  const titleRender = patientTitleData.map((e, index) => (
    <PatientTableCell key={e + index} isTitle={true}>
      {e}
    </PatientTableCell>
  ));

  const tableRender = patientData?.map((row: string[], i: number) => (
    <div key={i + "row"} className="patient-table-row ">
      {row.map((e: string, index: number) => (
        <PatientTableCell key={e + index}>{e}</PatientTableCell>
      ))}
      <div
        className="patient-icon patient-delete"
        onClick={() => handleDeletePatient(row[0])}
      >
        <RiDeleteBin7Line />
      </div>
    </div>
  ));
  return (
    <div className="patient-table" {...rest}>
      <div className=""></div>
      <div className="patient-table-container">
        <div className="patient-table-row patient-table-title">
          {titleRender}
          <div className="patient-icon patient-add" onClick={handleAddPatient}>
            <IoMdAddCircle />
          </div>
        </div>
        {tableRender.length === 0 ? (
          <Text>Sorry you haven't registered any patient data until now</Text>
        ) : (
          tableRender
        )}
      </div>
    </div>
  );
};

export default PatientTableRenderer;
