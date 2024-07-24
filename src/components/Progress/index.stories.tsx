import { Meta, StoryObj } from "@storybook/react";
import Progress from ".";
import { Button } from "../Button";
import { useState } from "react";

const meta: Meta<typeof Progress> = {
  title: "components/Progress",
  component: Progress,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render() {
    return (
      <div className="space-y-2">
        {["default", "primary", "success", "warning", "danger"].map(
          (variant) => {
            const [progress, setProgress] = useState(0);
            async function handleClick() {
              setProgress(() => 0);
              for (
                setProgress(() => 0);
                progress < 100;
                setProgress((n) => n + 5)
              ) {
                await new Promise((resolve) => setTimeout(resolve, 100));
              }
            }
            return (
              <div className="flex gap-1 items-center">
                <Button variant={variant as any} onClick={handleClick}>
                  Start
                </Button>
                <Progress
                  variant={variant as any}
                  key={variant}
                  progress={progress}
                />
              </div>
            );
          }
        )}
      </div>
    );
  },
};
