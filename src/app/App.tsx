import { useEffect } from 'react';
import { AppRouter } from '@/app/providers/RouterProvider';
import { getUser } from '@/entities/User/model/services/getUser.ts';
import { useAppDispatch } from '@/app/providers/StoreProvider';
import './styles/index.css';

const App = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getUser());
    }, [dispatch]);

    return <AppRouter />;
};

export default App;
