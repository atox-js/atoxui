"use client";

import React from "react";
import { motion } from "framer-motion";

export type Props = {
  size?: number;
  variant?: "default" | "primary" | "success" | "warning" | "danger";
};

const Spinner: React.FC<Props> = ({ size = 40, variant = "default" }) => {
  const getColor = (variant: string) => {
    switch (variant) {
      case "primary":
        return "text-blue-600";
      case "success":
        return "text-green-500";
      case "warning":
        return "text-yellow-500";
      case "danger":
        return "text-red-500";
      default:
        return "text-gray-500";
    }
  };

  const color = getColor(variant);

  return (
    <div className={`flex items-center justify-center`}>
      <motion.svg
        className={color}
        initial={{ rotate: 0 }}
        animate={{ rotate: "360deg" }}
        transition={{
          repeat: Infinity,
          duration: 1,
          bounce: 0,
          ease: "linear",
        }}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        width={size}
        height={size}
      >
        <motion.circle
          className="opacity-75"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          animate={{ pathLength: [0, 0.5, 0] }}
          transition={{ bounce: 0, duration: 2.5, repeat: Infinity }}
        />
      </motion.svg>
    </div>
  );
};

export default Spinner;
