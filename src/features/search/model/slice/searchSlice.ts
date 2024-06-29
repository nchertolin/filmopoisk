import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SearchSchema } from '../types/SearchSchema';

export const initialState: SearchSchema = {
    title: '',
};

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setTitle: (state, action: PayloadAction<string>) => {
            state.title = action.payload;
        },
        clear: () => initialState,
    },
});

export const { actions: searchActions } = searchSlice;
export const { reducer: searchReducer } = searchSlice;
