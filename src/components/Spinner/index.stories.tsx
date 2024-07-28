import { Meta, StoryObj } from "@storybook/react";
import Spinner from ".";

const meta: Meta<typeof Spinner> = {
  title: "components/Spinner",
  component: Spinner,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof meta>;

const Template = ({
  size,
  variant,
}: {
  size?: number;
  variant?: "default" | "primary" | "success" | "warning" | "danger";
}) => {
  return (
    <div className="space-y-2 mx-auto w-fit">
      <Spinner size={size} variant={variant} />
    </div>
  );
};

export const Default: Story = {
  render: () => <Template size={50} variant="default" />,
};

export const Primary: Story = {
  render: () => <Template size={50} variant="primary" />,
};

export const Success: Story = {
  render: () => <Template size={50} variant="success" />,
};

export const Warning: Story = {
  render: () => <Template size={50} variant="warning" />,
};

export const Danger: Story = {
  render: () => <Template size={50} variant="danger" />,
};