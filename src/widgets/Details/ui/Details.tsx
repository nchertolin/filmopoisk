import { Avatar, Stack, Typography } from '@mui/material';
import styles from './Details.module.css';
import { IFilm } from '@/entities/Film';

interface DetailsProps {
    readonly film: Omit<IFilm, 'actors'>;
}

interface InfoRowProps {
    readonly label: string;
    readonly value: string | number;
    readonly directionColumn?: boolean;
}

const InfoRow = (props: InfoRowProps) => {
    const { label, value, directionColumn } = props;
    const direction = directionColumn ? 'column' : 'row';
    return (
        <Stack direction={direction as never} rowGap={2} columnGap={1}>
            <Typography variant="h3">{label}: </Typography>
            <Typography variant="subtitle1">{value}</Typography>
        </Stack>
    );
};

export const Details = (props: DetailsProps) => {
    const { film } = props;
    const { title, genre, release_year, rating, description } = film;

    return (
        <Stack direction="row" spacing={4} className={styles.container}>
            <Avatar src={undefined} alt={`Постер ${undefined}`} className={styles.poster} />
            <Stack spacing={3}>
                <Typography variant="h2">{title}</Typography>
                <Stack spacing={2}>
                    <InfoRow label="Жанр" value={genre} />
                    <InfoRow label="Год выпуска" value={release_year} />
                    <InfoRow label="Рейтинг" value={rating} />
                    <InfoRow label="Описание" value={description} directionColumn />
                </Stack>
            </Stack>
        </Stack>
    );
};
