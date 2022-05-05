module.exports = {
  prefix: 'tw-',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      spacing: {
        3.7: '0.9rem',
        6.5: '1.625rem',
        15: '3.75rem',
      },
      fontSize: {
        '2xm': ['1.625rem', '1.875rem'],
        '3xm': ['2rem', '2.25rem'],
      },
      borderRadius: {
        '4xl': '1.8rem',
      },
      colors: {
        default: {
          700: '#212e40',
        },
        gray: {
          25: '#F9F9F9',
        },
        primary: {
          900: '#FFC55A',
        },
        success: {
          900: '#0DBB68',
        },
        info: {
          600: '#2C91D8',
          800: '#35465c',
        },
        light: {
          900: '#828282',
        },
        overlay: {
          600: 'rgba(0, 0, 0, 0.6)',
        },
      },
      height: {
        13: '3.125rem',
        30: '7.5rem',
        32: '8.875rem',
        37: '9.125rem',
      },
      width: {
        13: '3.125rem',
        30: '7.5rem',
        32: '8.875rem',
        37: '9.125rem',
      },
      zIndex: {
        1000: '1000',
      },
    },
  },
  plugins: [],
}
