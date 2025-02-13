import { FC } from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({ className, children, ...props }) => {
  return (
    <button
      className={`px-4 py-2 rounded-md text-sm font-medium transition-all focus:outline-none ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
