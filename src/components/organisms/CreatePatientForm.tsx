import Modal from "./Modal";
import FormInput from "../atoms/FormInput";
import Button from "../atoms/Button";
import { buttonMode } from "../../Helper/constants";
import {
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

interface CreatePatientFormProps {
  handleSubmit: UseFormHandleSubmit<any>; // Adjust any if specific form data type is used
  handleFormSubmit: SubmitHandler<any>; // Adjust any if specific form data type is used
  register: UseFormRegister<any>; // Adjust any if specific form data type is used
  formErrors: Record<string, any>; // Adjust any if specific form errors type is used
}

function CreatePatientForm({
  handleSubmit,
  handleFormSubmit,
  register,
  formErrors,
}: CreatePatientFormProps) {
  return (
    <Modal>
      <form
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleSubmit(handleFormSubmit)}
        className="create-patient"
      >
        <FormInput
          name="Study Instance UID"
          type="text"
          placeholder="Study Instance UID*"
          validation={register("Study Instance UID", {
            required: "Study Instance UID can't be blank",
          })}
          errors={formErrors}
        />
        <FormInput
          name="Series Instance UID"
          type="text"
          placeholder="Series Instance UID*"
          validation={register("Series Instance UID", {
            required: "Series Instance UID can't be blank",
          })}
          errors={formErrors}
        />
        <FormInput
          name="Gender"
          type="text"
          placeholder="Gender*"
          validation={register("Gender", {
            required: "Gender can't be blank",
          })}
          errors={formErrors}
        />
        <FormInput
          name="Date of Study"
          type="text"
          placeholder="Date of Study*"
          validation={register("Date of Study", {
            required: "Date of Study can't be blank",
          })}
          errors={formErrors}
        />
        <Button mode={buttonMode.primary} className="" type="submit">
          Submit
        </Button>
      </form>
    </Modal>
  );
}

export default CreatePatientForm;
