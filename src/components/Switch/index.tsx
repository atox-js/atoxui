"use client";

import React from "react";
import { motion } from "framer-motion";

type Props = React.HTMLProps<HTMLInputElement> & {
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  variant?: "default" | "primary" | "success" | "warning" | "danger";
};

export default React.memo<Props>(
  ({ checked, onChange, variant = "default", ...props }) => {
    const getColor = (variant: string, checked: boolean) => {
      switch (variant) {
        case "primary":
          return checked ? "bg-blue-600" : "bg-gray-200";
        case "success":
          return checked ? "bg-green-500" : "bg-gray-200";
        case "warning":
          return checked ? "bg-yellow-500" : "bg-gray-200";
        case "danger":
          return checked ? "bg-red-500" : "bg-gray-200";
        default:
          return checked ? "bg-gray-400" : "bg-gray-200";
      }
    };

    const switchColor = getColor(variant, checked);

    return (
      <label className="inline-flex items-center">
        <input
          {...props}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="hidden"
        />
        <span
          className={`relative cursor-pointer w-10 h-6 transition duration-200 ease-linear rounded-full ${switchColor}`}
        >
          <motion.span
            className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full"
            animate={{ x: checked ? 16 : 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
        </span>
      </label>
    );
  }
);
