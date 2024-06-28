import { Stack, Typography } from '@mui/material';
import styles from './Filter.module.css';
import { SelectOption } from '@/shared/lib/types/selectOption.ts';
import { BaseSelect } from '@/shared/ui';

const options = [
    { label: 'Text', value: 0 },
    { label: 'Label 1', value: 1 },
    { label: 'Label 2', value: 2 },
] as SelectOption[];

export const Filter = () => {
    console.log('filter');

    return (
        <Stack spacing={3} className={styles.container}>
            <Typography variant="h4">Фильтр</Typography>
            <Stack spacing={2}>
                <Stack spacing={1}>
                    <Typography>Жанр</Typography>
                    <BaseSelect options={options.slice(1)} placeholder={options[0]} defaultValue={options[0].value} />
                </Stack>
                <Stack spacing={1}>
                    <Typography>Год выпуска</Typography>
                    <BaseSelect options={options.slice(1)} placeholder={options[0]} defaultValue={options[0].value} />
                </Stack>
            </Stack>
        </Stack>
    );
};
