export const Theme = {
  colors: {
    white: '#fff',
    text: '#000',
    background: '#6B9275',
    darkGreen: '#57695B',
    primary: '#9A9B9A',
    secondary: '#464D48',
    title: '#560668',
    active: '#380873',
    accent: '#a4047f',
    muted: 'RGBA(0,0,0,0.85)',
  },
  space: [0, 2, 4, 8, 16, 32, 64, 128, 256],
  fontSizes: {
    xs: 12,
    s: 14,
    m: 16,
    l: 22,
    xl: 32,
  },
  fontWeights: {
    bold: 700,
  },
  borders: {
    none: 'none',
    normal: color => `1px solid ${color}`,
    bold: color => `3px solid ${color}`,
  },
  radii: {
    none: '0',
    normal: '6px',
    medium: '10px',
    round: '50%',
  },
  shadows: {
    small: '0 5px 7px -1px rgba(51, 51, 51, 0.23)',
    regular: '0px 4px 10px 4px #9e9e9e',
    medium: '0 9px 47px 11px rgba(51, 51, 51, 0.18);',
  },
  animation: {
    cubicBezier: '0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98)',
  },
  media: {
    phone: '(max-width: 767px)',
    tablet: '(min-width: 768px)',
    desktop: '(min-width: 1024px)',
  },
};
