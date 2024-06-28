import { Stack } from '@mui/material';
import { Details } from '@/widgets/Details';
import { ActorsCarousel } from '@/widgets/ActorsCarousel';
import { IActor } from '@/entities/Actor';

const actors = [
    {
        id: 1,
        name: 'Actor 1',
        image: '',
    },
    {
        id: 2,
        name: 'Actor 2',
        image: '',
    },
    {
        id: 3,
        name: 'Actor 3',
        image: '',
    },
    {
        id: 4,
        name: 'Actor 4',
        image: '',
    },
    {
        id: 5,
        name: 'Actor 5',
        image: '',
    },
    {
        id: 6,
        name: 'Actor 6',
        image: '',
    },
    {
        id: 7,
        name: 'Actor 7',
        image: '',
    },
    {
        id: 8,
        name: 'Actor 8',
        image: '',
    },
    {
        id: 9,
        name: 'Actor 9',
        image: '',
    },
    {
        id: 10,
        name: 'Actor 10',
        image: '',
    },
    {
        id: 11,
        name: 'Actor 11',
        image: '',
    },
    {
        id: 12,
        name: 'Actor 12',
        image: '',
    },
    {
        id: 13,
        name: 'Actor 13',
        image: '',
    },
];

const DetailsPage = () => (
    <Stack spacing={3}>
        <Details
            film={{
                id: 1,
                title: 'Title',
                genre: 'Genre',
                rating: 4,
                release_year: 2001,
                description: 'Description',
                poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKTezalux1__3KwbJ1Bt-WnQQkW82G1Nwy6g&s',
            }}
        />
        <ActorsCarousel items={actors as IActor[]} />
    </Stack>
);

export default DetailsPage;
