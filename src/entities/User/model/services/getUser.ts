import { createAsyncThunk } from '@reduxjs/toolkit';
import { actions } from '../actions';
import { UserSecretStorageService } from '@/shared/lib/helpers/userSecretStorage.ts';
import { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema.ts';

export const getUser = createAsyncThunk<void, void, ThunkConfig<void>>('user/getUser', async (_, thunkApi) => {
    const { dispatch } = thunkApi;
    const token = await UserSecretStorageService.get();
    if (token) {
        dispatch(actions.successUser(token));
    } else {
        dispatch(actions.failureUser('failureUser'));
    }
});
