import type { PaletteOptions } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { error, info, neutral, success, warning } from '../colors';
import type { ColorPreset, Contrast } from '../index';
import { getPrimary } from '../utils';

interface Config {
  colorPreset?: ColorPreset;
  contrast?: Contrast;
}

export const createPalette = (config: Config): PaletteOptions => {
  const { colorPreset, contrast } = config;

  return {
    action: {
      active: neutral[500],
      disabled: alpha(neutral[100], 0.38),
      disabledBackground: alpha(neutral[100], 0.12),
      focus: alpha(neutral[100], 0.16),
      hover: alpha(neutral[100], 0.04),
      selected: alpha(neutral[100], 0.12)
    },
    background: {
      default: contrast === 'high' ? '#171B21' : '#1D2129',
      paper: neutral[900]
    },
    divider: '#2C2F36',
    error,
    info,
    mode: 'dark',
    neutral,
    primary: getPrimary(colorPreset),
    success,
    text: {
      primary: '#F2EFE9',
      secondary: '#A8A29A',
      disabled: 'rgba(242, 239, 233, 0.45)'
    },
    warning
  };
};
