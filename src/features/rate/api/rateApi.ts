import { baseApi } from '@/shared/api';
import { RateRequest } from './types/RateRequest';
import { LocalStorageService } from '@/shared/lib/helpers/localStorage.ts';

const rateApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        postRate: build.mutation<string, RateRequest>({
            query: (req) => ({
                url: '/rateMovie',
                method: 'POST',
                body: req,
            }),
            transformResponse: (response: string, _: unknown, arg: RateRequest) => {
                if (response) {
                    LocalStorageService.save(arg.movieId, arg.user_rate);
                }
                return response;
            },
            invalidatesTags: (result, _: unknown, arg: RateRequest) =>
                result
                    ? [
                          {
                              type: 'Film',
                              id: arg.movieId,
                          },
                      ]
                    : ['Film'],
        }),
    }),
});

export const { usePostRateMutation } = rateApi;
