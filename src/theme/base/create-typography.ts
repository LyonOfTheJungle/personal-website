import type { TypographyOptions } from '@mui/material/styles/createTypography';

export const createTypography = (): TypographyOptions => {
  return {
    fontFamily: '"Inter Variable", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Cascadia Mono"',
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.5
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.57
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
      fontFamily: '\'Cascadia Mono\', sans-serif',
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 1.57
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: 1.57
    },
    overline: {
      fontSize: '0.75rem',
      fontWeight: 600,
      letterSpacing: '0.5px',
      lineHeight: 2.5,
      textTransform: 'uppercase'
    },
    h1: {
      fontFamily: '\'Space Grotesk Variable\', sans-serif',
      fontWeight: 700,
      fontSize: '3.5rem',
      letterSpacing: '-0.02em',
      lineHeight: 1.2
    },
    h2: {
      fontFamily: '\'Space Grotesk Variable\', sans-serif',
      fontWeight: 700,
      fontSize: '3rem',
      letterSpacing: '-0.02em',
      lineHeight: 1.2
    },
    h3: {
      fontFamily: '\'Space Grotesk Variable\', sans-serif',
      fontWeight: 700,
      fontSize: '2.25rem',
      letterSpacing: '-0.02em',
      lineHeight: 1.2
    },
    h4: {
      fontFamily: '\'Space Grotesk Variable\', sans-serif',
      fontWeight: 700,
      fontSize: '2rem',
      lineHeight: 1.2
    },
    h5: {
      fontFamily: '\'Space Grotesk Variable\', sans-serif',
      fontWeight: 700,
      fontSize: '1.5rem',
      lineHeight: 1.2
    },
    h6: {
      fontFamily: '\'Space Grotesk Variable\', sans-serif',
      fontWeight: 700,
      fontSize: '1.125rem',
      lineHeight: 1.2
    }
  };
};
