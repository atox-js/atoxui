"use client";
import { HTMLMotionProps, motion } from "framer-motion";
import React, { useState } from "react";

type Props = HTMLMotionProps<"button"> & {
  children?: React.ReactNode;
  variant?: "default" | "primary" | "success" | "warning" | "danger";
  rounded?: "sm" | "md" | "lg" | "full";
  iconOnly?: boolean;
};

export default React.memo<Props>(function Button(props) {
  const {
    children,
    variant = "default",
    rounded = "lg",
    iconOnly,
    className,
    disabled,
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

  const [ripples, setRipples] = useState<
    { x: number; y: number; size: number; id: number }[]
  >([]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    const id = Date.now();
    setRipples([...ripples, { x, y, size, id }]);
    setTimeout(() => {
      setRipples((ripples) => ripples.filter((ripple) => ripple.id !== id));
    }, 1600);
  };

  return (
    <motion.button
      animate={{ opacity: disabled ? 0.5 : 1 }}
      transition={{ bounce: 0 }}
      whileHover={{ ...(disabled ? undefined : { scale: 0.95, opacity: 0.8 }) }}
      whileTap={{ ...(disabled ? undefined : { scale: 0.95 }) }}
      className={[
        color,
        "relative overflow-hidden",
        `w-fit flex items-center justify-center text-center`,
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
      disabled={disabled}
      onClick={handleClick}
      {...HtmlProps}
    >
      {children}
      {ripples.map((ripple) => (
        <motion.span
          key={ripple.id}
          className="absolute rounded-full bg-white opacity-25 pointer-events-none"
          style={{
            width: ripple.size,
            height: ripple.size,
            left: ripple.x,
            top: ripple.y,
            transform: "scale(0)",
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 4, opacity: 0 }}
          transition={{ duration: 1.5 }}
        />
      ))}
    </motion.button>
  );
});