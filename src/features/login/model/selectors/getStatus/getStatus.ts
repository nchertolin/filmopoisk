import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';

const selectLogin = (state: StateSchema) => state.login;

export const getStatus = createSelector([selectLogin], (login) => login.status);
