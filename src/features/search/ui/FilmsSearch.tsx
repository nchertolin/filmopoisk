import { Stack } from '@mui/material';
import { BaseSearchField } from '@/shared/ui';

export const FilmsSearch = () => {
    console.log('search');

    return (
        <Stack width="var(--search-width)">
            <BaseSearchField placeholder="Название фильма" />
        </Stack>
    );
};
