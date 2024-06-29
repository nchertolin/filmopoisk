import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';

const selectLogin = (state: StateSchema) => state.login;

export const getPassword = createSelector([selectLogin], (login) => login.password);
