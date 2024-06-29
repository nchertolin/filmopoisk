import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema.ts';
import { getToken, LoginRequest } from '@/entities/User';
import { AppError } from '@/shared/lib/types/appError.ts';
import { actions } from '../actions';
import { getUsername } from '../selectors/getUsername/getUsername';
import { getPassword } from '../selectors/getPassword/getPassword';

export const loginByUsername = createAsyncThunk<void, void, ThunkConfig<AppError<LoginRequest>>>(
    'login/loginByUsername',
    async (_, thunkApi) => {
        const { dispatch, getState } = thunkApi;
        dispatch(actions.request());
        try {
            const username = getUsername(getState());
            const password = getPassword(getState());
            await dispatch(getToken({ username, password })).unwrap();
            dispatch(actions.success());
        } catch (error: unknown) {
            dispatch(actions.failure());
        }
        return undefined;
    },
);
