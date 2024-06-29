import { Stack, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { ChangeEvent } from 'react';
import styles from './Filter.module.css';
import { BaseSelect } from '@/shared/ui';
import { getAllOptions } from '@/features/filter';
import { useActions } from '@/app/providers/StoreProvider';

export const Filter = () => {
    const { setGenre, setYear } = useActions();
    const { genres, years } = useSelector(getAllOptions);

    const handleGenreChange = (e: ChangeEvent<HTMLInputElement>) => {
        setGenre(e.target.value as never);
    };

    const handleYearChange = (e: ChangeEvent<HTMLInputElement>) => {
        setYear(e.target.value as never);
    };

    return (
        <Stack spacing={3} className={styles.container}>
            <Typography variant="h4">Фильтр</Typography>
            <Stack spacing={2}>
                <Stack spacing={1}>
                    <Typography>Жанр</Typography>
                    <BaseSelect options={genres} defaultValue="0" onChange={handleGenreChange} />
                </Stack>
                <Stack spacing={1}>
                    <Typography>Год выпуска</Typography>
                    <BaseSelect options={years} defaultValue="0" onChange={handleYearChange} />
                </Stack>
            </Stack>
        </Stack>
    );
};
