/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        // zoom animation infinity
        zoom2: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.2)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        zoom2: "zoom2 1s linear infinite",
      },
      colors: {
        primary: "#1074a5",
        fbColor: "#4267b2",
        orange0e: "#f5810e",
        secondary: "#cf3434",
        youtubeColor: "#c4302b",
        dark: "#333",
        heading: "#505F76",
        arrow: "#c5c4c4",
        greyC4: "#c5c4c4",
        greyBg: "#ddd",
        greyEE: "#d5dfee",
        greyF8: "#f8f8f8",
        greyLight: "#f2f2f2",
        greyLight2: "#f8f7f7",
        blueMedium: "#03a9e1",
        blueLight: "#dcf6ff",
        blueLight2: "#f0feff",
      },
      boxShadow: {
        box: "0 3px 5px -1px rgba(0,0,0,.08), 0 6px 10px 0 rgba(0,0,0,.08), 0 1px 18px 0 rgba(0,0,0,.08)",
        header: "1px 1px 5px rgba(0,0,0,.15)",
        red: "0 0 6px #e83a1f",
        payment: "rgba(50, 50, 50, 0.22) 0px -3px 10px",
        sidebar: "0px 0px 6px hsla(0,0%,71%,.4)",
        size: "0 2px 3px 0 rgba(0,0,0,.15)",
      },
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 992px) { ... }

      xl: "1200px",
      // => @media (min-width: 1200px) { ... }
    },
  },
};
