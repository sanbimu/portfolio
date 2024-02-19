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
        myriad: ["var(--font-myriad)"],
        monkeg: ["var(--font-monkeg)"],
      },
      dropShadow: {
        active: "0 0.5px 0px rgb(30, 30, 30)",
        "active-brown": "0 0.5px 0px rgb(114, 105, 90)",
        "active-rust": "0 0.5px 0px rgb(154, 81, 28)",
      },
    },
  },
  plugins: [],
};
