import React, { forwardRef } from "react";

function Input(
  {
    type = "text",
    placeholder,
    className = "",
    onChange,
    value,
    name,
    id,
    disabled = false,
    required = false,
    maxLength,
    minLength,
    pattern,
    autoComplete = "off",
    ...restProps
  },
  ref
) {
  const baseStyle =
    "border rounded-xl px-4 py-2 outline-none transition-all duration-200";

  return (
    <input
      ref={ref}
      type={type}
      name={name}
      id={id}
      value={value}
      onChange={onChange}
      disabled={disabled}
      required={required}
      maxLength={maxLength}
      minLength={minLength}
      pattern={pattern}
      autoComplete={autoComplete}
      placeholder={placeholder}
      className={`${baseStyle} ${className}`}
      {...restProps}
    />
  );
}

export default forwardRef(Input);
