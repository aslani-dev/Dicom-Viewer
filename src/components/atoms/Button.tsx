import { FC, ButtonHTMLAttributes, ReactNode } from "react";

import classNames from "classnames";
import { buttonMode } from "../../Helper/constants";

// Define the types for the component props
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  children: ReactNode;
  mode?: buttonMode;
  className?: string;
}

const Button: FC<ButtonProps> = ({
  onClick,
  children,
  mode,
  className,
  ...rest
}) => {
  const classes = classNames(
    "button",
    {
      "btn-primary": mode === buttonMode.primary,
      "btn-text": mode === buttonMode.text,
    },
    className
  );

  return (
    <button onClick={onClick} className={classes} {...rest}>
      {children}
    </button>
  );
};

export default Button;
