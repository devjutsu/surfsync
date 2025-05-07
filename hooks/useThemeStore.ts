import { create } from 'zustand';

interface ThemeState {
  darkMode: boolean;
  toggleDarkMode: () => void;
  setDarkMode: (value: boolean) => void;
  rolling: boolean;
  toggleRolling: () => void;
  setRolling: (value: boolean) => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  darkMode: false,
  toggleDarkMode: () =>
    set((state) => {
      const newValue = !state.darkMode;
      document.documentElement.setAttribute(
        'data-theme',
        newValue ? 'surftrack' : 'light'
      );
      localStorage.setItem('darkMode', JSON.stringify(newValue));
      return { darkMode: newValue };
    }),
  setDarkMode: (value: boolean) => {
    document.documentElement.setAttribute(
      'data-theme',
      value ? 'surftrack' : 'light'
    );
    localStorage.setItem('darkMode', JSON.stringify(value));
    set({ darkMode: value });
  },

  rolling: false,
  toggleRolling: () =>
    set((state) => {
      const newValue = !state.rolling;
      document.documentElement.setAttribute('rolling', String(newValue));
      localStorage.setItem('rolling', JSON.stringify(newValue));
      return { rolling: newValue };
    }),
  setRolling: (value: boolean) => {
    document.documentElement.setAttribute('rolling', value ? 'true' : 'false');
    localStorage.setItem('rolling', JSON.stringify(value));
    set({ rolling: value });
  },
}));
