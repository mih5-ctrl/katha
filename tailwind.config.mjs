import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#B5451B',
          light: '#FEF0EB',
          dark: '#8C3515',
        },
        site: {
          bg: '#FAFAF8',
          text: '#1A1A1A',
          muted: '#6B6860',
          border: '#E5E3DF',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Lora', 'Georgia', 'serif'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: '#1A1A1A',
            maxWidth: 'none',
            fontSize: '1.2rem',
            lineHeight: '1.85',
            fontFamily: 'Lora, Georgia, serif',
            'h1, h2, h3, h4': {
              fontFamily: 'Inter, system-ui, sans-serif',
              fontWeight: '700',
              color: '#1A1A1A',
            },
            a: {
              color: '#B5451B',
              '&:hover': { color: '#8C3515' },
            },
            blockquote: {
              borderLeftColor: '#B5451B',
              borderLeftWidth: '3px',
              color: '#6B6860',
              fontStyle: 'italic',
              paddingLeft: '1.25rem',
            },
            strong: { color: '#1A1A1A' },
            hr: {
              borderColor: '#B5451B22',
              marginTop: '2.5rem',
              marginBottom: '2.5rem',
            },
            h3: {
              marginTop: '1.25rem',
              fontSize: '1.15rem',
              fontWeight: '700',
            },
            li: {
              marginTop: '0.3rem',
              marginBottom: '0.3rem',
            },
          },
        },
      }),
    },
  },
  plugins: [typography],
};
