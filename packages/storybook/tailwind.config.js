/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{css,html,mdx,js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  presets: [
    require('../design-tokens/dist/tailwindcss-preset/dt-theme.config.js')
  ],
  safelist: [
    "w-0",
    "w-px",
    "w-0.5",
    "w-1",
    "w-1.5",
    "w-2",
    "w-2.5",
    "w-3",
    "w-3.5",
    "w-4",
    "w-5",
    "w-6",
    "w-7",
    "w-8",
    "w-9",
    "w-10",
    "w-11",
    "w-12",
    "w-13",
    "w-14",
    "w-15",
    "w-16",
    "w-20",
    "w-24",
    "w-28",
    "w-32",
    "w-36",
    "w-40",
    "w-44",
    "w-48",
    "w-52",
    "w-56",
    "w-60",
    "w-64",
    "w-72",
    "w-80",
    "w-96",
    "w-112",
    "w-144"
  ]
  
}

