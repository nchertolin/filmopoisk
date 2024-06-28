import { RouteProps } from 'react-router-dom';
import { HomePage } from '@/pages/HomePage';
import { DetailsPage } from '@/pages/DetailsPage';

export type AppRoutesProps = RouteProps;

export enum AppRoutes {
    Main = 'Main',
    Details = 'Details',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.Main]: '*',
    [AppRoutes.Details]: '/:id',
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.Main]: {
        path: RoutePath.Main,
        element: <HomePage />,
    },
    [AppRoutes.Details]: {
        path: RoutePath.Details,
        element: <DetailsPage />,
    },
};
