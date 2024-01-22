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
        "gradient-shimmerge":
          "linear-gradient(0deg,#ffffffde,#ffffffde),linear-gradient(160deg,#7f72e6 -2.5%,#76bde6 72.18%)",
        "gradient-darkShimmer":
          "linear-gradient(160deg,#3a3750 -2.5%,#202a40 72.18%);",
      },
      colors: {
        current: "currentColor",
        transparent: "transparent",
        cyanDefault: "#3a95c9",
        cyanDefaultDark: "#2d78a4",
        darkBgDefault: "#1f2532",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
