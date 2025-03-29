import { BoxesIcon, PersonStanding } from "lucide-react";

const getIcon = (iconName) => {
  switch (iconName) {
    case "skill":
      return <BoxesIcon strokeWidth={1} />;
    case "experinces":
      return <PersonStanding strokeWidth={1} />;
    default:
      return null;
  }
};

export { getIcon };
