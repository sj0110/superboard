/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        // Figma design tokens
        brand: {
          green: '#9af6c1',
          indigo: '#27104a',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
        green: {
          200: '#bbf7d0',
          300: '#86efac',
          600: '#16a34a',
        },
        red: {
          100: '#fee2e2',
          600: '#dc2626',
        },
        blue: {
          200: '#bfdbfe',
          500: '#3b82f6',
        },
        stone: {
          400: '#a8a29e',
        },
        zinc: {
          100: '#f4f4f5',
          200: '#e4e4e7',
          950: '#09090b',
        },
      },
      borderRadius: {
        lg: 'var(--radius-lg)',
        md: 'var(--radius-md)',
        sm: 'var(--radius-sm)',
        none: '0',
        full: '9999px',
        xl: '12px',
        '2xl': '16px',
        '4xl': '32px',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'system-ui', 'serif'],
      },
      fontSize: {
        xs: ['12px', { lineHeight: '12px', letterSpacing: '-0.4px' }],
        sm: ['14px', { lineHeight: '20px', letterSpacing: '0px' }],
        base: ['16px', { lineHeight: '24px' }],
        lg: ['18px', { lineHeight: '20px', letterSpacing: '0px' }],
        xl: ['20px', { lineHeight: '28px' }],
        '2xl': ['24px', { lineHeight: '32px', letterSpacing: '0px' }],
        '3xl': ['30px', { lineHeight: '32px', letterSpacing: '0px' }],
        '4xl': ['36px', { lineHeight: '40px', letterSpacing: '0px' }],
      },
      spacing: {
        0: '0px',
        '0-5': '2px',
        '1-5': '6px',
        '2-5': '10px',
        '3-5': '14px',
        2: '8px',
        3: '12px',
        4: '16px',
        5: '20px',
        7: '28px',
        8: '32px',
        10: '40px',
        16: '64px',
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

