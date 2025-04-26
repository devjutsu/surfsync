import { type Config } from 'tailwindcss';
import daisyui from 'daisyui';

const config: Config & { daisyui?: unknown } = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {},
    },
  },
  plugins: [daisyui],
};

export default config;
