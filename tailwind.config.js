/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
import typography from "tailwind-typography"
import themes from "daisyui/src/theming/themes"
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        center :true,
        padding: "1rem",
      },
      fontFamily: {
        primary : "YekanBakh"
      },
      minHeight: {
        auto: "auto"
      },
      colors : {
        "primary-focus": "#208d31",
        "secondary-focus" : "#017da8",
        "accent-focus" : "#051608",
        dark : themes.dark["base-300"]
      }
    },
  },
  plugins: [
      daisyui,
      typography
  ],
  daisyui: {
    rtl: true,
    themes: [
      {
        light: {
          ...themes.light,
          primary: "#24a538",
          "primary-focus": "#208d31",
          "primary-content": themes.light['base-100'],
          secondary: "#009ed4",
          "secondary-focus" : "#017da8",
          "secondary-content": themes.light['base-100'],
          accent: "#0a2d11",
          "accent-focus" : "#051608",
          "accent-content": themes.light['base-100'],
        },
        dark: {
          ...themes.dark,
          primary: "#24a538",
          "primary-focus": "#208d31",
          "primary-content": themes.light['base-100'],
          secondary: "#009ed4",
          "secondary-focus" : "#017da8",
          "secondary-content": themes.dark['base-100'],
          accent: "#0a2d11",
          "accent-focus" : "#051608",
          "accent-content": themes.light['base-100'],
        },
      },
    ],
  },
}
