import React, { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <div>
      <input ref={ref} {...props} />
    </div>
  );
});

export default Input;
