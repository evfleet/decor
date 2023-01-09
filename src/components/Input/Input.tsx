import React from "react";

export interface InputProps {
  type: string;
}

const Input = ({ type = "text" }: InputProps) => {
  return <input type={type} />;
};

export default Input;
