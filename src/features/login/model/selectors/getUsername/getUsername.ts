import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';

const selectLogin = (state: StateSchema) => state.login;

export const getUsername = createSelector([selectLogin], (login) => login.username);
