import { ChangeEvent, memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { BasePagination } from '@/shared/ui';
import { useActions } from '@/app/providers/StoreProvider';
import { useUpdateURL } from '@/shared/lib/hooks/useUpdateURL.ts';
import { getPage } from '@/features/pagination';

interface FilmsPaginationProps {
    readonly count: number;
}

const DEFAULT_VALUE = '1';

export const FilmsPagination = memo((props: FilmsPaginationProps) => {
    const { count } = props;
    const location = useLocation();
    const { setPage } = useActions();
    const page = useSelector(getPage);
    const updateURL = useUpdateURL((value) => value === DEFAULT_VALUE);

    const handlePageChange = (_: ChangeEvent<unknown>, value: number) => {
        updateURL({ page: value.toString() });
        window.scrollTo(0, 0);
    };

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const pageFromParams = params.get('page') || DEFAULT_VALUE;
        setPage(Number(pageFromParams));
    }, [location.search, page, setPage]);

    return <BasePagination page={page} count={count} onChange={handlePageChange} />;
});
