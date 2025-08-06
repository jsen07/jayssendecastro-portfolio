/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        bebas: ["Bebas Neue", "sans-serif"],
      },
      textShadow: {
        sm: "1px 1px 2px rgba(0, 0, 0, 0.5)",
        DEFAULT: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        lg: "3px 3px 6px rgba(0, 0, 0, 0.5)",
      },
      animation: {
        fadeInUp: "fadeInUp 0.8s ease-out forwards",
        fadeInRight: "fadeInRight 0.8s ease-out forwards",
        fadeInUpSocialBar: "fadeInUp 0.8s ease-out forwards",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(40px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeInUpSocialBar: {
          "0%": {
            opacity: 0,
            transform: "translateY(40px) translate(-50%, -50%)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0) translate(-50%, -50%)",
          },
        },
        fadeInRight: {
          "0%": {
            opacity: 0,
            transform: "translateX(50px) translate(-50%, -50%)",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0) translate(-50%, -50%)",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};
