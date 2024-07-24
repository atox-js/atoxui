import { Meta, StoryObj } from "@storybook/react";
import { Avatar } from ".";

const meta: Meta<typeof Avatar> = {
  title: "components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render() {
    return (
      <div className="flex gap-2">
        <Avatar src="https://atox.vercel.app/atox.png" />
        <Avatar showFallback />
        <Avatar src="https://atox.vercel.app/atox.png" border="sm" />
        <Avatar showFallback border="sm" />
      </div>
    );
  },
};
