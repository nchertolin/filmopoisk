import { BaseQueryApi, FetchArgs } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './baseQuery';

export const baseQueryWithReauth = async (
    args: string | FetchArgs,
    api: BaseQueryApi,
    extraOptions: NonNullable<unknown>,
) => baseQuery(args, api, extraOptions);
