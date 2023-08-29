import { ReactNode } from "react";
import style from "./Button.module.css";

type ButtonType = "submit" | "reset";

interface ButtonProps {
  children: ReactNode;
  type?: ButtonType;
  className?: string;
}

function Button(props: ButtonProps) {
  return (
    <button className={`${style.button} ${props.className}`}>
      {props.children}
    </button>
  );
}

export default Button;
