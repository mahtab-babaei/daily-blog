import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': {'max': '425px'}, 
        '2xs': {'max': '320px'},
        'custom': {'max': '524px'},
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      primary: "#554DDE",
      accent: "#F44E77",
      neutral: "#F2F6FF",
      light: "#6A6D9E",
      dark: "#16194F",
      white: "#FFFFFF",
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;
