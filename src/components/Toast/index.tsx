import { useState } from "react";
import { ToastProps, ToastStatus } from "./toast.type";

const useToast = () => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const addToast = (
    message: string,
    status: ToastStatus,
    closable?: boolean,
    duration: number = 3000
  ) => {
    const id = Date.now().toString();
    setToasts((prevToasts) => [
      ...prevToasts,
      { id, message, status, closable, duration },
    ]);
    setTimeout(() => removeToast(id), duration);
  };

  const removeToast = (id: string) => {
    setToasts((prevToasts) => prevToasts.filter((v) => v.id !== id));
  };

  return { toasts, addToast, removeToast };
};

export default useToast;
