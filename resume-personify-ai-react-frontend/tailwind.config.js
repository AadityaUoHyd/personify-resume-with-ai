export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB", // Vibrant Blue
        secondary: "#7C3AED", // Deep Purple
        background: "#111827", // Dark Gray/Black
        card: "#1F2937", // Slightly Lighter Gray
        accent: "#10B981", // Emerald Green for accents
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["business"], // Set default theme to 'business' for a professional dark mode
  },
};