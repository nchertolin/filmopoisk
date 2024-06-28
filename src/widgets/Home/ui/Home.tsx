import { Stack } from '@mui/material';
import { Filter } from '@/features/filter';
import { Films } from '@/widgets/Films';

export const Home = () => {
    console.log('home');

    return (
        <Stack direction="row" spacing={3}>
            <Filter />
            <Films />
        </Stack>
    );
};
