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
        destructive: "bg-accent text-base-light px-5 py-3 hover:bg-accent-dark",
        edit: "justify-center bg-primary/5 px-3 py-1 min-w-20 text-base hover:bg-secondary/20",
        editdestructive: "justify-center bg-accent/30 px-3 py-1 min-w-20 text-base hover:bg-accent hover:text-base-light"
      },
    },
    defaultVariants: {
      intent: "primary",
    },
  }
);

type ButtonProps = {
  intent?: "primary" | "secondary" | "destructive" | "edit" | "editdestructive";
  text?: string;
  onClick?: () => void;
};

function Button({ intent, children, onClick }: React.PropsWithChildren<ButtonProps>) {
  return (
    <button onClick={onClick} className={buttonStyles({ intent })}>
      {children}
    </button>
  );
}

export { Button };
export type { ButtonProps };

