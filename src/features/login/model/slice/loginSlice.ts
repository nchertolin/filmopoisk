import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Status } from '@/shared/api';
import { LoginSchema } from '../types/LoginSchema';
import { actions } from '../actions';

const initialState: LoginSchema = {
    username: '',
    password: '',
    status: Status.initial,
};

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<LoginSchema['username']>) => {
            state.username = action.payload;
        },
        setPassword: (state, action: PayloadAction<LoginSchema['password']>) => {
            state.password = action.payload;
        },
        clear: () => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(actions.request, (state: LoginSchema) => {
                state.error = undefined;
                state.status = Status.request;
            })
            .addCase(actions.success, (state: LoginSchema) => {
                state.status = Status.success;
            })
            .addCase(actions.failure, (state: LoginSchema, action) => {
                state.status = Status.failure;
                state.error = action.payload;
            });
    },
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
