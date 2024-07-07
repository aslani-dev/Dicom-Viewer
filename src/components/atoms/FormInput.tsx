import { FC } from "react";
import { textMode } from "../../Helper/constants";
import Text from "../atoms/Text";

interface FormInputProps {
  name: string;
  type?: string;
  placeholder?: string;
  validation?: any;
  errors?: Record<string, any>;
}

const FormInput: FC<FormInputProps> = ({
  name,
  type = "text",
  placeholder,
  validation,
  errors = {},
}) => {
  return (
    <div className="form-input">
      <Text mode={textMode.paragraph} className="capitalize">
        {name}
      </Text>
      <input
        {...validation}
        type={type}
        name={name}
        className={`input ${errors[name] && "has-error"}`}
        placeholder={placeholder}
        autoComplete={type === "password" ? "current-password" : ""}
      />
      {errors[name] && (
        <Text mode={textMode.patientCell} className="has-error !font-normal">
          {errors[name].message}{" "}
        </Text>
      )}
    </div>
  );
};

export default FormInput;
