import * as React from "react";
import { cva } from "class-variance-authority";
import "../app/globals.css";

const buttonStyles = cva(
  "flex justify-between items-center font-semibold rounded-md transition-colors duration-200",
  {
    variants: {
      intent: {
        primary: "bg-primary-dark text-base-light px-5 py-3 hover:bg-muted-dark hover:text-base-light",
        secondary: "bg-primary/5 px-3 py-3 text-base hover:bg-secondary/20",
        destructive: "bg-accent text-white px-5 py-3 hover:bg-accent-dark",
        edit: "justify-center bg-primary/5 px-3 py-1 min-w-20 text-base hover:bg-secondary/20",
      },
    },
    defaultVariants: {
      intent: "primary",
    },
  }
);

type ButtonProps = {
  intent?: "primary" | "secondary" | "destructive" | "edit";
  text?: string;
  onClick?: () => void;
};

export default function Button({ intent, children, onClick }: React.PropsWithChildren<ButtonProps>) {
  return (
    <button onClick={onClick} className={buttonStyles({ intent })}>
      {children}
    </button>
  );
}
