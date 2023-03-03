import React from "react";

export interface InputProps {
  type: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <div>
      <input ref={ref} />
    </div>
  );
});

export default Input;
