/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./components/**/*.{html,js}",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        // Primary - Industrial Steel Authority
        primary: {
          DEFAULT: "#2C3E50", // slate-800
          50: "#F8F9FA", // slate-50
          100: "#E8EAED", // slate-100
          200: "#D5D9DD", // slate-200
          300: "#B4BBC3", // slate-300
          400: "#8895A3", // slate-400
          500: "#5D6D7E", // slate-500
          600: "#34495E", // slate-600
          700: "#2C3E50", // slate-700
          800: "#1C2833", // slate-800
          900: "#17202A", // slate-900
        },
        // Secondary - Supporting Technical Depth
        secondary: {
          DEFAULT: "#34495E", // slate-600
          50: "#F4F6F7", // slate-50
          100: "#E5E8EB", // slate-100
          200: "#D6DBDF", // slate-200
          300: "#AEB6BF", // slate-300
          400: "#85929E", // slate-400
          500: "#5D6D7E", // slate-500
          600: "#34495E", // slate-600
          700: "#2E4053", // slate-700
          800: "#283747", // slate-800
          900: "#212F3C", // slate-900
        },
        // Accent - Precision Orange Focus
        accent: {
          DEFAULT: "#E67E22", // orange-600
          50: "#FEF5E7", // orange-50
          100: "#FDEBD0", // orange-100
          200: "#FAD7A0", // orange-200
          300: "#F8C471", // orange-300
          400: "#F5B041", // orange-400
          500: "#F39C12", // orange-500
          600: "#E67E22", // orange-600
          700: "#CA6F1E", // orange-700
          800: "#AF601A", // orange-800
          900: "#935116", // orange-900
        },
        // Background - Clean Technical Canvas
        background: {
          DEFAULT: "#FAFBFC", // neutral-50
          alt: "#FFFFFF", // white
        },
        // Surface - Subtle Component Separation
        surface: {
          DEFAULT: "#F8F9FA", // gray-50
          hover: "#F1F3F5", // gray-100
          active: "#E9ECEF", // gray-200
        },
        // Text Colors
        text: {
          primary: "#2C3E50", // slate-800
          secondary: "#7F8C8D", // gray-500
          tertiary: "#95A5A6", // gray-400
          inverse: "#FFFFFF", // white
        },
        // Semantic Colors - Success
        success: {
          DEFAULT: "#27AE60", // green-600
          50: "#E8F8F5", // green-50
          100: "#D5F4E6", // green-100
          200: "#ABEBC6", // green-200
          300: "#82E0AA", // green-300
          400: "#58D68D", // green-400
          500: "#2ECC71", // green-500
          600: "#27AE60", // green-600
          700: "#229954", // green-700
          800: "#1E8449", // green-800
          900: "#196F3D", // green-900
        },
        // Semantic Colors - Warning
        warning: {
          DEFAULT: "#F39C12", // yellow-500
          50: "#FEF9E7", // yellow-50
          100: "#FCF3CF", // yellow-100
          200: "#F9E79F", // yellow-200
          300: "#F7DC6F", // yellow-300
          400: "#F4D03F", // yellow-400
          500: "#F39C12", // yellow-500
          600: "#D68910", // yellow-600
          700: "#B9770E", // yellow-700
          800: "#9C640C", // yellow-800
          900: "#7E5109", // yellow-900
        },
        // Semantic Colors - Error
        error: {
          DEFAULT: "#E74C3C", // red-600
          50: "#FDEDEC", // red-50
          100: "#FADBD8", // red-100
          200: "#F5B7B1", // red-200
          300: "#F1948A", // red-300
          400: "#EC7063", // red-400
          500: "#E74C3C", // red-500
          600: "#CB4335", // red-600
          700: "#B03A2E", // red-700
          800: "#943126", // red-800
          900: "#78281F", // red-900
        },
        // Border Colors
        border: {
          DEFAULT: "#E1E8ED", // gray-200
          light: "#F0F3F5", // gray-100
          dark: "#D5D9DD", // gray-300
        },
      },
      fontFamily: {
        headline: ['Inter', 'sans-serif'],
        body: ['Source Sans Pro', 'sans-serif'],
        cta: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.75rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.875rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.1' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
      },
      boxShadow: {
        'sm': '0 1px 2px rgba(44, 62, 80, 0.05)',
        'base': '0 2px 8px rgba(44, 62, 80, 0.08)',
        'md': '0 4px 12px rgba(44, 62, 80, 0.10)',
        'lg': '0 8px 24px rgba(44, 62, 80, 0.12)',
        'xl': '0 12px 32px rgba(44, 62, 80, 0.15)',
        'precision': '0 2px 8px rgba(44, 62, 80, 0.08)',
        'precision-lg': '0 8px 24px rgba(44, 62, 80, 0.12)',
      },
      borderRadius: {
        'sm': '0.25rem',
        'DEFAULT': '0.5rem',
        'md': '0.625rem',
        'lg': '0.75rem',
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      transitionDuration: {
        'fast': '150ms',
        'DEFAULT': '300ms',
        'slow': '500ms',
      },
      transitionTimingFunction: {
        'out': 'cubic-bezier(0.33, 1, 0.68, 1)',
        'in-out': 'cubic-bezier(0.65, 0, 0.35, 1)',
      },
      animation: {
        'fade-in': 'fadeIn 300ms cubic-bezier(0.33, 1, 0.68, 1)',
        'slide-up': 'slideUp 300ms cubic-bezier(0.33, 1, 0.68, 1)',
        'stagger': 'fadeIn 300ms cubic-bezier(0.33, 1, 0.68, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
        '112': '28rem',
        '128': '32rem',
      },
      letterSpacing: {
        'tighter': '-0.02em',
        'tight': '-0.01em',
        'wide': '0.02em',
        'wider': '0.05em',
      },
      lineHeight: {
        'tight': '1.1',
        'snug': '1.2',
        'relaxed': '1.75',
      },
    },
  },
  plugins: [],
}