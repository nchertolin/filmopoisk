import { baseApi } from '@/shared/api';
import { FilmParams } from './types/FilmParams';
import { IFilm } from '@/entities/Film';

const detailsApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getFilmById: build.query<IFilm, FilmParams>({
            query: (req) => ({
                url: `/movie/${req.id}`,
                method: 'GET',
            }),
            providesTags: (result, error, arg) => (result ? [{ type: 'Film' as const, id: arg.id }] : ['Film']),
        }),
    }),
});

export const { useGetFilmByIdQuery } = detailsApi;
