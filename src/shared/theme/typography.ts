import { Palette } from '@mui/material';
import { TypographyOptions } from '@mui/material/styles/createTypography';

export const typography: TypographyOptions | ((palette: Palette) => TypographyOptions) | undefined = {
    fontFamily: ['Roboto', 'sans-serif'].join(','),
    h1: {
        fontSize: 32,
        fontWeight: 700,
        lineHeight: 0.9,
    },
    h2: {
        fontSize: 32,
        fontWeight: 600,
    },
    h3: {
        fontSize: 20,
        fontWeight: 600,
        lineHeight: 0.9,
    },
    h4: {
        fontSize: 16,
        fontWeight: 600,
        lineHeight: 0.9,
    },
    subtitle1: {
        fontSize: 20,
        fontWeight: 400,
        lineHeight: 0.9,
    },
    body1: {
        fontSize: 14,
        fontWeight: 400,
        lineHeight: 1.2,
    },
};
