import React, { ReactNode } from "react";
import Text from "./Text";
import { textMode } from "../../Helper/constants";

interface PatientTableCellProps {
  children?: ReactNode;
  className?: string;
  isTitle?: boolean;
  rest?: any; // Adjust this type according to what `rest` should be
}

const PatientTableCell: React.FC<PatientTableCellProps> = ({
  children,
  className = "",
  isTitle = false,
  ...rest
}) => {
  return (
    <Text
      mode={isTitle ? textMode.h4 : textMode.patientCell}
      className={`patient-table-cell ${className}`}
      {...rest}
    >
      {children}
    </Text>
  );
};

export default PatientTableCell;
