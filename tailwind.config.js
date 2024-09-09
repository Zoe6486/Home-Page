/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        RCD: ["Radio Canada", "sans-serif"],
      },

      // colors: {
      //   textColor: "#c1d3cf",
      //   bgColor: "#1c1e26",
      //   bgColorHeader: "rgba(45, 49, 57 .3)",
      //   mainColor: "#9feaad",
      //   mainColor20: "rgba(145, 216, 209, .3)",
      //   subColor: "#82a8d2",
      //   subColor2: "#8be1e4",
      //   subBgColor: "rgba(96, 121, 153,.2)",
      //   subBdColor: "rgba(96, 121, 153,.6)",
      // },
      colors: {
        textColor: "#c1d3cf",
        // bgColor: "#1c1e26",
        bgColor: "#0e0d0e",
        bgColorHeader: "rgba(31, 31, 31, .7)",
        mainColor: "#fb80c2",
        cubeColor: "#fb80c2",
        mainColor20: "rgba(145, 216, 209, .3)",
        subColor: "#ffffff",
        subColor2: "#8be1e4",
        subBgColor: "rgba(96, 121, 153,.2)",
        subBdColor: "rgba(96, 121, 153,.6)",
        navBgColor: "#2a2a2a",
      },

      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        "95%": "95%",
        16: "4rem",
      },

      animation: {
        "spin-slow": "spin 2s linear infinite",
        leftToRight: "leftToRight 4s ease-in-out infinite",
        iconScale: "iconScale 0.5s ease-in-out 1",
        contactListScale: "contactListScale 0.5s ease-in-out 1",
        listFloat: "listFloat 15s linear infinite",
      },

      keyframes: {
        leftToRight: {
          "0%": { transform: "translateX(-10px)" },
          "100%": { transform: "translateX(180px)" },
        },
        iconScale: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.5)" },
          "100%": { transform: "scale(1)" },
        },
        contactListScale: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)" },
        },
        listFloat: {
          "0%": {
            transform: "translateY(0) rotate(0deg)",
            opacity: "0.55",
            "border-radius": "0",
          },
          "100%": {
            transform: "translateY(-1000px) rotate(720deg)",
            opacity: "0.3",
            "border-radius": "20%",
          },
        },
      },

      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1920px",
        "4xl": "2400px",
      },

      transitionDuration: {
        1500: "1500ms",
        2000: "2000ms",
      },

      flexBasis: {
        0.15: "15%",
        0.2: "20%",
        0.65: "65%",
        "3/16": "18.75%",
        0.85: "85%",
        "5/8": "62.5%",
        "9/40": "22.5%",
        "31/40": "77.5%",
      },
    },
  },
  plugins: [],
};
