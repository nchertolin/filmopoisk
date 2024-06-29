import { Stack, Typography } from '@mui/material';

interface FilmsEmptyProps {
    readonly height?: string | number;
}

export const FilmsEmpty = (props: FilmsEmptyProps) => {
    const { height } = props;

    return (
        <Stack spacing={1} width="100%" height={height || '100%'} alignItems="center" justifyContent="center">
            <Typography variant="h4">Фильмы не найдены</Typography>
            <Typography color="secondary">Измените запрос и попробуйте снова</Typography>
        </Stack>
    );
};
