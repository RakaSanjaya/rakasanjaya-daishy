/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/**/*.{html,js}"],
   theme: {
      extend: {
         fontFamily: {
            inter: ["Inter", "sans-serif"],
         },
      },
      colors: {
         poolblue: "#00BCE1",
         white: "#FFFFFF",
      },
   },
   plugins: [require("daisyui")],
   daisyui: {
      themes: ["black"],
   },
};
