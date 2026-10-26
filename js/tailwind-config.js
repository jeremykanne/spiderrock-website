// Shared Tailwind config for every page (loaded right after the Tailwind CDN script).
// Palette from the client's design handoff doc (Data & Analytics template). The original
// token names are kept and remapped, so existing classes like bg-sr-navy pick up the new look.
tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
        mono: ['"Roboto Mono"', 'monospace'],
      },
      colors: {
        'sr-navy':     '#2C4660',   // dark panels, stats band
        'sr-blue':     '#3C5E80',   // core blue: links, accents
        'sr-gray':     '#5A6060',
        'sr-dark':     '#3B3F40',   // charcoal: headings
        'sr-red':      '#BA4838',
        'sr-charcoal': '#2A2E2F',   // utility bar + footer
        'sr-mist':     '#F5F6F6',   // light section background
        // Neutral scale retuned to the template's warm greys.
        gray: {
          50: '#F5F6F6', 100: '#EEF0F0', 200: '#E3E5E5', 300: '#CDD1D1', 400: '#AEB3B4',
          500: '#7A8080', 600: '#5A6060', 700: '#4A5051', 800: '#3F4445', 900: '#3B3F40',
        },
        // Light blues are only used as text on dark backgrounds.
        blue: { 200: '#D3DEE8', 300: '#D3DEE8' },
      },
      borderRadius: {
        lg: '6px',    // buttons and small boxes
        xl: '10px',   // cards and panels
      },
    },
  },
};
