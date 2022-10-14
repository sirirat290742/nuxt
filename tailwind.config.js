module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    backgroundColor: theme => ({
     ...theme('colors'),
       'primary': '#3490dc',
        'secondary': '#ffed4a',
        'danger': '#e3342f',
            }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
