/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '375px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      title: ["Poppins", "sans-serif"]
    },
    colors: {
      white: {
        400: "#fff"
      },
      black: {
        400: "#00000033"
      },
      fullBlack: {
        400: "#000"
      },
      gray: {
        50: "#F9FAFB",
        100: "#F3F4F6",
        300: "#D1D5DB",
        400: "#9CA3AF",
        500: "#A9A6A1",
        600: "#4B5563",
        700: "#374151",
        800: "#1F2937"
      },
      indigo: {
        100: "#E0E7FF",
        600: "#4F46E5"
      },
      blue: {
        500: "#3B82F6",
        600: "#2563EB"
      },
      red: {
        500: "#EF4444",
        600: "#DC2626"
      },
      lightGray: {
        400: "#E5E7EB"
      },
      green: {
        50: "#F0FDF4",
        100: "#DCFCE7",
        200: "#BBF7D0",
        300: "#86EFAC",
        400: "#22C55E",
        600: "#16A34A"
      },
      grayForCards: "#F2F4F7",
      grayForFooter: "#F9FAFB",
      grayForHeadersLink: "#E8E9EB",
      grayForPageHeading: "#374151",
      grayForFooterLinks: "#6B728F",
      greenForBuyNow: "#84CC16",
      greenForPlus: "#47B624"
    },

  },
  plugins: [],
}