import { BaseQueryApi, FetchArgs } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './baseQuery';

// const AUTH_ERROR_CODES = new Set([401]);

export const baseQueryWithReauth = async (
    args: string | FetchArgs,
    api: BaseQueryApi,
    extraOptions: NonNullable<unknown>,
) => {
    const result = await baseQuery(args, api, extraOptions);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    // if (AUTH_ERROR_CODES.has(result?.error?.status as number)) {
    // }
    return result;
};
