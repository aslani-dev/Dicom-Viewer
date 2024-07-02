import React from "react";
import PropTypes from "prop-types";
import { buttonMode } from "../../Helper/constants";
import classNames from "classnames";

function Button({ onClick, children, mode, className, ...rest }) {
  const classes = classNames(
    "button",
    {
      "btn-primary": mode === buttonMode.primary,
      "btn-text": mode === buttonMode.text,
    },
    className
  );
  
  return (
    <div id="button" onClick={onClick} className={classes} {...rest}>
      {children}
    </div>
  );
}
Button.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.func,
  className: PropTypes.string,
  mode: PropTypes.oneOf(Object.keys(buttonMode).map((key) => buttonMode[key])),
  rest: PropTypes.any,
};

export default Button;
