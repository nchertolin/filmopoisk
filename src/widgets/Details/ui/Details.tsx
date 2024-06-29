import { Avatar, Stack, Typography } from '@mui/material';
import styles from './Details.module.css';
import { IFilm } from '@/entities/Film';
import { capitalize } from '@/shared/lib/helpers/capitalize.ts';
import { FilmRate } from '@/features/rate';

interface DetailsProps {
    readonly film: Omit<IFilm, 'actors'>;
}

interface InfoRowProps {
    readonly label: string;
    readonly value: string | number;
    readonly directionColumn?: boolean;
    readonly variant?: 'subtitle1' | 'subtitle2';
}

const InfoRow = (props: InfoRowProps) => {
    const { label, value, directionColumn, variant } = props;
    const direction = directionColumn ? 'column' : 'row';
    return (
        <Stack direction={direction as never} rowGap={2} columnGap={1}>
            <Typography variant="h3">{label}: </Typography>
            <Typography variant={variant}>{value}</Typography>
        </Stack>
    );
};

export const Details = (props: DetailsProps) => {
    const { film } = props;
    const { id, title, genre, release_year, rating, description, poster } = film;

    return (
        <Stack direction="row" spacing={4} className={styles.container}>
            <Avatar src={poster} alt={`Постер ${title}`} className={styles.poster} />
            <Stack spacing={3}>
                <Stack direction="row" justifyContent="space-between">
                    <Typography variant="h2">{title}</Typography>
                    <FilmRate filmId={id} />
                </Stack>
                <Stack spacing={2}>
                    <InfoRow label="Жанр" value={capitalize(genre)} variant="subtitle1" />
                    <InfoRow label="Год выпуска" value={release_year} variant="subtitle1" />
                    <InfoRow label="Рейтинг" value={rating} variant="subtitle1" />
                    <InfoRow label="Описание" value={description} directionColumn variant="subtitle2" />
                </Stack>
            </Stack>
        </Stack>
    );
};
