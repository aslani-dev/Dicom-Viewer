import { useDispatch, useSelector } from "react-redux";
import { removePatient, setView } from "../../store";
import PatientTableRenderer from "./PatientTableRenderer";

function PatientTable() {
  const patientData = useSelector((state) => state.patientState);
  const dispatch = useDispatch();

  const handleDeletePatient = (patientId) => {
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
