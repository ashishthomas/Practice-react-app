import React, { useRef } from "react";

function InputFocus() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
    console.log(inputRef);
  };
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={focusInput}>Click to focus</button>
    </div>
  );
}

export default InputFocus;
