import { styled, TextField, TextFieldProps } from '@mui/material';

export const BaseField = styled(TextField)<TextFieldProps>(({ theme }) => ({
    label: {
        left: '-12px !important',
    },
    'label + &': {
        marginTop: theme.spacing(1.5),
    },
    '&': {
        borderRadius: theme.spacing(1),
        backgroundColor: theme.palette.background.paper,
    },
    '& .MuiInputBase-input': {
        position: 'relative',
        padding: '12px',
    },
    '& .MuiOutlinedInput-root': {
        borderRadius: theme.spacing(1),
        '&:hover fieldset': {
            borderColor: 'var(--border-color)',
        },
        '&.Mui-focused fieldset': {
            borderColor: theme.palette.primary.main,
        },
    },
}));
