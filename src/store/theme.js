import { create } from "zustand";

export const useThemeStore = create((set) => ({
  dark: false,
  toggleTheme: () => set((state) => ({ dark: !state.dark })),
}));
