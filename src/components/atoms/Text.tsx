import { FC, ElementType, ReactNode } from "react";
import { textMode } from "../../Helper/constants";
import classNames from "classnames";


interface TextProps {
  children: ReactNode;
  className?: string;
  element?: ElementType;
  mode?: textMode; // Ensure mode is one of the keys from textMode
  [key: string]: any; // To capture any other props
}

const Text: FC<TextProps> = ({
  children,
  mode,
  className,
  element,
  ...rest
}) => {
  const classes = classNames(
    "typography",
    {
      "text-h1": mode === textMode.h1,
      "text-h2": mode === textMode.h2,
      "text-h3": mode === textMode.h3,
      "text-h4": mode === textMode.h4,
      "text-h5": mode === textMode.h5,
      "text-h6": mode === textMode.h6,
      "text-paragraph": mode === textMode.paragraph,
      "text-title": mode === textMode.title,
      "text-subtitle": mode === textMode.subTitle,
      "text-patient-cell": mode === textMode.patientCell,
    },
    className
  );

  const TextElement: ElementType = element ?? "p";

  return (
    <TextElement className={classes} {...rest}>
      {children}
    </TextElement>
  );
};

export default Text;
