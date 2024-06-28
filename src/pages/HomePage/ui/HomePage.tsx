import { Stack } from '@mui/material';
import { BaseField, BasePagination, BaseRating, BaseSearchField, BaseSelect } from '@/shared/ui';
import { SelectOption } from '@/shared/lib/types/selectOption.ts';
import { Film } from '@/entities/Film';

const options = [
    { label: 'Text', value: 0 },
    { label: 'Label 1', value: 1 },
    { label: 'Label 2', value: 2 },
] as SelectOption[];

const HomePage = () => (
    <Stack spacing={2} width={500}>
        <BaseField placeholder="Text" />
        <BaseSearchField placeholder="Text" />
        <BaseSelect options={options.slice(1)} placeholder={options[0]} defaultValue={options[0].value} />
        <BaseRating />
        <Film
            film={{
                id: 1,
                title: 'Title',
                genre: 'Genre',
                release_year: 2001,
                description: 'Description',
                poster: 'https://example.com/poster.jpg',
            }}
        />
        <BasePagination count={4} />
    </Stack>
);

export default HomePage;
