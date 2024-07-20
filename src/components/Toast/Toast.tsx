import { motion } from "framer-motion";
import React from "react";
import ErrorIcon from "./icons/error.svg";
import InfoIcon from "./icons/info.svg";
import SuccessIcon from "./icons/success.svg";
import WarningIcon from "./icons/warning.svg";
import { ToastStatus } from "./toast.type";

interface ToastProps {
  message: string;
  status: ToastStatus;
  closable?: boolean;
  onClose: () => void;
}

const statusStyles: Record<ToastStatus, string> = {
  info: "bg-blue-500",
  success: "bg-green-500",
  error: "bg-red-500",
  warning: "bg-yellow-500",
};

const statusIcons: Record<ToastStatus, React.ReactNode> = {
  info: <img src={InfoIcon} alt="Info" className="w-6 h-6 mr-2" />,
  success: <img src={SuccessIcon} alt="Success" className="w-5 h-5 mr-2" />,
  error: <img src={ErrorIcon} alt="Error" className="w-5 h-5 mr-2" />,
  warning: <img src={WarningIcon} alt="Warning" className="w-6 h-6 mr-2" />,
};

const Toast: React.FC<ToastProps> = ({
  message,
  onClose,
  status,
  closable = true,
}) => {
  return (
    <motion.div
      className={`max-w-full text-center items-center min-w-32 ${statusStyles[status]} text-white p-4 flex rounded-lg shadow-lg`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {statusIcons[status]}
      {message}
      {closable && (
        <button
          onClick={onClose}
          className="ml-auto pl-4 text-white hover:text-gray-200"
        >
          &times;
        </button>
      )}
    </motion.div>
  );
};

export default Toast;
