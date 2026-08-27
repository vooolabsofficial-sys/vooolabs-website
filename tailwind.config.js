/** @type {import('tailwindcss').Config} */

/**
 * Opacity modifiers used in the markup that Tailwind v3's default scale does
 * not contain -- `from-blue-500/8`, `from-orange-500/6` and friends. An
 * opacity outside the scale generates no rule at all, so those colour stops
 * were empty and the gradient blobs they fed rendered as nothing. Filling the
 * scale in whole percents means any value in the markup resolves.
 */
const opacity = Object.fromEntries(
  Array.from({ length: 101 }, (_, i) => [i, String(i / 100)]),
);

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        clash: ['Clash Display', 'sans-serif'],
        kanit: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        display: ['Clash Display', 'sans-serif'],
      },
      opacity,
    },
  },
  plugins: [],
}
