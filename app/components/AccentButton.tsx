import { ReactNode } from "react";

interface Props {
  isSubmitting?: boolean;
  children: ReactNode;
}
const AccentButton = ({ isSubmitting, children }: Props) => {
  return (
    <button
      disabled={isSubmitting}
      className={`
      flex
          py-2
          px-5
          bg-accent
          text-neutral 
          text-sm 
          font-medium 
          rounded-lg
          ${isSubmitting && 'bg-opacity-75'}`}
    >
      {children}
    </button>
  );
};

export default AccentButton;