"use client";
import React, { ChangeEvent, useState } from "react";

type Variant = "default" | "primary" | "success" | "warning" | "danger";

type Props = React.HTMLProps<HTMLInputElement> & {
  label?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  variant?: Variant;
  width?: string;
};

export default React.memo<Props>(function (_props) {
  const {
    label,
    onChange,
    placeholder,
    variant = "default",
    width = "fit-content",
    ...props
  } = _props;
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");

  const handleFocus = () => setFocused(true);
  const handleBlur = () => setFocused(false);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  const hasLabel = !!label;

  const variantStyles = {
    default: "border-gray-300 transition-all duration-300",
    primary:
      "border-blue-500 focus:border-blue-700 peer-focus:text-blue-700 transition-all duration-300",
    success:
      "border-green-500 focus:border-green-700 peer-focus:text-green-700 transition-all duration-300",
    warning:
      "border-yellow-500 focus:border-yellow-700 peer-focus:text-yellow-700 transition-all duration-300",
    danger:
      "border-red-500 focus:border-red-700 peer-focus:text-red-700 transition-all duration-300",
  };

  return (
    <div className="relative" style={{ width }}>
      <input
        type="text"
        className={`block w-full px-3 py-2 text-md text-gray-800 bg-transparent rounded-lg border-2 appearance-none focus:outline-none focus:ring-0 peer ${
          focused ? variantStyles[variant] : ""
        } ${hasLabel ? "pt-6" : "pt-3"}`}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder={placeholder}
        value={value}
        {...props}
      />
      {hasLabel && (
        <label
          className={`absolute pointer-events-none left-3 top-1/2 transform -translate-y-1/2 text-md duration-300 origin-[0] bg-inherit px-1 ${
            focused ? variantStyles[variant] : ""
          } ${
            focused || value || placeholder
              ? "-translate-y-6 scale-90"
              : "scale-100"
          }`}
        >
          {label}
        </label>
      )}
    </div>
  );
});