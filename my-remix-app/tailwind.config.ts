import type { Config } from 'tailwindcss'
import { addIconSelectors } from '@iconify/tailwind'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {},
  },
  plugins: [
    addIconSelectors(['mdi', 'material-symbols', 'ph', 'ion', 'solar']),
  ],
} satisfies Config
