import { FormControl, IconButton, InputLabel, Modal, Paper, Stack, Typography } from '@mui/material';
import { ChangeEvent, memo, useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useDispatch, useSelector } from 'react-redux';
import { BaseButton, BaseField } from '@/shared/ui';
import { CloseIcon } from '@/shared/ui/Icons/CloseIcon';
import { LoginFormSchema, loginFormSchema } from '../model/types/LoginFormSchema';
import { Status } from '@/shared/api';
import styles from './LoginModal.module.css';
import { loginActions } from '../model/slice/loginSlice';
import { loginByUsername } from '../model/services/loginByUsername';
import { getStatus } from '../model/selectors/getStatus/getStatus';
import { userActions } from '@/entities/User';

export const LoginModal = memo(() => {
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);
    const status = useSelector(getStatus);

    const {
        formState: { errors },
        handleSubmit,
        register,
        reset,
    } = useForm<LoginFormSchema>({
        resolver: zodResolver(loginFormSchema),
    });

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = useCallback(() => {
        setIsOpen(false);
        reset();
        dispatch(loginActions.clear());
    }, [dispatch, reset]);

    const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(loginActions.setUsername(e.target.value));
    };

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(loginActions.setPassword(e.target.value));
    };

    const handleSubmitForm = () => {
        dispatch(loginByUsername() as never);
    };

    useEffect(() => {
        if (status === Status.success) {
            handleClose();
            dispatch(userActions.login());
        }
    }, [status, handleClose, dispatch]);

    return (
        <>
            <BaseButton onClick={handleOpen}>Войти</BaseButton>
            <Modal open={isOpen} className={styles.backdrop}>
                <form onSubmit={handleSubmit(handleSubmitForm)}>
                    <Stack component={Paper} spacing={3} className={styles.modal}>
                        <Stack direction="row" justifyContent="space-between">
                            <Typography variant="h3">Авторизация</Typography>
                            <IconButton onClick={handleClose} sx={{ padding: 0 }}>
                                <CloseIcon />
                            </IconButton>
                        </Stack>
                        <Stack spacing={2}>
                            <FormControl required>
                                <InputLabel shrink htmlFor="username">
                                    Логин
                                </InputLabel>
                                <BaseField
                                    {...register<'username'>('username')}
                                    id="username"
                                    placeholder="Введите логин"
                                    error={Boolean(errors.username)}
                                    helperText={errors.username?.message}
                                    onChange={handleUsernameChange}
                                    autoFocus
                                />
                            </FormControl>
                            <FormControl required>
                                <InputLabel shrink htmlFor="password">
                                    Пароль
                                </InputLabel>
                                <BaseField
                                    {...register<'password'>('password')}
                                    type="password"
                                    id="password"
                                    placeholder="Введите пароль"
                                    error={Boolean(errors.password)}
                                    helperText={errors.password?.message}
                                    onChange={handlePasswordChange}
                                />
                            </FormControl>
                        </Stack>
                        <Stack direction="row" spacing={1}>
                            <BaseButton type="submit" disabled={status === Status.request}>
                                Войти
                            </BaseButton>
                            <BaseButton type="reset" variant="outlined" onClick={handleClose}>
                                Отменить
                            </BaseButton>
                        </Stack>
                        {Boolean(errors.root?.message) && <Typography color="error">{errors.root!.message}</Typography>}
                    </Stack>
                </form>
            </Modal>
        </>
    );
});
