import { BoxesIcon } from "lucide-react";
import { motion } from "motion/react";
import React from "react";
import CircularIcon from "./CircularIcon";

const MenuItem = (props) => {
  const { icon, text, onClickFn } = props.data;
  return (
    <div className="mx-2 cursor-pointer md:my-3" onClick={() => onClickFn()}>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="flex flex-row justify-center"
      >
        <CircularIcon
          data={{
            icon: icon,
          }}
        />
      </motion.div>
      <div className="flex-row justify-center text-center mt-2 mx-2 hidden md:flex">
        {text}
      </div>
    </div>
  );
};

const SideMenu = () => {
  return (
    <div className="flex flex-row w-full lg:flex-col">
      <MenuItem
        data={{
          icon: <BoxesIcon strokeWidth={1} />,
          text: "Tech I know",
          onClickFn: () => alert(`skill`),
        }}
      />

      <MenuItem
        data={{
          icon: <BoxesIcon strokeWidth={1} />,
          text: "What Can I Do",
          onClickFn: () => alert(`project`),
        }}
      />
    </div>
  );
};

export default SideMenu;
