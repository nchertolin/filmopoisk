import { bindActionCreators } from '@reduxjs/toolkit';
import { filterActions } from '@/features/filter';
import { searchActions } from '@/features/search';
import { paginationActions } from '@/features/pagination';
import { loginActions } from '@/features/login';
import { useAppDispatch } from '@/app/providers/StoreProvider';
import { userActions } from '@/entities/User';

const actions = {
    ...filterActions,
    ...searchActions,
    ...paginationActions,
    ...loginActions,
    ...userActions,
};

export const useActions = () => {
    const dispatch = useAppDispatch();

    return bindActionCreators(actions, dispatch);
};
