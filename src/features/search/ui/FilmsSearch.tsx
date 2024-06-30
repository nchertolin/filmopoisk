import { Stack } from '@mui/material';
import { ChangeEvent, memo, useEffect, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { useLocation } from 'react-router-dom';
import { BaseSearchField } from '@/shared/ui';
import { DEBOUCE_DELAY } from '@/shared/lib/const/';
import { useActions } from '@/app/providers/StoreProvider';
import { useUpdateURL } from '@/shared/lib/hooks/useUpdateURL.ts';

const DEFAULT_VALUE = '';

export const FilmsSearch = memo(() => {
    const location = useLocation();
    const { setTitle } = useActions();
    const [search, setSearch] = useState(DEFAULT_VALUE);
    const updateURL = useUpdateURL((value) => value === DEFAULT_VALUE || value === 1);

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        const title = e.target.value;
        setSearch(title);
        updateURL({ title, page: 1 });
    };

    const handleClear = () => {
        setSearch(DEFAULT_VALUE);
        updateURL({ title: DEFAULT_VALUE, page: 1 });
    };

    const debouncedSetTitle = useDebouncedCallback((value: string) => {
        setTitle(value);
    }, DEBOUCE_DELAY);

    useEffect(() => {
         
        const params = new URLSearchParams(location.search);
        const title = params.get('title') || DEFAULT_VALUE;
        setSearch(title);

        debouncedSetTitle(title);
    }, [location.search, debouncedSetTitle]);

    return (
        <Stack width="var(--search-width)">
            <BaseSearchField
                autoComplete="off"
                placeholder="Название фильма"
                value={search}
                onChange={handleSearchChange}
                onClear={handleClear}
            />
        </Stack>
    );
});
