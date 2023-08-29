import { FormEvent } from "react";
import style from "./Input.module.css";

type InputType = "text";

interface InputProps {
  type: InputType;
  value: string;
  placeholder?: string;
  onInput: (value: string) => void;
  className: string;
}

function Input(props: InputProps) {
  function onInput(e: FormEvent<HTMLInputElement>) {
    props.onInput(e.currentTarget.value);
  }

  return (
    <input
      className={`${props.className} ${style.input}`}
      type={props.type}
      value={props.value}
      placeholder={props.placeholder}
      onInput={onInput}
    />
  );
}

export default Input;
