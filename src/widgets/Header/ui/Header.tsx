import { Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styles from './Header.module.css';
import { LoginModal } from '@/features/login';

export const Header = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    };

    return (
        <Stack className={styles.container}>
            <Stack direction="row" className={styles.content}>
                <Typography
                    variant="h1"
                    color={(theme) => theme.palette.background.paper}
                    onClick={handleClick}
                    sx={{ cursor: 'pointer' }}
                >
                    Фильмопоиск
                </Typography>
                <LoginModal />
            </Stack>
        </Stack>
    );
};
