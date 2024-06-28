import { styled, TextField, TextFieldProps } from '@mui/material';

export const BaseField = styled(TextField)<TextFieldProps>(({ theme }) => ({
    '&': {
        borderRadius: theme.spacing(1),
        backgroundColor: theme.palette.background.paper,
    },
    '& .MuiInputBase-input': {
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
