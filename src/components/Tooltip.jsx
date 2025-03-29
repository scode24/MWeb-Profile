import React from "react";

const Tooltip = (props) => {
  const { message } = props.data;
  return (
    message !== undefined && (
      <div className="rounded-xl p-2 text-white w-fit bg-black border border-gray-700">
        {message}
      </div>
    )
  );
};

export default Tooltip;
