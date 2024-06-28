import { Components, Theme } from '@mui/material';

export const components: Components<Omit<Theme, 'components'>> | undefined = {
    MuiButton: {
        defaultProps: {
            variant: 'contained',
        },
    },
    MuiInputLabel: {
        styleOverrides: {
            root: {
                color: 'unset',
                left: '-12px',
            },
            asterisk: {
                color: 'var(--error-color)',
            },
            shrink: {
                fontSize: 16,
            },
        },
    },
    MuiAvatar: {
        defaultProps: {
            variant: 'rounded',
        },
    },
};
