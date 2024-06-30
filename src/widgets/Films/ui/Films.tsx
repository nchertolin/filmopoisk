import { Stack } from '@mui/material';
import { useSelector } from 'react-redux';
import { Film } from '@/entities/Film';
import { FilmsSearch, getTitle } from '@/features/search';
import { useGetFilmsQuery } from '../api/filmsApi';
import { getSelectedOptions } from '@/features/filter';
import { Loader } from '@/widgets/Loader';
import { FilmsEmpty } from './Films.empty';
import { FilmsPagination, getPage } from '@/features/pagination';

export const Films = () => {
    const title = useSelector(getTitle);
    const page = useSelector(getPage);
    const { genre, year } = useSelector(getSelectedOptions);

    const { isFetching, data } = useGetFilmsQuery({
        title: title.length ? title : undefined,
        genre: genre !== '0' ? genre : undefined,
        release_year: year !== '0' ? Number(year) : undefined,
        page: page !== 1 ? page : undefined,
    });

    const isEmpty = data?.search_result.length === 0;
    const isPaginationVisible = (!isFetching && Boolean(data?.total_pages) && data?.total_pages! > 1) ?? false;

    return (
        <Stack spacing={2} width="100%">
            <FilmsSearch />

            {/* eslint-disable-next-line no-nested-ternary */}
            {isFetching ? (
                <Loader height="calc(100vh - 200px)" />
            ) : isEmpty ? (
                <FilmsEmpty height="calc(100vh - 200px)" />
            ) : (
                data?.search_result.map((item) => <Film key={item.id} film={item} />)
            )}

            {isPaginationVisible && <FilmsPagination count={data?.total_pages || 1} />}
        </Stack>
    );
};
