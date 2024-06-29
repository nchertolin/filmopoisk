import { Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './Header.module.css';
import { LoginModal } from '@/features/login';
import { getUserInited } from '@/entities/User';
import { UserIcon } from '@/shared/ui/Icons/UserIcon.tsx';
import { LogoutButton } from '@/features/logout';

export const Header = () => {
    const navigate = useNavigate();
    const isAuth = useSelector(getUserInited);

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
                {isAuth ? (
                    <Stack direction="row" spacing={2}>
                        <UserIcon />
                        <LogoutButton />
                    </Stack>
                ) : (
                    <LoginModal />
                )}
            </Stack>
        </Stack>
    );
};
