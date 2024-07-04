import { textMode } from "../../Helper/constants";
import Text from "../atoms/Text";
import PropTypes from "prop-types";

const FormInput = ({
  name,
  type = "text",
  placeholder,
  validation,
  errors,
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

FormInput.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  validation: PropTypes.any,
  errors: PropTypes.any,
};
export default FormInput;
