import React from "react";
import Text from "./Text";
import { textMode } from "../../Helper/constants";
import PropTypes from "prop-types";

function PatientTableCell({ children, className, isTitle, ...rest }) {
  return (
    <Text
      mode={isTitle ? textMode.h4 : textMode.patientCell}
      className={"patient-table-cell " + className}
      {...rest}
    >
      {children}
    </Text>
  );
}
PatientTableCell.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  isTitle: PropTypes.bool,

  rest: PropTypes.any,
};

export default PatientTableCell;
