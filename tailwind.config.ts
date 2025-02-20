import type { Config } from "tailwindcss";
const colors = require('tailwindcss/colors')

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    './node_modules/preline/preline.js',

  ],
  theme: {
    extend: {
      maxWidth: {
        '8xl': '1320px',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        light: {
          DEFAULT: colors.slate[50],
        },
        dark: {
          DEFAULT: colors.slate[900],
          ...colors.slate
        },
        'dark-2': {
          DEFAULT: colors.slate[900],
          ...colors.slate
        },
        primary: {
          DEFAULT: "#23ffb6",
          '50': '#edfff8',
          '100': '#d5fff2',
          '200': '#aeffe5',
          '300': '#6fffd2',
          '400': '#23ffb6',
          '500': '#00e99b',
          '600': '#00c27d',
          '700': '#009865',
          '800': '#047753',
          '900': '#066146',
          '950': '#003725',
        }
      },
    },

  },
  plugins: [
    require('preline/plugin'),
  ],
} satisfies Config;
