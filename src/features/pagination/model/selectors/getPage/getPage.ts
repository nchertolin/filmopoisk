import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';

const selectPagination = (state: StateSchema) => state.pagination;

export const getPage = createSelector([selectPagination], (pagination) => pagination.page);
