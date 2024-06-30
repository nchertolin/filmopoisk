import { Stack, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { ChangeEvent, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Filter.module.css';
import { BaseSelect } from '@/shared/ui';
import { Genre, getAllOptions, getSelectedOptions } from '@/features/filter';
import { useActions } from '@/app/providers/StoreProvider';
import { useUpdateURL } from '@/shared/lib/hooks/useUpdateURL.ts';

const DEFAULT_VALUE = '0';

export const Filter = () => {
    const location = useLocation();
    const { setGenre, setYear } = useActions();
    const { genres, years } = useSelector(getAllOptions);
    const { genre, year } = useSelector(getSelectedOptions);
    const updateURL = useUpdateURL((value) => value === DEFAULT_VALUE || value === '1');

    const handleGenreChange = (e: ChangeEvent<HTMLInputElement>) => {
        updateURL({ genre: e.target.value, page: '1' });
    };

    const handleYearChange = (e: ChangeEvent<HTMLInputElement>) => {
        updateURL({ release_year: e.target.value, page: '1' });
    };

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const genre = params.get('genre') || DEFAULT_VALUE;
        const year = params.get('release_year') || DEFAULT_VALUE;
        setGenre(genre as Genre);
        setYear(year);
    }, [location.search, setGenre, setYear]);

    return (
        <Stack spacing={3} className={styles.container}>
            <Typography variant="h4">Фильтр</Typography>
            <Stack spacing={2}>
                <Stack spacing={1}>
                    <Typography>Жанр</Typography>
                    <BaseSelect options={genres} value={genre} defaultValue="0" onChange={handleGenreChange} />
                </Stack>
                <Stack spacing={1}>
                    <Typography>Год выпуска</Typography>
                    <BaseSelect options={years} value={year} defaultValue="0" onChange={handleYearChange} />
                </Stack>
            </Stack>
        </Stack>
    );
};
