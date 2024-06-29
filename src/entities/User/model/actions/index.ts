import { createAction } from '@reduxjs/toolkit';

const name = 'user';

export const actions = {
    successUser: createAction<string>(`${name}/successUser`),
    requestUser: createAction(`${name}/requestUser`),
    failureUser: createAction<string>(`${name}/failureUser`),
};
