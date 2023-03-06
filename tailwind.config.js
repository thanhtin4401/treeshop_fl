/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  corePlugins: {
    preflight: false,
  },
  theme: {
    colors: {
      success: "#40916c",
      danger: "#e35d6a",
      warning: "#ffc53d",
      primary: "#1677ff",
    },
    extend: {},
  },
  plugins: [],
};
