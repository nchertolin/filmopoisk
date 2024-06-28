import { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRoutesProps, routeConfig } from '../config/routeConfig';
import { PageLoader } from '@/widgets/PageLoader';
import { Layout } from '@/widgets/Layout';

export const AppRouter = memo(() => {
    const renderWithWrapper = useCallback(
        (route: AppRoutesProps) => <Route key={route.path} path={route.path} element={route.element} />,
        [],
    );

    return (
        <Suspense fallback={<PageLoader />}>
            <Layout>
                <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
            </Layout>
        </Suspense>
    );
});
