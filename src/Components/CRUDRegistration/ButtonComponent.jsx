import React from "react";

function ButtonComponent({
  btnName = "",
  variant = "primary",
  onclick = () => {},
  style = " btn p-3 m-2 round-25 text-light hover: ",
}) {
  return (
    <div>
      <button
        className={`'p-3 m-2 round-25' bg-${variant} ${style}`}
        onClick={onclick}
      >
        {btnName}
      </button>
    </div>
  );
}

export default ButtonComponent;
