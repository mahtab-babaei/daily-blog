import { InfoCircledIcon } from "@radix-ui/react-icons";
import { Callout } from "@radix-ui/themes";
import { PropsWithChildren } from "react";

const ErrorCallout = ({ children }: PropsWithChildren) => {
  if (!children) return null;
  return (
    <Callout.Root
      variant="outline"
      size="1"
      color="ruby"
      className="text-accent"
    >
      <Callout.Icon>
        <InfoCircledIcon />
      </Callout.Icon>
      <Callout.Text size="1">{children}</Callout.Text>
    </Callout.Root>
  );
};

export default ErrorCallout;
