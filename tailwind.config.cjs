/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx"
  ],
  theme: {
    fontSize: {
      sx: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32,
    },
    colors: {
      "gray-900": "#121214",
      "gray-800": "#202024",
      "gray-400": "#7c7c8a",
      "gray-200": "#c4c4cc",
      "gray-100": "#e1e1e6",
      "gray-50": "#d9d9d9",

      "red-500": "#9d1c14",
      "red-600": "#811b15",

      "black": "#09090a"
    },
    extend: {
      fontFamily: {
        sans: "Inter, sans-serif"
      }
    },
  },
  plugins: [],
}
