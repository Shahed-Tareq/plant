/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    screens: {
      xxs: "100px",
      xs: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "2.5xl": "1680px",
    },
    container: {
      center: true,
      screens: {
        xl: "1280px",
      },
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '3rem',
        '2xl': '6rem',
      },
    },
    extend: {
      fontSize: { "2xs": "10px" },
      spacing: {
        "main-screen": "calc(100vh - 60px)",
        "dashboard-screen": "calc(100vh - 30px)",
        "dashboard-home": "calc(100vh - 75px)",
        "pb-states-status-box": "calc(100vh - 112px)",
        "invest-screen": "calc(100vh - 118px)",
        header: "60px",
        "header-content": "52px",
        "max-container": "1280px",
      },
      colors: {
        primary: "#709dff",
        darkGray: "#18181B",
        main: {
          100: "#ec66a2",
          200: "#e95d8b",
        },
        sky: {
          50: "#EFF4FF",
          100: "#e2ebff",
          200: "#C6D7FF",
          300: "#A9C4FF",
          400: "#8DB0FF",
          500: "#709DFF",
          600: "#507BCC",
          700: "#3C5C99",
          800: "#283E66",
          900: "#141F33",
          1000: "#1B44C9", 
        },
        zinc: {
          50: "#fafafa",
          100: "#f4f4f5",
          200: "#e4e4e7",
          300: "#d4d4d8",
          400: "#a1a1aa",
          500: "#71717a",
          600: "#52525b",
          700: "#3f3f46",
          800: "#27272a",
          900: "#18181b",
        },
        error: "#fa4d0a",
        "error-background": "#ffe7d1",
        blue: "#449cd7",
        green: "#77b163",
        orange: "#fd8900",
        red: "#e54242",
        blacklight: "#1d1d1d",
        labelBlue: "#23527c",
        inputBg: "#f2f4f5",
        inputTextColor: "#8c8d8f",
        white: "#FFFFFF",
        black: "#000000",
      },
      gridTemplateColumns: {
        18: "repeat(18, minmax(0, 1fr))",
        17: "repeat(17, minmax(0, 1fr))",
        "5-auto": "repeat(5, auto)",
      },
      gridColumn: {
        "span-14": "span 14 / span 14",
        "span-17": "span 17 / span 17",
        "span-18": "span 18 / span 18",
      },
      keyframes: {
        visible: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },

        "zoom-out": {
          "0%": {
            transform: "scale(0.5)",
          },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        visible: "visible 3s linear",
        "zoom-out": "zoom-out 0.5s linear",
      },
      transitionDelay: {
        1000: "1000ms",
        2000: "2000ms",
        3000: "3000ms",
        4000: "4000ms",
      },
    },
  },
  plugins: [],
};
