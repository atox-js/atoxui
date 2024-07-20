import { AnimatePresence } from "framer-motion";
import React from "react";
import Toast from "./Toast";
import { ToastProps } from "./toast.type";

interface ToastContainerProps {
  toasts: ToastProps[];
  removeToast: (index: string) => void;
}

const ToastContainer: React.FC<ToastContainerProps> = ({
  toasts,
  removeToast,
}) => {
  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 space-y-2">
      <AnimatePresence>
        {toasts.map((toast, index) => (
          <Toast
            key={index}
            status={toast.status}
            message={toast.message}
            closable={toast.closable}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ToastContainer;
