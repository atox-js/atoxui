import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Switch from ".";

const meta: Meta<typeof Switch> = {
  title: "components/Switch",
  component: Switch,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof meta>;

const Template = ({
  variant,
}: {
  variant?: "default" | "primary" | "success" | "warning" | "danger";
}) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div className="space-y-2 mx-auto w-fit">
      <Switch checked={isChecked} onChange={handleChange} variant={variant} />
    </div>
  );
};

export const Default: Story = {
  render: () => <Template />,
};

export const Primary: Story = {
  render: () => <Template variant="primary" />,
};

export const Success: Story = {
  render: () => <Template variant="success" />,
};

export const Warning: Story = {
  render: () => <Template variant="warning" />,
};

export const Danger: Story = {
  render: () => <Template variant="danger" />,
};
