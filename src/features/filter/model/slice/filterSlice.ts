import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterSchema } from '../types/filterSchema';
import { GENRES } from '../const/genres.ts';
import { YEARS } from '../const/years.ts';

export const initialState: FilterSchema = {
    genre: '0',
    year: '0',
    genres: GENRES,
    years: YEARS,
};

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setGenre: (state, action: PayloadAction<FilterSchema['genre']>) => {
            state.genre = action.payload;
        },
        setYear: (state, action: PayloadAction<FilterSchema['year']>) => {
            state.year = action.payload;
        },
        clear: () => initialState,
    },
});

export const { actions: filterActions } = filterSlice;
export const { reducer: filterReducer } = filterSlice;
