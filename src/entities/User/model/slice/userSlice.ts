import { createSlice } from '@reduxjs/toolkit';
import { UserSecretStorageService } from '@/shared/lib/helpers/userSecretStorage';
import { UserSchema } from '../types/UserSchema';
import { actions } from '../actions';
import { Status } from '@/shared/api';

const initialState: UserSchema = {
    userStatus: Status.initial,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: (state) => {
            state.userStatus = Status.initial;
            state.userError = undefined;
            UserSecretStorageService.clear();
        },
        login: (state) => {
            state.userStatus = Status.success;
            state.userError = undefined;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(actions.requestUser, (state: UserSchema) => {
                state.userStatus = Status.request;
                state.userError = undefined;
            })
            .addCase(actions.successUser, (state: UserSchema) => {
                state.userStatus = Status.success;
            })
            .addCase(actions.failureUser, (state: UserSchema, { payload }) => {
                state.userStatus = Status.failure;
                state.userError = payload;
            });
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
