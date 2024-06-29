import { Stack } from '@mui/material';
import { useSelector } from 'react-redux';
import { ChangeEvent, memo, useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import { BaseSearchField } from '@/shared/ui';
import { getTitle } from '../model/selectors/getTitle/getTitle';
import { DEBOUCE_DELAY } from '@/shared/lib/const/';
import { useActions } from '@/app/providers/StoreProvider';

export const FilmsSearch = memo(() => {
    const { setTitle, setPage } = useActions();
    const title = useSelector(getTitle);
    const [search, setSearch] = useState(title);
    const [debounceSearch] = useDebounce(search, DEBOUCE_DELAY);

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    const handleClear = () => {
        setSearch('');
    };

    useEffect(() => {
        if (debounceSearch !== title) {
            setTitle(debounceSearch);
            setPage(1);
        }
    }, [title, debounceSearch, setTitle, setPage]);

    return (
        <Stack width="var(--search-width)">
            <BaseSearchField
                placeholder="Название фильма"
                value={search}
                onChange={handleSearchChange}
                onClear={handleClear}
            />
        </Stack>
    );
});
