import { Meta, StoryObj } from "@storybook/react";
import Input from ".";
import { Button } from "../Button";

const meta: Meta<typeof Input> = {
  title: "components/Input",
  component: Input,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render() {
    return (
      <div className="space-y-2 mx-auto w-fit">
        <Input label="username" variant="primary" />
        <Input label="password" type="password" />
        <Button className="w-full" variant="primary">
          Sign in
        </Button>
      </div>
    );
  },
};
