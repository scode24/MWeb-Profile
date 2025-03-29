import { useEffect } from "react";
import SideMenu from "./components/SideMenu";
import Tooltip from "./components/Tooltip";
import { useTooltipStore } from "./stores/TooltipStore";

const App = () => {
  const { tooltipMessage } = useTooltipStore();

  const initTooltipPosition = () => {
    const tooltip = document.querySelector(".absolute");

    const updateTooltipPosition = (event) => {
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      tooltip.style.left = `${mouseX + 10}px`;
      tooltip.style.top = `${mouseY + 10}px`;
    };

    document.addEventListener("mousemove", updateTooltipPosition);
  };

  useEffect(() => {
    initTooltipPosition();
  }, []);

  return (
    <div className="flex flex-col-reverse text-xs w-full h-[100vh] sm:text-sm lg:flex-row">
      <div className="absolute z-10 top-0 right-0">
        <Tooltip
          data={{
            message: tooltipMessage,
          }}
        />
      </div>
      <div className="flex flex-row justify-center p-3 w-full lg:flex-col lg:w-[10%]">
        <SideMenu />
      </div>
      <div className="flex-grow bg-yellow-200">coder</div>
    </div>
  );
};

export default App;
