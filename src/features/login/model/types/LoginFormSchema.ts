import { z } from 'zod';

export const loginFormSchema = z.object({
    username: z.string().min(1, { message: 'Имя пользователя обязательно' }),
    password: z.string().min(4, { message: 'Минимум 4 символа' }),
});

export type LoginFormSchema = z.infer<typeof loginFormSchema>;
