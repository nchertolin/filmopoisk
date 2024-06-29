import { Avatar, Paper, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { memo } from 'react';
import { IFilm } from '../model/types/IFilm';
import styles from './Film.module.css';
import { FilmRate } from '@/features/rate';
import { capitalize } from '@/shared/lib/helpers/capitalize.ts';

interface FilmProps {
    readonly film: Pick<IFilm, 'id' | 'title' | 'genre' | 'release_year' | 'description' | 'poster'>;
}

interface InfoRowProps {
    readonly label: string;
    readonly value: string | number;
}

const InfoRow = (props: InfoRowProps) => {
    const { label, value } = props;
    return (
        <Stack direction="row" spacing={2}>
            <Typography color="secondary" width="100px">
                {label}
            </Typography>
            <Typography className={styles.description} width="100%">
                {value}
            </Typography>
        </Stack>
    );
};

export const Film = memo((props: FilmProps) => {
    const { film } = props;
    const { id, title, genre, poster, release_year, description } = film;

    return (
        <Paper component={Stack} direction="row" elevation={0} className={styles.container}>
            <Stack direction="row" spacing={3}>
                <Avatar src={poster} alt={`Постер ${title}`} className={styles.poster} />
                <Stack spacing={2}>
                    <Link to={`${id}`}>
                        <Typography variant="h3">{title}</Typography>
                    </Link>

                    <Stack spacing={1}>
                        <InfoRow label="Жанр" value={capitalize(genre)} />
                        <InfoRow label="Год выпуска" value={release_year} />
                        <InfoRow label="Описание" value={description} />
                    </Stack>
                </Stack>
            </Stack>
            <FilmRate filmId={id} />
        </Paper>
    );
});
