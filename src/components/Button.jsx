import React from "react";

function Button({ disabled, children, onClick, className }) {
  return (
    <button
      disabled={disabled}
      className={` px-4 py-2 rounded-md ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
