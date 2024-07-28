"use client";
import { motion } from "framer-motion";
import React from "react";

type Props = React.HTMLProps<HTMLDivElement> & {
  progress: number;
  variant?: "default" | "primary" | "success" | "warning" | "danger";
};

export default React.memo<Props>(function (_props) {
  const { progress, variant = "default", ...props } = _props;
  const color = (() => {
    switch (variant) {
      case "default":
        return "bg-gray-400 text-black";
      case "primary":
        return "bg-blue-600 text-white";
      case "success":
        return "bg-green-500 text-white";
      case "warning":
        return "bg-yellow-500 text-white";
      case "danger":
        return "bg-red-500 text-white";
    }
  })();
  return (
    <div
      {...props}
      className="w-full overflow-hidden bg-gray-200 rounded-lg h-4"
    >
      <motion.div
        className={`h-full ${color}`}
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 1 }}
      />
    </div>
  );
});
