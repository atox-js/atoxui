"use client";
import React from "react";
import user from "./icons/user.svg";

type Props = React.HTMLProps<HTMLImageElement> & {
  rounded?: "sm" | "md" | "lg" | "full";
  showFallback?: boolean;
  border?: "none" | "sm" | "md" | "lg";
};

export default React.memo<Props>(function (_props) {
  var {
    width,
    height,
    rounded = "full",
    border = "none",
    showFallback,
    ...props
  } = _props;

  const rounded_class =
    rounded === "sm"
      ? "rounded-sm"
      : rounded === "md"
        ? "rounded-md"
        : rounded === "lg"
          ? "rounded-lg"
          : "rounded-full";
  const border_class =
    border === "sm"
      ? "border-2 border-gray-300"
      : border === "md"
        ? "border-2 border-gray-400"
        : border === "lg"
          ? "border-2 border-gray-500"
          : "";

  if (showFallback && !props.src) props.src = user;
  if (!width) width = 40;
  if (!height) height = 40;

  return (
    <span
      className={`w-fit h-fit ${rounded_class} ${border_class} overflow-hidden`}
    >
      <img
        width={width}
        height={height}
        onLoad={(e) => (e.currentTarget.style.opacity = "1")}
        onError={
          showFallback
            ? (e) => (e.currentTarget.src = user)
            : (e) => (e.currentTarget.style.opacity = "0")
        }
        {...props}
      />
    </span>
  );
});
