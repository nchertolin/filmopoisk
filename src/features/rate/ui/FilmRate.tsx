import { RatingProps } from '@mui/material';
import { SyntheticEvent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDebouncedCallback } from 'use-debounce';
import { BaseRating } from '@/shared/ui';
import { usePostRateMutation } from '../api/rateApi';
import { LocalStorageService } from '@/shared/lib/helpers/localStorage.ts';
import { getUserInited } from '@/entities/User';
import { DEBOUCE_DELAY } from '@/shared/lib/const';

type FilmRateProps = RatingProps & {
    readonly filmId: string;
};

export const FilmRate = (props: FilmRateProps) => {
    const { filmId, ...ratingProps } = props;
    const [rating, setRating] = useState(0);
    const isAuth = useSelector(getUserInited);
    const [postRate, { isLoading }] = usePostRateMutation();

    const debouncedPostRate = useDebouncedCallback((value: number) => {
        postRate({ movieId: filmId, user_rate: value });
    }, DEBOUCE_DELAY);

    const handleRatingChange = (_: SyntheticEvent, value: number) => {
        debouncedPostRate(value);
        setRating(value);
    };

    useEffect(() => {
        const fetchRate = async () => {
            const rate = await LocalStorageService.get(filmId);
            setRating(rate ? Number(rate) : 0);
        };

        fetchRate();
    }, [filmId]);

    return <BaseRating onChange={handleRatingChange} value={rating} disabled={isLoading || !isAuth} {...ratingProps} />;
};
