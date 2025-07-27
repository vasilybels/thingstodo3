import * as React from "react";
import { cva } from "class-variance-authority";
import "../app/globals.css";

const buttonStyles = cva(
  "flex justify-between items-center px-5 py-3 font-semibold transition-colors duration-200",
  {
    variants: {
      intent: {
        primary: "bg-primary-dark text-base-light hover:bg-muted-dark hover:text-base-light",
        secondary: "bg-muted border-2 text-base border-base hover:bg-secondary",
        destructive: "bg-accent text-foreground hover:bg-accent-dark",
      },
    },
    defaultVariants: {
      intent: "primary",
    },
  }
);

type ButtonProps = {
  intent?: "primary" | "secondary" | "destructive";
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
