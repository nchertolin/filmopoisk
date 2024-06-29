import { baseApi } from '@/shared/api';
import { RateRequest } from './types/RateRequest';
import { LocalStorageService } from '@/shared/lib/helpers/localStorage.ts';

const rateApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        postRate: build.mutation<void, RateRequest>({
            query: (req) => ({
                url: '/rateMovie',
                method: 'POST',
                body: req,
            }),
            transformResponse: (response, _, arg) => {
                LocalStorageService.save(arg.movieId, arg.user_rate);
            },
            invalidatesTags: (_, error, arg) => [{ type: 'Film', id: arg.id }],
        }),
    }),
});

export const { usePostRateMutation } = rateApi;
