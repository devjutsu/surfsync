// tailwind.config.js
import { type Config } from 'tailwindcss'
import daisyui from 'daisyui'

const config: Config & { daisyui?: unknown } = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        prussian: '#0A3B59',
        cornflower: '#0F8DBF',
        fluorescent: '#1DDDF2',
        oriole: '#F2490C',
        barnred: '#730C02'
      }
    }
  },
  plugins: [daisyui]
}

export default config
