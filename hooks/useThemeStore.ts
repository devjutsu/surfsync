import { create } from 'zustand';

interface ThemeState {
  darkMode: boolean;
  toggleDarkMode: () => void;
  setDarkMode: (value: boolean) => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  darkMode: true,
  toggleDarkMode: () =>
    set((state) => {
      const newValue = !state.darkMode;
      document.documentElement.setAttribute('data-theme', newValue ? 'surftrack' : 'light');
      localStorage.setItem('darkMode', JSON.stringify(newValue));
      return { darkMode: newValue };
    }),
  setDarkMode: (value: boolean) => {
    document.documentElement.setAttribute('data-theme', value ? 'surftrack' : 'light');
    localStorage.setItem('darkMode', JSON.stringify(value));
    set({ darkMode: value });
  },
}));
