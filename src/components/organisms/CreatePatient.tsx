import { useDispatch, useSelector } from "react-redux";
import { useForm, SubmitHandler } from "react-hook-form";
import { addPatient } from "../../Store";
import CreatePatientForm from "./CreatePatientForm";

function CreatePatient() {
  const view: string = useSelector((state: any) => state.viewState);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
  } = useForm<any>(); // Specify form data type here

  const handleFormSubmit: SubmitHandler<any> = (formData) => {
    dispatch(addPatient(formData));
  };

  if (view !== "create-patient") return null;
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
