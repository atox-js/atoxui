import { Meta, StoryObj } from "@storybook/react";
import Button from ".";

const meta: Meta<typeof Button> = {
  title: "components/Button",
  component: Button,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render() {
    return (
      <div className="flex flex-col gap-2">
        {["default", "primary", "success", "warning", "danger"].map(
          (variant) => (
            <div className="flex gap-1 justify-center">
              <Button variant={variant as any} key={variant} iconOnly>
                😁
              </Button>
              <Button variant={variant as any} key={variant}>
                {variant}
              </Button>
            </div>
          )
        )}
      </div>
    );
  },
};
