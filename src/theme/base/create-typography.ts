import type { TypographyOptions } from '@mui/material/styles/createTypography';

const serifFamily = '\'Fraunces Variable\', Georgia, serif';
const monoFamily = '\'Cascadia Mono\', monospace';

export const createTypography = (): TypographyOptions => {
  return {
    fontFamily: '"Inter Variable", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.6
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.6
    },
    button: {
      fontWeight: 600
    },
    caption: {
      fontSize: '0.75rem',
      fontWeight: 500,
      lineHeight: 1.66
    },
    subtitle1: {
      fontSize: '1.0625rem',
      fontWeight: 400,
      lineHeight: 1.6
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: 1.57
    },
    overline: {
      fontFamily: monoFamily,
      fontSize: '0.8125rem',
      fontWeight: 500,
      letterSpacing: '0.18em',
      lineHeight: 2,
      textTransform: 'uppercase'
    },
    h1: {
      fontFamily: serifFamily,
      fontWeight: 600,
      fontSize: '3.75rem',
      letterSpacing: '-0.015em',
      lineHeight: 1.1
    },
    h2: {
      fontFamily: serifFamily,
      fontWeight: 600,
      fontSize: '3rem',
      letterSpacing: '-0.015em',
      lineHeight: 1.15
    },
    h3: {
      fontFamily: serifFamily,
      fontWeight: 600,
      fontSize: '2.25rem',
      letterSpacing: '-0.01em',
      lineHeight: 1.2
    },
    h4: {
      fontFamily: serifFamily,
      fontWeight: 600,
      fontSize: '1.875rem',
      lineHeight: 1.25
    },
    h5: {
      fontFamily: serifFamily,
      fontWeight: 600,
      fontSize: '1.4375rem',
      lineHeight: 1.3
    },
    h6: {
      fontFamily: serifFamily,
      fontWeight: 600,
      fontSize: '1.1875rem',
      lineHeight: 1.35
    }
  };
};
