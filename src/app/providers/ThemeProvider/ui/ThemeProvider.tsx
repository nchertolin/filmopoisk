import { FC, ReactNode } from 'react';
import { ThemeProvider as Theme } from '@mui/material';
import { theme } from '@/shared/theme';

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => <Theme theme={theme}>{children}</Theme>;
