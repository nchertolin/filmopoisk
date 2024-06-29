import { useSelector } from 'react-redux';
import { ChangeEvent, memo } from 'react';
import { getPage } from '../model/selectors/getPage/getPage';
import { BasePagination } from '@/shared/ui';
import { useActions } from '@/app/providers/StoreProvider';

interface FilmsPaginationProps {
    readonly count: number;
}

export const FilmsPagination = memo((props: FilmsPaginationProps) => {
    const { count } = props;
    const page = useSelector(getPage);
    const { setPage } = useActions();

    const handlePageChange = (_: ChangeEvent<unknown>, page: number) => {
        setPage(page);
        window.scrollTo(0, 0);
    };

    return <BasePagination page={page} count={count} onChange={handlePageChange} />;
});
