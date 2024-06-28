import { MenuItem, TextFieldProps, Typography } from '@mui/material';
import { memo } from 'react';
import { SelectOption } from '@/shared/lib/types/selectOption';
import { BaseField } from '@/shared/ui';
import { SelectIcon } from '@/shared/ui/Icons/SelectIcon.tsx';

type BaseSelectProps = Omit<TextFieldProps, 'placeholder'> & {
    readonly options: SelectOption[];
    readonly placeholder?: SelectOption;
};

export const BaseSelect = memo((props: BaseSelectProps) => {
    const { options, placeholder, ...selectProps } = props;

    return (
        <BaseField
            fullWidth
            select
            SelectProps={{
                IconComponent: SelectIcon,
                MenuProps: {
                    PaperProps: {
                        sx: {
                            marginTop: '4px',
                            borderRadius: '8px',
                        },
                    },
                },
            }}
            sx={{
                '.MuiSelect-icon': {
                    top: 'unset',
                },
            }}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...selectProps}
        >
            {placeholder && (
                <MenuItem value={placeholder.value} disabled>
                    <Typography color="secondary">{placeholder.label}</Typography>
                </MenuItem>
            )}
            {options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
            ))}
        </BaseField>
    );
});
