import { Meta, StoryObj } from "@storybook/react";
import Button from "../Button";
import useToast from ".";
import ToastContainer from "./ToastContainer";

const meta: Meta<typeof useToast> = {
  title: "components/Toast",
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render() {
    const { toasts, addToast, removeToast } = useToast();
    return (
      <div className="flex flex-col gap-2">
        <ToastContainer toasts={toasts} removeToast={removeToast} />
        <Button variant="primary" onClick={() => addToast("Hello, World", "info")}>Info</Button>
        <Button variant="success" onClick={() => addToast("Success", "success")}>Success</Button>
        <Button variant="danger" onClick={() => addToast("Error", "error")}>Error</Button>
        <Button variant="warning" onClick={() => addToast("Warning", "warning")}>Warning</Button>
      </div>
    );
  },
};
