"use client";
import React from "react";

type Props = React.HTMLProps<HTMLDivElement>;

export default React.memo<Props>(({ children, ...props }) => {
  return (
    <div {...props} className="py-2 px-4 border-b">
      {children}
    </div>
  );
});
