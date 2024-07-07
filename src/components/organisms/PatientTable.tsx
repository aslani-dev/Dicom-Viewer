
import { useDispatch, useSelector } from "react-redux";

import { removePatient, setView } from "../../Store";
import PatientTableRenderer from "./PatientTableRenderer";

interface PatientTableProps {}

function PatientTable({}: PatientTableProps) {
  const patientData = useSelector((state: any) => state.patientState);
  const dispatch = useDispatch();

  const handleDeletePatient = (patientId: string) => {
    dispatch(removePatient(patientId));
  };

  const handleAddPatient = () => {
    dispatch(setView("create-patient"));
  };

  return (
    <PatientTableRenderer
      handleAddPatient={handleAddPatient}
      handleDeletePatient={handleDeletePatient}
      patientData={patientData}
    />
  );
}

export default PatientTable;
