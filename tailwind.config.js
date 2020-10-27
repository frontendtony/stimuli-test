module.exports = {
  purge: ['./src/components/**/*.{js,jsx,ts,tsx}', './src/pages/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'gray-border': '#E4E4E4',
        'light-text': '#808191',
        'default-text': '#11142D',
        primary: '#6C5DD3',
        'primary-accent': '#3F8CFF',
      },
      height: {
        14: '3.5rem',
        'sidebar-collapsed': '96px',
      },
      margin: {
        11: '2.75rem',
      },
      maxWidth: {
        sidebar: '256px',
        'sidebar-collapsed': '96px',
      },
      minWidth: {
        sidebar: '256px',
        'sidebar-collapsed': '96px',
      },
      padding: {
        sidebar: '256px',
        'sidebar-collapsed': '96px',
      },
      width: {
        sidebar: '256px',
        'sidebar-collapsed': '96px',
        14: '3.5rem',
      },
      screens: {
        tablet: { min: '768px', max: '1023px' },
      },
    },
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
  },
};
