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
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        inter: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        poppins: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        clash: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        anton: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        kanit: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        crazyblocks: ['CrazyBlocks', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      opacity,
    },
  },
  plugins: [],
}
