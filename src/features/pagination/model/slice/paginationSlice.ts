import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PaginationSchema } from '../types/PaginationSchema';

export const initialState: PaginationSchema = {
    page: 1,
};

export const paginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        setPage: (state, action: PayloadAction<PaginationSchema['page']>) => {
            state.page = action.payload;
        },
    },
});

export const { actions: paginationActions } = paginationSlice;
export const { reducer: paginationReducer } = paginationSlice;
