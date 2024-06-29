import { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Loader } from '@/widgets/Loader';
import { AppRoutesProps, routeConfig } from '../config/routeConfig';
import { Layout } from '@/widgets/Layout';

export const AppRouter = memo(() => {
    const renderWithWrapper = useCallback(
        (route: AppRoutesProps) => <Route key={route.path} path={route.path} element={route.element} />,
        [],
    );

    return (
        <Suspense fallback={<Loader width="100vw" height="100vh" />}>
            <Layout>
                <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
            </Layout>
        </Suspense>
    );
});
