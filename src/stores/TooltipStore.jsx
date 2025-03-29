import { create } from "zustand";

const useTooltipStore = create((set) => ({
  tooltipMessage: undefined,
  setTooltipMessage: (message) => set((state) => ({ tooltipMessage: message })),
}));

export { useTooltipStore };
