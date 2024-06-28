import { Button, ButtonProps, styled } from '@mui/material';

export const BaseButton = styled(Button)<ButtonProps>(({ theme }) => ({
    '&': {
        borderRadius: theme.spacing(1),
        textTransform: 'none',
        boxShadow: 'none',
        padding: [theme.spacing(1), theme.spacing(2)].join(' '),
    },
    '&.MuiButton-contained:hover': {
        backgroundColor: '#E94E00',
    },
    '&.MuiButton-outlined:hover': {
        borderColor: '#E94E00',
    },
    '&:hover': {
        boxShadow: 'none',
    },
}));
