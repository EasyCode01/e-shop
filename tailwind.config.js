/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        dark: "#000",
        gray: "#f5f5f5",
        orange: "#ffad33",
        red: "#db4444",
        lemon: "#00ff66",
        "deep-gray": "#7d8184",
        "light-red": "#e07575",
        "hover-button": "#A0bcE0",
        "light-cyan": "#CBE4E8",
        "medium-gray": "#d4d4d6",
      },
      boxShadow: {
        "3xl": "-10px -8px 15px rgba(0, 0, 0, 0.2)",
      },
      lineHeight: {
        12: "3rem",
        14: "3.5rem",
        16: "4rem",
      },
    },
  },
  plugins: [],
};
