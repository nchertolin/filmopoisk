import { IconButton, InputAdornment, TextFieldProps } from '@mui/material';
import { SearchIcon } from '@/shared/ui/Icons/SearchIcon';
import { ClearIcon } from '@/shared/ui/Icons/ClearIcon.tsx';
import { BaseField } from '@/shared/ui';

type SearchFieldProps = TextFieldProps & {
    readonly onClear: () => void;
};

export const BaseSearchField = (props: SearchFieldProps) => {
    const { onClear, ...otherProps } = props;

    return (
        <BaseField
            sx={(theme) => ({
                '.MuiOutlinedInput-root': {
                    paddingLeft: '12px',
                    '& fieldset': {
                        borderColor: theme.palette.background.paper,
                    },
                },
                input: {
                    paddingLeft: `${theme.spacing(1)} !important`,
                    paddingRight: `${theme.spacing(1)} !important`,
                },
            })}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                ),
                endAdornment: (otherProps.value as string).length ? (
                    <InputAdornment position="end">
                        <IconButton onClick={onClear} sx={{ padding: 0 }}>
                            <ClearIcon />
                        </IconButton>
                    </InputAdornment>
                ) : null,
            }}
            {...otherProps}
        />
    );
};
