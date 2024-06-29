import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { baseApi } from '@/shared/api';
import { StateSchema } from './StateSchema';
import { filterReducer } from '@/features/filter';
import { searchReducer } from '@/features/search';
import { paginationReducer } from '@/features/pagination';
import { loginReducer } from '@/features/login';
import { userReducer } from '@/entities/User';

const rootReducer = combineReducers({
    filter: filterReducer,
    search: searchReducer,
    pagination: paginationReducer,
    login: loginReducer,
    user: userReducer,
    [baseApi.reducerPath]: baseApi.reducer,
});

export function createReduxStore(initialState?: StateSchema) {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: false,
            }).concat(baseApi.middleware),
        preloadedState: initialState,
        devTools: import.meta.env.VITE_MODE === 'development',
    });
}

export type Store = ReturnType<typeof createReduxStore>;
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
