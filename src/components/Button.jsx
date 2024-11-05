import clsx from "clsx";
import React from "react";

function Button({
  disabled = false,
  children,
  onClick,
  className = "",
  size = "md",
  fullWidth = false,

  type = "button",
  ...restProps
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={clsx(` px-4 py-2 rounded-md`, className)}
      {...restProps}
    >
      {children}
    </button>
  );
}

export default Button;
