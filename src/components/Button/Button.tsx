import React from "react";

export interface ButtonProps {
  text: string;
}

const Button = (props: ButtonProps) => {
  return <button className="text-orange-500">{props.text}</button>;
};

export default Button;
