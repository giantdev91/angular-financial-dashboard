/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      'blue': {
        DEFAULT: '#005F83'
      }
    },
    extend: {},
  },
  plugins: [
    function ({ addVariant, e }) {
      addVariant('ltr', ({ separator, modifySelectors }) => {
        modifySelectors(({ className }) => {
          return `[dir=ltr] .ltr${e(separator)}${className}`;
        })
      });
      addVariant('rtl', ({ separator, modifySelectors }) => {
        modifySelectors(({ className }) => {
          return `[dir=rtl] .rtl${e(separator)}${className}`;
        })
      });
    },
    require('@tailwindcss/line-clamp'),
  ],
}
