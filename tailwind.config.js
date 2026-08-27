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
        zentaro: ['Zentaro', 'sans-serif'],
        zian: ['Zian', 'sans-serif'],
        agile: ['Agile', 'sans-serif'],
        avixariav: ['Avixariav', 'sans-serif'],
        crazyblocks: ['CrazyBlocks', 'sans-serif'],
        midstar: ['Midstar', 'sans-serif'],
        roma: ['Roma', 'sans-serif'],
        taggos: ['Taggos', 'sans-serif'],
        tfsilence: ['TFSilence', 'sans-serif'],
        orbitron: ['Orbitron', 'sans-serif'],
        syne: ['Syne', 'sans-serif'],
        space: ['Space Grotesk', 'sans-serif'],
        unbounded: ['Unbounded', 'sans-serif'],
        michroma: ['Michroma', 'sans-serif'],
        cabinet: ['Cabinet Grotesk', 'sans-serif'],
        oxanium: ['Oxanium', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
      opacity,
    },
  },
  plugins: [],
}
