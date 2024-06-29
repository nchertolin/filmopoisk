import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';

const selectSearch = (state: StateSchema) => state.search;

export const getTitle = createSelector([selectSearch], (search) => search.title);
