import { HTMLMotionProps, motion } from "framer-motion";
import React from "react";

type Props = HTMLMotionProps<"button"> & {
  children?: React.ReactNode;
  variant?: "default" | "primary" | "success" | "warning" | "danger";
  rounded?: "sm" | "md" | "lg" | "full";
  iconOnly?: boolean;
};

export const Button = React.memo<Props>(function Button(props) {
  const {
    children,
    variant = "default",
    rounded = "lg",
    iconOnly,
    className,
    ...HtmlProps
  } = props;
  const color = (() => {
    switch (variant) {
      case "default":
        return "bg-gray-200 text-black";
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
    <motion.button
      transition={{ bounce: 0 }}
      whileHover={{ scale: 0.95, opacity: 0.8 }}
      whileTap={{ scale: 0.9 }}
      className={[
        color,
        `w-fit`,
        `min-h-8`,
        `text-sm`,
        rounded === "sm"
          ? "rounded-sm"
          : rounded === "md"
            ? "rounded-md"
            : rounded === "lg"
              ? "rounded-lg"
              : "rounded-full",
        `${iconOnly ? "px-3 py-2" : "px-4 py-2"}`,
        className,
      ].join(" ")}
      {...HtmlProps}
    >
      {children}
    </motion.button>
  );
});
