import {
    type BaseQueryFn,
    type FetchArgs,
    fetchBaseQuery,
    type FetchBaseQueryError,
    type FetchBaseQueryMeta,
} from '@reduxjs/toolkit/query/react';
import { UserSecretStorageService } from '@/shared/lib/helpers/userSecretStorage';

export const baseQuery: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError,
    NonNullable<unknown>,
    FetchBaseQueryMeta
> = fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API,
    prepareHeaders: async (headers) => {
        const token = await UserSecretStorageService.get();
        if (token) {
            headers.set('Authorization', `Bearer ${token}`);
        }
        return headers;
    },
});
