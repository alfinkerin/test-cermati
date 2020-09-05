module.exports = {
  purge: [],
  theme: {
    screens: {
      sm: "481px",
      // => @media (min-width: 640px) { ... }

      md: "960px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    colors: {
      smokegrey: "#e5e5e5",
      grey: "#CECECE",
      greydark: "#898989",
      darkblue: "#004a75",
      blue: "#007bc1",
      white: "#fff",
      black: "#000",
      darkorange: "#cc6600",
    },

    extend: {
      width: {
        "1/30": "29.333333%",
        460: "40rem",
      },
    },
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus"],
    textColor: ["responsive", "hover", "focus", "group-hover"],
  },
  plugins: [],
};
