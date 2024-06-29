import { baseApi } from '@/shared/api';
import { FilterSchema } from '@/features/filter';
import { SearchSchema } from '@/features/search';
import { PaginationSchema } from '@/features/pagination';
import { LoginSchema } from '@/features/login';
import { UserSchema } from '@/entities/User';

export interface StateSchema {
    filter: FilterSchema;
    search: SearchSchema;
    pagination: PaginationSchema;
    login: LoginSchema;
    user: UserSchema;
    [baseApi.reducerPath]: ReturnType<typeof baseApi.reducer>;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    state: StateSchema;
}
