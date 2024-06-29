import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';

const selectFilter = (state: StateSchema) => state.filter;

export const getAllOptions = createSelector([selectFilter], (filter) => ({
    genres: filter.genres,
    years: filter.years,
}));
