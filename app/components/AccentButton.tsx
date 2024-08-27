import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const AccentButton = ({ children }: Props) => {
  return (
    <button
      className="
          py-2.5
          px-5
          bg-accent
          text-neutral 
          text-sm 
          rounded-lg
          hover:font-medium"
    >
      {children}
    </button>
  );
};

export default AccentButton;
