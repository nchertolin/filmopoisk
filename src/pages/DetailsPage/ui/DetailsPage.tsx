import { Stack, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { Swiper } from '@/widgets/Swiper';
import { Details } from '@/widgets/Details';
import { useGetFilmByIdQuery } from '../api/detailsApi';
import { Loader } from '@/widgets/Loader';

const DetailsPage = () => {
    const { id } = useParams();
    const { isLoading, data } = useGetFilmByIdQuery({ id: id! });

    if (isLoading) {
        return <Loader height="90vh" />;
    }

    if (!data) {
        return <Typography variant="h4">Нет информации о фильме</Typography>;
    }

    return (
        <Stack spacing={3}>
            <Details film={data!} />
            <Swiper items={data!.actors || []} />
        </Stack>
    );
};

export default DetailsPage;
