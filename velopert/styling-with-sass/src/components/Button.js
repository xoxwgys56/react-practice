import React from "react";
import classNames from "classnames";
import "./Button.scss";

function Button({ children, size, color, outline, fullWidth, ...rest }) {
  // 오직 outline이 true일 때만 동작하도록. 객체 안에 넣어줌.
  return (
    <button
      className={classNames("Button", size, color, { outline, fullWidth })}
      {...rest}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  size: "medium",
  color: "blue",
};

export default Button;
