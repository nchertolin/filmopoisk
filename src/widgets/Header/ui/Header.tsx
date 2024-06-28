import { Stack, Typography } from '@mui/material';
import styles from './Header.module.css';
import { BaseButton } from '@/shared/ui';

export const Header = () => {
    console.log('header');

    return (
        <Stack className={styles.container}>
            <Stack direction="row" className={styles.content}>
                <Typography variant="h1" color={(theme) => theme.palette.background.paper}>
                    Фильмопоиск
                </Typography>
                <BaseButton variant="contained">Войти</BaseButton>
            </Stack>
        </Stack>
    );
};
