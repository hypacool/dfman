import typo from "@tailwindcss/typography"

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts,svx}'],
  theme: {
    extend: {},
  },
  plugins: [typo()],
}

