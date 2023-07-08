/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "aqua",

          "secondary": "#A4CBB4",

          "accent": "#EBDC99",

          "neutral": "#4c1d95",

          "base-100": "#e5e7eb",

          "info": "#2563EB",

          "success": "#16A34A",

          "warning": "#D97706",

          "error": "#DC2626",

          "--rounded-btn": "0.3rem",
          "--btn-text-case": "normalcase",
        },
      },
    ],
    extend: {
      backdropBlur: {
        xs: '3px',
      }
    }
  },
  plugins: [require("daisyui")],
}

