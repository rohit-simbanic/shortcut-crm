import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-bg":
          "linear-gradient(rgb(238, 247, 252) 0%, rgba(238, 247, 252, 0) 126.57%)",
        "gradient-conic":
          "linear-gradient(109.6deg, rgb(53, 53, 53) 91.1%, rgb(36, 59, 85) 91.1%)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
