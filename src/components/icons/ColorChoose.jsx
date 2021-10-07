import React from "react";
const ColorChoose = (props) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={props.onClick}
    >
      <circle
        cx="10"
        cy="10"
        r="9"
        fill={props.color}
      />
    </svg>
  );
};

export default ColorChoose;
