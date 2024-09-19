/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7C56CF",
        "primary-100": "#F4F1FA",
        "primary-1600": "#3B2174",
        alert: "#FF6F61",
        secondary: "#1A1A1A",
        "secondary-100": "#FAFAFA",
        "secondary-1000": "#868686",
      },
      borderRadius: {
        xxs: "2px",
        xs: "2px",
        s: "4px",
        sm: "6px",
        m: "10px",
        ml: "16px",
        lg: "24px",
        xl: "36px",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      fontSize: {
        xs: "16px",
        s: "20px",
        m: "32px",
        l: "56px",
      },
      lineHeight: {
        l: "67.2px",
        m: "38.4px",
        s: "30px",
        xs: "20px",
      },
      spacing: {
        xxs: "4px",
        xs: "8px",
        s: "12px",
        sm: "16px",
        m: "24px",
        ml: "32px",
        l: "48px",
        xl: "64px",
        "2xl": "80px",
      },
      keyframes: {
        moveRight: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(50px)" },
        },
        moveUpDown: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(30px)" },
        },
        scaleImage: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.2)" },
        },
      },
      animation: {
        "move-right": "moveRight 5s ease-in-out infinite",
        "move-up-down": "moveUpDown 5s ease-in-out infinite",
        "scale-up-down": "scaleImage 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
