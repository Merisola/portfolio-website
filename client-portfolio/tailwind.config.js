/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        alchemy: {
          dark: "#0f172a",
          gold: "#fbbf24",
          cyan: "#22d3ee",
          surface: "#1e293b",
        },
      },
    },
  },
  plugins: [],
};
