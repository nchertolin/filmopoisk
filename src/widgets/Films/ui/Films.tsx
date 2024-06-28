// import styles from './Films.module.css';

import { Stack } from '@mui/material';
import { BasePagination } from '@/shared/ui';
import { Film } from '@/entities/Film';
import { FilmsSearch } from '@/features/search';

export const Films = () => {
    console.log('Films');

    return (
        <Stack spacing={2} width="100%">
            <FilmsSearch />

            <Film
                film={{
                    id: 1,
                    title: 'Title',
                    genre: 'Genre',
                    release_year: 2001,
                    description: 'Description',
                    poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKTezalux1__3KwbJ1Bt-WnQQkW82G1Nwy6g&s',
                }}
            />

            <BasePagination count={4} />
        </Stack>
    );
};
