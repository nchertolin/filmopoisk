import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';

const selectFilter = (state: StateSchema) => state.filter;

export const getSelectedOptions = createSelector([selectFilter], (filter) => ({
    genre: filter.genre,
    year: filter.year,
}));
