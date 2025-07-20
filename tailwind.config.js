import { green, slate } from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: green[500], // For `bg-primary`, `text-primary`, etc.
          ...green, // For `bg-primary-50`, etc.
        },
        secondary: {
          DEFAULT: slate[500],
          ...slate,
        },
      },
    },
  },
  plugins: [],
};
