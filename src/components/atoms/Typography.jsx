import React from "react";
import PropTypes from "prop-types";
import { textMode } from "../../Helper/constants";

function Text({ children, mode, className, element, ...rest }) {
  const classes = classNames(
    "typography ",
    {
      "text-h1": mode === textMode.h1,
      "text-h2": mode === textMode.h2,
      "text-h3": mode === textMode.h3,
      "text-h4": mode === textMode.h4,
      "text-h5": mode === textMode.h5,
      "text-h6": mode === textMode.h6,
      "text-pargraph": mode === textMode.paragraph,
      "text-title": mode === textMode.title,
      "text-subtitle": mode === textMode.subTitle,
    },
    className
  );
  const TextElement = element ?? "p";
  return (
    <TextElement className={classes} {...rest}>
      {children}
    </TextElement>
  );
}

Text.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  rest: PropTypes.any,
  element: "p" | "span" | "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6",
  mode: PropTypes.oneOf(Object.keys(textMode).map((key) => textMode(key))),
};
export default Text;
