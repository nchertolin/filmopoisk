import { IconButton, InputAdornment, TextFieldProps } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import { BaseField } from '@/shared/ui';
import { SearchIcon } from '@/shared/ui/Icons/SearchIcon';
import { ClearIcon } from '@/shared/ui/Icons/ClearIcon.tsx';

export const BaseSearchField = (props: TextFieldProps) => {
    const [value, setValue] = useState('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const handleClear = () => {
        setValue('');
    };

    return (
        <BaseField
            value={value}
            onChange={handleChange}
            sx={(theme) => ({
                '.MuiOutlinedInput-root': {
                    paddingLeft: '12px',
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
                endAdornment: value.length ? (
                    <InputAdornment position="end">
                        <IconButton onClick={handleClear} sx={{ padding: 0 }}>
                            <ClearIcon />
                        </IconButton>
                    </InputAdornment>
                ) : null,
            }}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...props}
        />
    );
};
