/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-estedad)'],
      },
      colors: {
        'tint-1': '#e5f2e9',
        'tint-2': '#cae4d3',
        'tint-3': '#b0d7bd',
        'tint-4': '#96c9a7',
        'tint-5': '#7cbc91',
        'tint-6': '#61ae7b',
        'tint-7': '#4e9968',

        primary: '#417f56',

        'shade-1': '#396f4b',
        'shade-2': '#315f41',
        'shade-3': '#294f36',
        'shade-4': '#21402b',
        'shade-5': '#183020',
        'shade-6': '#102016',
        'shade-7': '#08100b',

        white: '#ffffff',
        'gray-1': '#f9f9f9',
        'gray-2': '#e1e1e1',
        'gray-3': '#ededed',
        'gray-4': '#cbcbcb',
        'gray-5': '#adadad',
        'gray-6': '#757575',
        'gray-7': '#717171',
        'gray-8': '#353535',
        black: '#0c0c0c',

        //Status Colors
        error: '#c30000',
        'error-Light': '#ed2e2e',
        'error-Extralight': '#fff2f2',

        success: '#00966d',
        'success-Light': '#00ba88',
        'success-Extralight': '#f3fdfa',

        warning: '#a9791c',
        'warning-Light': '#f4b740',
        'warning-Extralight': '#fff8e1',
      },
      screens: {
        xs: '360px',
        aboutSectionSize: '800px',
        sliderSize: '600px',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
