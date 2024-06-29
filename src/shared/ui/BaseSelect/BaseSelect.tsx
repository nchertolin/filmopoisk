import { MenuItem, TextFieldProps, Typography } from '@mui/material';
import { memo } from 'react';
import { BaseField } from '@/shared/ui';
import { SelectIcon } from '@/shared/ui/Icons/SelectIcon.tsx';

type BaseSelectProps = Omit<TextFieldProps, 'placeholder'> & {
    readonly options: Record<string, string>;
};

export const BaseSelect = memo((props: BaseSelectProps) => {
    const { options, defaultValue, ...selectProps } = props;

    return (
        <BaseField
            fullWidth
            select
            defaultValue={defaultValue}
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
            {...selectProps}
        >
            {Object.entries(options).map(([label, value]) => (
                <MenuItem key={label} value={label}>
                    <Typography color={label === defaultValue ? 'secondary' : ''}> {value}</Typography>
                </MenuItem>
            ))}
        </BaseField>
    );
});
