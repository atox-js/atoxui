export type ToastStatus = "info" | "success" | "error" | "warning";

export interface ToastProps {
  id: string;
  message: string;
  status: ToastStatus;
  closable?: boolean;
  duration: number;
}
