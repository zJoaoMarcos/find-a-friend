import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Nunito", "sans-serif"]
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#121214",
      white: "#FFFFFF",
      "gray-50": "#FDECED",
      "coral-300": "#F75F64",
      "coral-500": "#F15156",
      "coral-700": "#E44449",
      "navy-900:": "#0D3B66",
      "mustard-400": "#F4D35E",
    }
  },
  plugins: [],
};
export default config;
