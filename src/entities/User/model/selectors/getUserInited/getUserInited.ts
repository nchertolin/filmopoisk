import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import { Status } from '@/shared/api';

const selectUser = (state: StateSchema) => state.user;

export const getUserInited = createSelector([selectUser], (user) => user.userStatus === Status.success);
