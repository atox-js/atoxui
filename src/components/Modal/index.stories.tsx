import { Meta, StoryObj } from "@storybook/react";
import Modal from "./Modal";
import Button from "../Button";
import { useState } from "react";
import ModalHeader from "./ModalHeader";
import ModalBody from "./ModalBody";
import ModalFooter from "./ModalFooter";

const meta: Meta<typeof Modal> = {
  title: "components/Modal",
  component: Modal,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof meta>;

const ModalTemplate = (position: "center" | "top" | "bottom" | "left" | "right") => {
  return () => {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
      <div className="space-y-2 mx-auto w-fit">
        <Button onClick={openModal}>Open Modal</Button>
        <Modal isOpen={isOpen} onClose={closeModal} position={position}>
          <ModalHeader>
            <h2 className="text-md font-semibold">Modal Title</h2>
          </ModalHeader>
          <ModalBody>
            <p>This is the modal body content.</p>
          </ModalBody>
          <ModalFooter>
            <Button onClick={closeModal}>Close</Button>
            <Button variant="success" onClick={closeModal}>Ok</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  };
};

export const Default: Story = {
  render: ModalTemplate("center"),
};

export const Top: Story = {
  render: ModalTemplate("top"),
};

export const Bottom: Story = {
  render: ModalTemplate("bottom"),
};

export const Left: Story = {
  render: ModalTemplate("left"),
};

export const Right: Story = {
  render: ModalTemplate("right"),
};