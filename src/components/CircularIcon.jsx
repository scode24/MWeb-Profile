import React from "react";

const CircularIcon = (props) => {
  const { icon } = props.data;
  return (
    <div className="rounded-full p-3 border border-gray-300 w-fit hover:border-2 hover:border-indigo-700">
      {icon}
    </div>
  );
};

export default CircularIcon;
