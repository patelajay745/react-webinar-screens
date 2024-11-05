import React from "react";

function Input({ type, placeholder, className }) {
  return (
    <input
      type={type}
      className={`border rounded-xl px-4 py-2 ${className}`}
      placeholder={placeholder}
    ></input>
  );
}

export default Input;
