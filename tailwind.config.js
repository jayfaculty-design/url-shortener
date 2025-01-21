/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      cyan: "hsl(180, 66%, 49%)",
      cyan_fade: "hsl(180, 68%, 70%)",
      dark_violet: "hsl(257, 27%, 26%)",
      red: "hsl(0, 87%, 67%)",
      gray: "hsl(0, 0%, 75%)",
      grayish_violet: "hsl(257, 7%, 63%)",
      dark_blue: "hsl(255, 11%, 22%)",
      very_dark_violet: "hsl(260, 8%, 14%)",
      white: "white",
    },
    extend: {
      content: {
        "": '""',
      },
      backgroundImage: {
        bg_shorten_mobile: "url('/bg-shorten-mobile.svg')",
        bg_boost_mobile: "url('/bg-boost-mobile.svg')",
      },
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    base: false,
  },
};
