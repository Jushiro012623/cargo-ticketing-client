/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3A8DCA', // Light Blue for primary elements (buttons, links)
          dark: '#1B3A57',    // Dark Navy for headers, footer, or main navigation
          hover: '#2F78AF',    // Dark Navy for headers, footer, or main navigation
        },
        secondary: {
          DEFAULT: '#F08A5D', // Soft Coral for accents, buttons, or active links
          light: '#F7C548',   // Golden Yellow for highlights, badges, or alerts
        },
        neutral: {
          DEFAULT: '#FAFAFA', // Off-White for backgrounds
          light: '#F5F5F5',   // Light Gray for section dividers or form backgrounds
        },
        accent: {
          mint: '#47AE62',    // Mint Green for success messages, confirmations
          sky: '#84CFFA',
          hover: '#8BBE99',     // Sky Blue for active states, focus outlines
        },
        dark: {
          text: '#2C2C2C',    // Charcoal for text and readable content
          error: '#E74C3C',   // Light Red for error states or warnings
        },
        bg : '#d4d4d4'
      },
    },
  },
  plugins: [],
}

