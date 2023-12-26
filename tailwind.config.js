/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      background: "#ECE5DA",
      text: "#1E1E1E",
      rust: "#9A511C",
      brown: "#72695A",
      headers: "#63725A",
      accents: "#63725A",
    },
    extend: {
      fontFamily: {
        average: ["var(--font-average)"],
        old: ["var(--font-old)"],
        myriad: ["var(--font-myriad)"],
        monkeg: ["var(--font-monkeg)"],
      },
      dropShadow: {
        active: "0 0.5px 0px rgb(0, 0, 0)",
        "active-brown": "0 1px 0px rgb(114, 105, 90)",
      },
    },
  },
  plugins: [],
};
