import { Stack } from '@mui/material';
import { ReactNode } from 'react';
import styles from './Layout.module.css';
import { Header } from '@/widgets/Header';

interface LayoutProps {
    children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => (
    <Stack className={styles.container}>
        <Header />
        <Stack className={styles.content}>{children}</Stack>
    </Stack>
);
