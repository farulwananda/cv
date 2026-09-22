/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Instrument Sans',
          'Geist',
          'Plus Jakarta Sans',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
        mono: [
          'Geist Mono',
          'JetBrains Mono',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace',
        ],
      },
      colors: {
        paper: {
          light: '#f7f7f5',
          dark: '#111113',
          DEFAULT: '#f7f7f5',
        },
        panel: {
          light: '#fbfbf9',
          dark: '#1a1a1c',
          DEFAULT: '#fbfbf9',
        },
        soft: {
          light: '#efefec',
          dark: '#161618',
        },
        line: {
          light: '#deddd8',
          dark: '#302f2f',
          DEFAULT: '#deddd8',
        },
        ink: {
          light: '#20201e',
          dark: '#f1f0ec',
          DEFAULT: '#20201e',
        },
        muted: {
          light: '#6f6e69',
          dark: '#a6a49e',
          DEFAULT: '#6f6e69',
        },
        accent: {
          light: '#c65f36',
          dark: '#df7950',
          soft: '#f1e3dc',
          'soft-dark': '#2b1d18',
          DEFAULT: '#c65f36',
        },
      },
    },
  },
  plugins: [],
};
