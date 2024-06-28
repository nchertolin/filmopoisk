import { FormControl, IconButton, InputLabel, Modal, Paper, Stack, Typography } from '@mui/material';
import { memo, useState } from 'react';
import { BaseButton, BaseField } from '@/shared/ui';
import { CloseIcon } from '@/shared/ui/Icons/CloseIcon';
import styles from './LoginModal.module.css';

export const LoginModal = memo(() => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen((prev) => !prev);

    return (
        <>
            <BaseButton onClick={toggleOpen}>Войти</BaseButton>
            <Modal open={isOpen} className={styles.backdrop}>
                <Stack component={Paper} spacing={3} className={styles.modal}>
                    <Stack direction="row" justifyContent="space-between">
                        <Typography variant="h3">Авторизация</Typography>
                        <IconButton onClick={toggleOpen} sx={{ padding: 0 }}>
                            <CloseIcon />
                        </IconButton>
                    </Stack>
                    <Stack spacing={2}>
                        <FormControl required>
                            <InputLabel shrink htmlFor="login">
                                Логин
                            </InputLabel>
                            <BaseField id="login" placeholder="Введите логин" required />
                        </FormControl>
                        <FormControl required>
                            <InputLabel shrink htmlFor="password">
                                Пароль
                            </InputLabel>
                            <BaseField id="password" placeholder="Введите пароль" required />
                        </FormControl>
                    </Stack>
                    <Stack direction="row" spacing={1}>
                        <BaseButton onClick={toggleOpen}>Войти</BaseButton>
                        <BaseButton variant="outlined" onClick={toggleOpen}>
                            Отменить
                        </BaseButton>
                    </Stack>
                </Stack>
            </Modal>
        </>
    );
});
