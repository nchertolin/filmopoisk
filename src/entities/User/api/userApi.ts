import { baseApi } from '@/shared/api';
import { LoginRequest } from './types/LoginRequest';
import { TokenDto } from './types/TokenDto';
import { UserSecretStorageService } from '@/shared/lib/helpers/userSecretStorage.ts';

const userApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getToken: build.mutation<TokenDto, LoginRequest>({
            query: (req) => ({
                url: '/login',
                method: 'POST',
                body: req,
            }),
            transformResponse: async (response: TokenDto) => {
                await UserSecretStorageService.save(response.token);
                return response;
            },
        }),
    }),
});

export const getToken = userApi.endpoints.getToken.initiate;
