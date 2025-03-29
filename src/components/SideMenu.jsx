import { BoxesIcon, CodeXml, Contact, PersonStanding } from "lucide-react";
import { motion } from "motion/react";
import React from "react";
import { useTooltipStore } from "../stores/TooltipStore";
import CircularIcon from "./CircularIcon";
import CircularImageIcon from "./CircularImageIcon";

export const menuItemsData = [
  {
    icon: BoxesIcon,
    text: "Tech I know",
    isTextVisible: false,
    onClickFn: () => alert("skill"),
    key: "skills",
  },
  {
    icon: CodeXml,
    text: "What Can I Do",
    isTextVisible: false,
    onClickFn: () => alert("project"),
    key: "projects",
  },
  {
    icon: PersonStanding,
    text: "Experiences",
    isTextVisible: false,
    onClickFn: () => alert("experience"),
    key: "experiences",
  },
  {
    icon: Contact,
    text: "Contact",
    isTextVisible: false,
    onClickFn: () => alert("contact"),
    key: "contact",
  },
];

const MenuItem = (props) => {
  const { icon, imageUrl, text, isTextVisible, onClickFn } = props.data;

  const { setTooltipMessage } = useTooltipStore();
  return (
    <div
      className="mx-2 cursor-pointer md:my-3"
      onClick={() => onClickFn()}
      onMouseEnter={() => setTooltipMessage(text)}
      onMouseLeave={() => setTooltipMessage(undefined)}
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="flex flex-row justify-center"
      >
        {imageUrl && (
          <CircularImageIcon
            data={{
              imageUrl: imageUrl,
            }}
          />
        )}

        {icon && (
          <CircularIcon
            data={{
              icon: icon,
            }}
          />
        )}
      </motion.div>
      {isTextVisible && (
        <div className="flex-row justify-center text-center mt-2 mx-2 hidden md:flex">
          {text}
        </div>
      )}
    </div>
  );
};

const SideMenu = () => {
  return (
    <div className="flex flex-row justify-center w-fit mx-auto lg:flex-col">
      <MenuItem
        data={{
          imageUrl:
            "https://avatars.githubusercontent.com/u/28835376?s=400&u=9aa9a81e58a99ddf7f63dbc8fb0cc616a6260f7b&v=4",
          text: "Tech I know",
          isTextVisible: false,
          onClickFn: () => alert(`code`),
        }}
      />

      {menuItemsData.map((item) => (
        <MenuItem
          key={item.key}
          data={{
            icon: <item.icon className="size-5 lg:size-7" strokeWidth={1} />,
            text: item.text,
            isTextVisible: false,
            onClickFn: item.onClickFn,
          }}
        />
      ))}
    </div>
  );
};

export default SideMenu;
