import { createTheme } from '@mui/material';
import { typography } from './typography';
import { components } from './components.ts';

export const theme = createTheme({
    typography,
    components,
    palette: {
        background: {
            default: '#F5F5F5',
        },
        primary: {
            main: '#FF5500',
        },
        secondary: {
            main: '#ABABAB',
        },
        error: {
            main: '#F04075',
            light: '#FF5500',
        },
    },
});
