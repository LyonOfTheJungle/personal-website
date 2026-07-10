import type { PaletteColor } from '@mui/material/styles/createPalette';
import type { ColorPreset } from './index';
import { blue, gold, green, indigo, purple } from './colors';

export const getPrimary = (preset?: ColorPreset): PaletteColor => {
  switch (preset) {
    case 'blue':
      return blue;
    case 'gold':
      return gold;
    case 'green':
      return green;
    case 'indigo':
      return indigo;
    case 'purple':
      return purple;
    default:
      console.error('Invalid color preset, accepted values: "blue", "gold", "green", "indigo" or "purple".');
      return gold;
  }
};
