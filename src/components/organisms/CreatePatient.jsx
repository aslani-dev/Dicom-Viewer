import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { addPatient } from "../../store";
import CreatePatientForm from "./CreatePatientForm";

function CreatePatient() {
  const viewState = useSelector((state) => state.viewState);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
  } = useForm();

  const handleFormSubmit = (e) => {
    dispatch(addPatient(e));
  };
  
  if (viewState.view !== "create-patient") return;
  return (
    <CreatePatientForm
      handleFormSubmit={handleFormSubmit}
      handleSubmit={handleSubmit}
      formErrors={formErrors}
      register={register}
    />
  );
}

export default CreatePatient;
