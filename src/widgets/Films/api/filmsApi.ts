import { baseApi } from '@/shared/api';
import { FilmsModel } from './types/FilmsModel';
import { FilmsParams } from './types/FilmsRequest';

const filmsApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getFilms: build.query<FilmsModel, FilmsParams>({
            query: (req) => ({
                url: '/search',
                params: req,
            }),
        }),
    }),
});

export const { useGetFilmsQuery } = filmsApi;
