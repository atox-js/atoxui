"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = React.HTMLProps<HTMLDivElement> & {
  isOpen: boolean;
  onClose: () => void;
  position?: "center" | "top" | "bottom" | "left" | "right";
};

export default React.memo<Props>(
  ({ isOpen, onClose, children, position = "center", ...props }) => {
    const getPositionClasses = () => {
      switch (position) {
        case "top":
          return "items-start justify-center";
        case "bottom":
          return "items-end justify-center";
        case "left":
          return "items-center justify-start";
        case "right":
          return "items-center justify-end";
        default:
          return "items-center justify-center";
      }
    };

    return (
      <AnimatePresence>
        {isOpen && (
          <div
            {...props}
            className={`fixed inset-0 z-50 flex ${getPositionClasses()}`}
          >
            <motion.div
              className="fixed inset-0 bg-black opacity-50"
              onClick={onClose}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="bg-white rounded-lg overflow-hidden shadow-lg z-50"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
            >
              {children}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    );
  }
);
