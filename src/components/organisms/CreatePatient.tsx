import { useDispatch, useSelector } from "react-redux";
import { useForm, SubmitHandler } from "react-hook-form";
import { addPatient } from "../../Store";
import CreatePatientForm from "./CreatePatientForm";
import { ViewInitialState } from "../../Helper/constants";

function CreatePatient() {
  const viewState: ViewInitialState = useSelector(
    (state: any) => state.viewState
  );
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
  } = useForm<any>(); // Specify form data type here

  const handleFormSubmit: SubmitHandler<any> = (formData) => {
    dispatch(addPatient(formData));
  };

  if (viewState.view !== "create-patient") return null;
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
