import React from "react";

const CircularIcon = (props) => {
  const { icon } = props.data;
  return (
    <div className="flex flex-col justify-around items-center rounded-full border border-gray-300 w-[35px] h-[35px] hover:border-2 hover:border-indigo-700 lg:w-[70px] lg:h-[70px]">
      {icon}
    </div>
  );
};

export default CircularIcon;
