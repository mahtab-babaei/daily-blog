import { Text } from "@radix-ui/themes";
import { PropsWithChildren } from "react";

const ErrorMessage = ({ children }: PropsWithChildren) => {
  if (!children) return null;
  return (
    <Text size="1" className="text-accent">
      {children}
    </Text>
  );
};

export default ErrorMessage;
