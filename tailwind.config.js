/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["**/*.{html,js}"],
   theme: {
      extend: {
         fontFamily: {
            inter: ["Inter", "sans-serif"],
         },
      },
      colors: {
         poolblue: "#00BCE1",
         white: "#FFFFFF",
         green: "#22c55e",
         red: "#dc2626",
      },
   },
   plugins: [require("daisyui")],
   daisyui: {
      themes: ["black"],
   },
};
