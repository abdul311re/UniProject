import animate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: '#8E44AD',
        charcoal: '#34495E',
        red: '#C0392B',
        black: '#000000',
        white: '#FFFFFF',
        grey: '#F3F4F0',
        Hex: '#f6f8fa',
        bgport: '#201e1e',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        }
      },
      margin: {
        '-50': '-50px'
      },
      fontSize: {
        '7.3xl': '5.5rem',
        '7.5xl': '5.5rem',
        '2.5xl': '2.5rem',
        '1.3xl': '1.3rem',
        '2.7xl': '2.7rem',
        '2.1rem': '2.1rem'
      },
      lineHeight: {
        'extra-loose': '1.4'
      },
      borderRadius: {
        '2.5xl': '2.5rem',
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      borderColor: {
        charcoal: '#34495E'
      },
      width: {
        '74rem': '74rem',
        '50rem': '50rem',
        '20rem': '20rem'
      },
      screens: {
        xs: '414px',
        xms: '390px',
        max:  '830px',
      },
      boxShadow: {
        'custom-glow': '0px 0px 60px rgba(255, 255, 255, 0.4)',
        'text': '0 2px 3px rgba(0, 0, 0, 0.2)', 
      },
    }
  },
  plugins: [animate],
};
